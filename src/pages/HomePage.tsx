import { useDeferredValue, useEffect, useMemo, useState } from "react";
import type * as React from "react";
import {
  FiCamera,
  FiCopy,
  FiHelpCircle,
  FiHome,
  FiPhone,
  FiPlus,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { GiMusicalScore } from "react-icons/gi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { firebaseAuth } from "../config/firebase";
import { type AccessLevel, normalizeAccessLevel, normalizePermissions } from "../data/access";
import logoAd from "../img/Login/LogoAD.png";
import {
  getMemberProfile,
  listMemberDirectoryProfiles,
  type MemberDirectoryProfile,
  type MemberProfile,
  type OwnMemberProfileUpdate,
  updateOwnMemberProfile,
} from "../services/memberProfiles";

type HomePageProps = {
  memberName: string;
  memberGender: string;
  memberVocalRange: string;
  accountLevel: AccessLevel;
  leadershipRole: string;
  permissions: string[];
  onBackToAuth: () => void;
};

type HomeTab = "home" | "agenda" | "songs" | "profile";
type ComposerMode = "home" | "agenda";

type CommentEntry = {
  id: string;
  author: string;
  role: string;
  text: string;
  createdAt: string;
};

type FeedPost = {
  id: string;
  category: string;
  title: string;
  content: string;
  author: string;
  role: string;
  dateLabel: string;
  imageUrl?: string;
  comments: CommentEntry[];
};

type AgendaEvent = {
  id: string;
  kind: string;
  title: string;
  dateLabel: string;
  time: string;
  location: string;
  note: string;
  author: string;
  comments: CommentEntry[];
};

const initialPosts: FeedPost[] = [];
const initialAgendaEvents: AgendaEvent[] = [];
const repertoireHighlights: Array<{ id: string; title: string; tone: string; note: string }> = [];

function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function getFirstName(fullName: string) {
  return fullName.trim().split(" ")[0] || fullName;
}

function getInitials(fullName: string) {
  const chunks = fullName.trim().split(/\s+/).filter(Boolean);
  return ((chunks[0]?.[0] || "V") + (chunks[1]?.[0] || "")).toUpperCase();
}

function normalizePhoneNumber(value: string) {
  return value.replace(/\D/g, "");
}

function formatDisplayDate(value: string) {
  if (!value) {
    return "Hoje";
  }

  const parsedDate = new Date(`${value}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function buildWhatsappLink(phone: string) {
  const digits = normalizePhoneNumber(phone);

  if (!digits) {
    return "";
  }

  const normalized = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${normalized}`;
}

function resolveRoleLabel(role: string, accountLevel: AccessLevel, gender: string) {
  const isFeminine = gender === "Feminino";

  if (role === "Secretário") {
    return isFeminine ? "Secretária" : "Secretário";
  }

  if (role === "Vice-Secretário") {
    return isFeminine ? "Vice-Secretária" : "Vice-Secretário";
  }

  if (role === "Maestro") {
    return isFeminine ? "Maestra" : "Maestro";
  }

  if (accountLevel === "administration") {
    return isFeminine ? "Administradora" : "Administrador";
  }

  return role || "Integrante";
}

function resolveDirectoryRoleLabel(member: MemberDirectoryProfile) {
  if (member.accountLevel === "administration") {
    return "Administração";
  }

  return member.leadershipRole || "Membro";
}

function resolveSearchPlaceholder(tab: HomeTab) {
  switch (tab) {
    case "agenda":
      return "Buscar eventos, local ou observações";
    case "songs":
      return "Buscar músicas e observações";
    case "profile":
      return "Buscar membro, cargo ou timbre";
    default:
      return "Buscar avisos, comentários ou informações";
  }
}

function buildProfileDraft(
  profile: Partial<MemberProfile> | null,
  fallbackName: string,
  fallbackGender: string,
  fallbackVocalRange: string,
): OwnMemberProfileUpdate {
  return {
    name: profile?.name || fallbackName,
    phone: profile?.phone || "",
    cep: profile?.cep || "",
    neighborhood: profile?.neighborhood || "",
    city: profile?.city || "",
    street: profile?.street || "",
    houseNumber: profile?.houseNumber || "",
    maritalStatus: profile?.maritalStatus || "",
    gender: profile?.gender || fallbackGender,
    vocalRange: profile?.vocalRange || fallbackVocalRange,
    availability: profile?.availability || "",
  };
}

export function HomePage({
  memberName,
  memberGender,
  memberVocalRange,
  accountLevel,
  leadershipRole,
  permissions,
  onBackToAuth,
}: HomePageProps) {
  const [activeTab, setActiveTab] = useState<HomeTab>("home");
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [agendaEvents, setAgendaEvents] = useState<AgendaEvent[]>(initialAgendaEvents);
  const [commentDrafts, setCommentDrafts] = useState<Record<string, string>>({});
  const [showComposer, setShowComposer] = useState(false);
  const [composerMode, setComposerMode] = useState<ComposerMode>("home");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [composerDraft, setComposerDraft] = useState({
    category: "Aviso",
    title: "",
    content: "",
    date: "",
    time: "",
    location: "",
    imageUrl: "",
    kind: "Ensaio",
  });
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [profileDraft, setProfileDraft] = useState<OwnMemberProfileUpdate>(() =>
    buildProfileDraft(null, memberName, memberGender, memberVocalRange),
  );
  const [profileAvatarPreview, setProfileAvatarPreview] = useState("");
  const [profileAvatarFile, setProfileAvatarFile] = useState<File | null>(null);
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileStatus, setProfileStatus] = useState("");
  const [directoryMembers, setDirectoryMembers] = useState<MemberDirectoryProfile[]>([]);
  const [directoryLoading, setDirectoryLoading] = useState(false);
  const [directoryStatus, setDirectoryStatus] = useState("");
  const [selectedDirectoryUid, setSelectedDirectoryUid] = useState("");

  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const currentUser = firebaseAuth.currentUser;
  const currentUid = currentUser?.uid || "";
  const resolvedAccessLevel = normalizeAccessLevel(profile?.accountLevel || accountLevel);
  const resolvedLeadershipRole = profile?.leadershipRole || leadershipRole;
  const resolvedGender = profile?.gender || memberGender;
  const resolvedName = profile?.name || memberName;
  const resolvedVocalRange = profile?.vocalRange || memberVocalRange;
  const roleLabel = resolveRoleLabel(resolvedLeadershipRole, resolvedAccessLevel, resolvedGender);
  const firstName = getFirstName(resolvedName);
  const effectivePermissions = normalizePermissions(profile?.permissions ?? permissions, resolvedAccessLevel);
  const canManageExtendedProfile =
    resolvedAccessLevel === "administration" || resolvedLeadershipRole === "Secretário";
  const canPost =
    resolvedAccessLevel === "administration" ||
    resolvedLeadershipRole === "Maestro" ||
    resolvedLeadershipRole === "Secretário" ||
    resolvedLeadershipRole === "Vice-Secretário" ||
    effectivePermissions.includes("Postar avisos");
  const canManageAgenda = canPost || effectivePermissions.includes("Mexer na agenda");
  const canComment =
    canPost ||
    effectivePermissions.includes("Comentar") ||
    effectivePermissions.includes("Comentar em agenda e avisos");

  useEffect(() => {
    let isActive = true;

    async function loadProfileContext() {
      if (!currentUid) {
        return;
      }

      setDirectoryLoading(true);
      setProfileStatus("");
      setDirectoryStatus("");

      try {
        const [profileResult, directoryResult] = await Promise.all([
          getMemberProfile(currentUid),
          listMemberDirectoryProfiles(),
        ]);

        if (!isActive) {
          return;
        }

        setProfile(profileResult);
        setProfileDraft(buildProfileDraft(profileResult, memberName, memberGender, memberVocalRange));
        setProfileAvatarPreview(profileResult?.avatarDataUrl || currentUser?.photoURL || "");
        setDirectoryMembers(directoryResult);
      } catch {
        if (!isActive) {
          return;
        }

        setDirectoryStatus("Não foi possível carregar a lista de membros agora.");
        setProfileStatus("Não foi possível carregar seus dados completos agora.");
      } finally {
        if (isActive) {
          setDirectoryLoading(false);
        }
      }
    }

    void loadProfileContext();

    return () => {
      isActive = false;
    };
  }, [currentUid, currentUser?.photoURL, memberGender, memberName, memberVocalRange]);

  const filteredPosts = useMemo(() => {
    if (!deferredQuery) {
      return posts;
    }

    return posts.filter((post) =>
      [post.category, post.title, post.content, post.author, ...post.comments.map((comment) => comment.text)]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery),
    );
  }, [deferredQuery, posts]);

  const filteredAgendaEvents = useMemo(() => {
    if (!deferredQuery) {
      return agendaEvents;
    }

    return agendaEvents.filter((event) =>
      [event.kind, event.title, event.location, event.note, event.dateLabel, ...event.comments.map((comment) => comment.text)]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery),
    );
  }, [agendaEvents, deferredQuery]);

  const filteredDirectoryMembers = useMemo(() => {
    const others = directoryMembers.filter((member) => member.uid !== currentUid);

    if (!deferredQuery) {
      return others;
    }

    return others.filter((member) =>
      [member.name, member.vocalRange, member.leadershipRole, member.accountLevel, member.phone]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery),
    );
  }, [currentUid, deferredQuery, directoryMembers]);

  useEffect(() => {
    if (!filteredDirectoryMembers.length) {
      setSelectedDirectoryUid("");
      return;
    }

    if (!filteredDirectoryMembers.some((member) => member.uid === selectedDirectoryUid)) {
      setSelectedDirectoryUid(filteredDirectoryMembers[0].uid);
    }
  }, [filteredDirectoryMembers, selectedDirectoryUid]);

  const selectedDirectoryMember =
    filteredDirectoryMembers.find((member) => member.uid === selectedDirectoryUid) || null;
  const nextEvent = filteredAgendaEvents[0] ?? agendaEvents[0];
  const profileAvatar = profileAvatarPreview || currentUser?.photoURL || profile?.avatarDataUrl || "";

  const openComposer = () => {
    if (activeTab === "agenda" && canManageAgenda) {
      setComposerMode("agenda");
    } else if (canPost) {
      setComposerMode("home");
    } else if (canManageAgenda) {
      setComposerMode("agenda");
    } else {
      return;
    }

    setComposerDraft({
      category: "Aviso",
      title: "",
      content: "",
      date: "",
      time: "",
      location: "",
      imageUrl: "",
      kind: activeTab === "agenda" ? "Ensaio" : "Aviso",
    });
    setShowComposer(true);
  };

  const handleComposerFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setComposerDraft((current) => ({ ...current, [name]: value }));
  };

  const publishComposerEntry = () => {
    if (!composerDraft.title.trim() || !composerDraft.content.trim()) {
      return;
    }

    if (composerMode === "agenda") {
      const newEvent: AgendaEvent = {
        id: createId("event"),
        kind: composerDraft.kind || "Ensaio",
        title: composerDraft.title.trim(),
        dateLabel: formatDisplayDate(composerDraft.date),
        time: composerDraft.time.trim() || "19:30",
        location: composerDraft.location.trim() || "Local a definir",
        note: composerDraft.content.trim(),
        author: roleLabel,
        comments: [],
      };

      setAgendaEvents((current) => [newEvent, ...current]);
      setActiveTab("agenda");
    } else {
      const newPost: FeedPost = {
        id: createId("post"),
        category: composerDraft.category || "Aviso",
        title: composerDraft.title.trim(),
        content: composerDraft.content.trim(),
        author: resolvedName,
        role: roleLabel,
        dateLabel: composerDraft.date ? formatDisplayDate(composerDraft.date) : "Agora mesmo",
        imageUrl: composerDraft.imageUrl.trim(),
        comments: [],
      };

      setPosts((current) => [newPost, ...current]);
      setActiveTab("home");
    }

    setShowComposer(false);
  };

  const addPostComment = (postId: string) => {
    const nextComment = commentDrafts[postId]?.trim();

    if (!nextComment) {
      return;
    }

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: createId("post-comment"),
                  author: resolvedName,
                  role: roleLabel,
                  text: nextComment,
                  createdAt: "agora",
                },
              ],
            }
          : post,
      ),
    );

    setCommentDrafts((current) => ({ ...current, [postId]: "" }));
  };

  const addAgendaComment = (eventId: string) => {
    const nextComment = commentDrafts[eventId]?.trim();

    if (!nextComment) {
      return;
    }

    setAgendaEvents((current) =>
      current.map((event) =>
        event.id === eventId
          ? {
              ...event,
              comments: [
                ...event.comments,
                {
                  id: createId("agenda-comment"),
                  author: resolvedName,
                  role: roleLabel,
                  text: nextComment,
                  createdAt: "agora",
                },
              ],
            }
          : event,
      ),
    );

    setCommentDrafts((current) => ({ ...current, [eventId]: "" }));
  };

  const handleProfileFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileDraft((current) => ({ ...current, [name]: value }));
  };

  const handleProfileAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setProfileAvatarFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setProfileAvatarPreview(String(reader.result || ""));
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    if (!currentUser) {
      setProfileStatus("Não foi possível identificar a sua sessão.");
      return;
    }

    setProfileSaving(true);
    setProfileStatus("");

    try {
      const updatedProfile = await updateOwnMemberProfile(
        currentUser,
        profileDraft,
        profileAvatarFile,
        canManageExtendedProfile,
      );
      const directory = await listMemberDirectoryProfiles();

      setProfile(updatedProfile);
      setProfileDraft(buildProfileDraft(updatedProfile, memberName, memberGender, memberVocalRange));
      setProfileAvatarPreview(updatedProfile.avatarDataUrl || "");
      setProfileAvatarFile(null);
      setDirectoryMembers(directory);
      setProfileStatus("Perfil atualizado com sucesso.");
    } catch (error) {
      setProfileStatus(
        error instanceof Error ? error.message : "Não foi possível atualizar seu perfil agora.",
      );
    } finally {
      setProfileSaving(false);
    }
  };

  const copyPhoneNumber = async (phone: string) => {
    if (!phone.trim()) {
      setDirectoryStatus("Esse membro ainda não informou telefone.");
      return;
    }

    try {
      await navigator.clipboard.writeText(phone);
      setDirectoryStatus("Telefone copiado para a área de transferência.");
    } catch {
      setDirectoryStatus("Não foi possível copiar o telefone agora.");
    }
  };

  const renderCommentComposer = (id: string, placeholder: string, onSubmit: () => void) => {
    if (!canComment) {
      return <p className="home-comment-disabled">Comentários liberados apenas para perfis com acesso a interação interna.</p>;
    }

    return (
      <div className="home-comment-composer">
        <input
          type="text"
          value={commentDrafts[id] || ""}
          onChange={(event) =>
            setCommentDrafts((current) => ({
              ...current,
              [id]: event.target.value,
            }))
          }
          placeholder={placeholder}
        />
        <button type="button" className="home-inline-action" onClick={onSubmit}>
          Comentar
        </button>
      </div>
    );
  };

  return (
    <div className="page page-home">
      <div className="home-surface" />

      <div className="home-modern-shell">
        <header className="home-modern-header">
          <div className="home-identity-block">
            <div className="home-brand-mark">
              <img src={logoAd} alt="Logo do vocal" />
            </div>

            <div className="home-identity-copy">
              <p className="home-card-eyebrow">Ministério em movimento</p>
              <h1>Bem-vindo, {firstName}</h1>
              <div className="home-chip-row">
                <span className="home-role-chip">{roleLabel}</span>
                {resolvedVocalRange ? <span className="home-chip">Timbre {resolvedVocalRange}</span> : null}
              </div>
            </div>
          </div>

          <button
            className="home-profile-trigger"
            type="button"
            aria-label="Abrir perfil do usuário"
            onClick={() => setActiveTab("profile")}
          >
            {profileAvatar ? <img src={profileAvatar} alt={resolvedName} /> : <span>{getInitials(resolvedName)}</span>}
          </button>
        </header>

        <section className="home-hero-card">
          <div>
            <p className="home-hero-kicker">Painel do vocal</p>
            <h2>Home e Agenda no mesmo fluxo</h2>
            <p>Veja avisos, publique recados, acompanhe eventos e responda rapidamente quando não puder comparecer.</p>
          </div>

          <button type="button" className="login-help-btn home-help-btn" onClick={() => setShowHelpModal(true)}>
            <FiHelpCircle size={18} />
            AJUDA
          </button>
        </section>

        <section className="home-toolbar">
          <label className="home-search-shell" aria-label="Buscar na tela atual">
            <FiSearch size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={resolveSearchPlaceholder(activeTab)}
            />
          </label>
        </section>

        <section className="home-summary-strip">
          <article className="home-summary-card modern">
            <span>Próximo compromisso</span>
            <strong>{nextEvent?.title || "Sem evento próximo"}</strong>
            <p>{nextEvent ? `${nextEvent.dateLabel} • ${nextEvent.time} • ${nextEvent.location}` : "Ainda não existe ensaio, culto ou saída cadastrada."}</p>
          </article>

          <article className="home-summary-card modern">
            <span>Movimento do mural</span>
            <strong>{posts.length} publicações</strong>
            <p>{posts[0]?.title || "Nenhum aviso ou publicação criada até agora."}</p>
          </article>
        </section>

        <div className="home-view-tabs" role="tablist" aria-label="Seções da tela inicial">
          {([
            ["home", "Home"],
            ["agenda", "Agenda"],
            ["songs", "Músicas"],
            ["profile", "Usuário"],
          ] as const).map(([tab, label]) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`home-view-tab${activeTab === tab ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {label}
            </button>
          ))}
        </div>

        <main className="home-main-panel">
          {activeTab === "home" ? (
            <div className="home-feed-stack">
              {filteredPosts.map((post) => (
                <article key={post.id} className="home-feed-card">
                  <div className="home-card-topline">
                    <span>{post.category}</span>
                    <strong>{post.dateLabel}</strong>
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.content}</p>

                  {post.imageUrl ? (
                    <div className="home-feed-media">
                      <img src={post.imageUrl} alt={post.title} />
                    </div>
                  ) : null}

                  <div className="home-post-author">
                    <span>{post.author}</span>
                    <small>{post.role}</small>
                  </div>

                  <div className="home-comment-list">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="home-comment-card">
                        <div>
                          <strong>{comment.author}</strong>
                          <small>{comment.role}</small>
                        </div>
                        <p>{comment.text}</p>
                        <span>{comment.createdAt}</span>
                      </div>
                    ))}
                  </div>

                  {renderCommentComposer(post.id, "Responder ao aviso ou adicionar informação...", () => addPostComment(post.id))}
                </article>
              ))}

              {filteredPosts.length === 0 ? (
                <article className="home-empty-card">
                  <h3>Mural vazio</h3>
                  <p>Ainda não há avisos, imagens ou informações publicados.{canPost ? " Use o botão + para criar a primeira publicação." : " Quando a liderança publicar algo, vai aparecer aqui."}</p>
                </article>
              ) : null}
            </div>
          ) : null}

          {activeTab === "agenda" ? (
            <div className="home-agenda-stack">
              {filteredAgendaEvents.map((event) => (
                <article key={event.id} className="home-agenda-card">
                  <div className="home-card-topline">
                    <span>{event.kind}</span>
                    <strong>{event.dateLabel}</strong>
                  </div>

                  <h3>{event.title}</h3>

                  <div className="home-agenda-meta">
                    <span>{event.time}</span>
                    <span>{event.location}</span>
                    <span>Lançado por {event.author}</span>
                  </div>

                  <p>{event.note}</p>

                  <div className="home-comment-list">
                    {event.comments.map((comment) => (
                      <div key={comment.id} className="home-comment-card agenda">
                        <div>
                          <strong>{comment.author}</strong>
                          <small>{comment.role}</small>
                        </div>
                        <p>{comment.text}</p>
                        <span>{comment.createdAt}</span>
                      </div>
                    ))}
                  </div>

                  {renderCommentComposer(event.id, "Comentar ausência, atraso, carona ou observação...", () => addAgendaComment(event.id))}
                </article>
              ))}

              {filteredAgendaEvents.length === 0 ? (
                <article className="home-empty-card">
                  <h3>Agenda vazia</h3>
                  <p>Nenhum ensaio, saída ou culto foi cadastrado.{canManageAgenda ? " Use o botão + para lançar o primeiro compromisso." : " Quando a agenda for atualizada, os eventos aparecerão aqui."}</p>
                </article>
              ) : null}
            </div>
          ) : null}

          {activeTab === "songs" ? (
            <section className="home-song-grid">
              {repertoireHighlights.map((song) => (
                <article key={song.id} className="home-song-card">
                  <div className="home-card-topline">
                    <span>Repertório</span>
                    <strong>Tonalidade {song.tone}</strong>
                  </div>
                  <h3>{song.title}</h3>
                  <p>{song.note}</p>
                </article>
              ))}

              {repertoireHighlights.length === 0 ? (
                <article className="home-empty-card">
                  <h3>Repertório vazio</h3>
                  <p>As músicas ainda não foram lançadas aqui.</p>
                </article>
              ) : null}
            </section>
          ) : null}

          {activeTab === "profile" ? (
            <section className="home-profile-panel">
              <article className="home-profile-card home-profile-summary-card">
                <div className="home-profile-summary">
                  <label className="home-profile-avatar-editor" htmlFor="profile-avatar-input">
                    {profileAvatar ? <img src={profileAvatar} alt={resolvedName} /> : <span>{getInitials(resolvedName)}</span>}
                    <span className="home-profile-avatar-badge">
                      <FiCamera size={14} />
                    </span>
                  </label>

                  <div className="home-profile-summary-copy">
                    <div className="home-card-topline compact">
                      <span>Meu perfil</span>
                      <strong>{roleLabel}</strong>
                    </div>
                    <h3>{resolvedName}</h3>
                    <p>Atualize foto, telefone, endereço e dados essenciais do seu cadastro.</p>
                    <div className="home-chip-row">
                      {resolvedVocalRange ? <span className="home-chip">Timbre {resolvedVocalRange}</span> : null}
                      <span className="home-chip">{roleLabel}</span>
                    </div>
                  </div>
                </div>

                <input id="profile-avatar-input" className="hidden-input" type="file" accept="image/*" onChange={handleProfileAvatarChange} />

                <div className="home-profile-inline-actions">
                  <label htmlFor="profile-avatar-input" className="home-secondary-action home-inline-label-btn">
                    Trocar foto
                  </label>
                  <button type="button" className="home-secondary-action" onClick={() => setShowLogoutModal(true)}>
                    <HiOutlineArrowRightOnRectangle size={16} />
                    Sair
                  </button>
                </div>

                {profileStatus ? <p className="home-inline-status">{profileStatus}</p> : null}
              </article>

              <article className="home-profile-card home-profile-edit-card">
                <div className="home-card-topline compact">
                  <span>Dados editáveis</span>
                  <strong>{canManageExtendedProfile ? "Edição ampliada" : "Edição básica"}</strong>
                </div>

                {!canManageExtendedProfile ? (
                  <p className="home-profile-note">Nome, estado civil, gênero e timbre são ajustados apenas por administração e secretaria.</p>
                ) : null}

                <div className="home-profile-form-grid">
                  <label>
                    <span>Nome</span>
                    <input name="name" value={profileDraft.name} onChange={handleProfileFieldChange} disabled={!canManageExtendedProfile || profileSaving} />
                  </label>
                  <label>
                    <span>Telefone</span>
                    <input name="phone" value={profileDraft.phone} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>CEP</span>
                    <input name="cep" value={profileDraft.cep} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Bairro</span>
                    <input name="neighborhood" value={profileDraft.neighborhood} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Cidade</span>
                    <input name="city" value={profileDraft.city} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Rua</span>
                    <input name="street" value={profileDraft.street} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Número</span>
                    <input name="houseNumber" value={profileDraft.houseNumber} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Disponibilidade</span>
                    <input name="availability" value={profileDraft.availability} onChange={handleProfileFieldChange} disabled={profileSaving} />
                  </label>
                  <label>
                    <span>Estado civil</span>
                    <input name="maritalStatus" value={profileDraft.maritalStatus} onChange={handleProfileFieldChange} disabled={!canManageExtendedProfile || profileSaving} />
                  </label>
                  <label>
                    <span>Gênero</span>
                    <input name="gender" value={profileDraft.gender} onChange={handleProfileFieldChange} disabled={!canManageExtendedProfile || profileSaving} />
                  </label>
                  <label className="home-profile-form-span">
                    <span>Timbre</span>
                    <input name="vocalRange" value={profileDraft.vocalRange} onChange={handleProfileFieldChange} disabled={!canManageExtendedProfile || profileSaving} />
                  </label>
                </div>

                <div className="home-profile-footer">
                  <button type="button" className="home-primary-action" onClick={saveProfile} disabled={profileSaving}>
                    Salvar alterações
                  </button>
                </div>
              </article>

              <article className="home-profile-card home-directory-card">
                <div className="home-directory-header">
                  <div>
                    <p className="home-card-eyebrow">Contato interno</p>
                    <h3>Membros do vocal</h3>
                    <p>Lista limitada a dados úteis para contato e organização, sem expor informações sensíveis.</p>
                  </div>
                  <strong>{filteredDirectoryMembers.length} membros</strong>
                </div>

                {directoryStatus ? <p className="home-inline-status">{directoryStatus}</p> : null}

                <div className="home-directory-layout">
                  <div className="home-directory-list">
                    {directoryLoading ? <p className="home-directory-empty">Carregando membros...</p> : null}
                    {!directoryLoading && filteredDirectoryMembers.length === 0 ? <p className="home-directory-empty">Nenhum outro membro encontrado para este filtro.</p> : null}

                    {filteredDirectoryMembers.map((member) => (
                      <button
                        key={member.uid}
                        type="button"
                        className={`home-directory-item${selectedDirectoryUid === member.uid ? " is-active" : ""}`}
                        onClick={() => setSelectedDirectoryUid(member.uid)}
                      >
                        <div className="home-directory-avatar">
                          {member.avatarDataUrl ? <img src={member.avatarDataUrl} alt={member.name} /> : <span>{getInitials(member.name)}</span>}
                        </div>

                        <div className="home-directory-copy">
                          <strong>{member.name}</strong>
                          <span>{resolveDirectoryRoleLabel(member)}</span>
                          {member.vocalRange ? <small>Timbre {member.vocalRange}</small> : null}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="home-directory-detail">
                    {selectedDirectoryMember ? (
                      <>
                        <div className="home-directory-detail-header">
                          <div className="home-directory-avatar large">
                            {selectedDirectoryMember.avatarDataUrl ? <img src={selectedDirectoryMember.avatarDataUrl} alt={selectedDirectoryMember.name} /> : <span>{getInitials(selectedDirectoryMember.name)}</span>}
                          </div>

                          <div>
                            <h4>{selectedDirectoryMember.name}</h4>
                            <p>{resolveDirectoryRoleLabel(selectedDirectoryMember)}</p>
                            <div className="home-chip-row">
                              {selectedDirectoryMember.vocalRange ? <span className="home-chip">Timbre {selectedDirectoryMember.vocalRange}</span> : null}
                              <span className="home-chip">Contato interno</span>
                            </div>
                          </div>
                        </div>

                        <div className="home-directory-contact-row">
                          <div className="home-directory-contact-card">
                            <FiPhone size={16} />
                            <span>{selectedDirectoryMember.phone || "Telefone não informado"}</span>
                          </div>

                          <div className="home-directory-contact-actions">
                            <a
                              className={`home-whatsapp-btn${selectedDirectoryMember.phoneNormalized ? "" : " is-disabled"}`}
                              href={selectedDirectoryMember.phoneNormalized ? buildWhatsappLink(selectedDirectoryMember.phoneNormalized) : undefined}
                              target="_blank"
                              rel="noreferrer"
                              aria-disabled={!selectedDirectoryMember.phoneNormalized}
                              onClick={(event) => {
                                if (!selectedDirectoryMember.phoneNormalized) {
                                  event.preventDefault();
                                }
                              }}
                            >
                              <FaWhatsapp size={18} />
                              WhatsApp
                            </a>

                            <button type="button" className="home-secondary-action compact" onClick={() => copyPhoneNumber(selectedDirectoryMember.phone)}>
                              <FiCopy size={15} />
                              Copiar número
                            </button>
                          </div>
                        </div>

                        <p className="home-directory-safety-note">Endereço completo e outros dados privados não aparecem aqui por segurança. Este espaço existe só para facilitar contato rápido e organização do ministério.</p>
                      </>
                    ) : (
                      <p className="home-directory-empty">Selecione um membro para ver o contato disponível.</p>
                    )}
                  </div>
                </div>
              </article>
            </section>
          ) : null}
        </main>

        {canPost || canManageAgenda ? (
          <button className="home-fab-action" type="button" aria-label={activeTab === "agenda" ? "Criar evento" : "Criar publicação"} onClick={openComposer}>
            <FiPlus size={24} />
          </button>
        ) : null}

        <nav className="home-bottom-nav" aria-label="Navegação principal">
          <button className={`nav-icon-btn${activeTab === "home" ? " is-active" : ""}`} type="button" aria-label="Home" onClick={() => setActiveTab("home")}>
            <FiHome size={22} />
            <span>Home</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "agenda" ? " is-active" : ""}`} type="button" aria-label="Agenda" onClick={() => setActiveTab("agenda")}>
            <LuCalendarDays size={22} />
            <span>Agenda</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "songs" ? " is-active" : ""}`} type="button" aria-label="Músicas" onClick={() => setActiveTab("songs")}>
            <GiMusicalScore size={24} />
            <span>Músicas</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "profile" ? " is-active" : ""}`} type="button" aria-label="Usuário" onClick={() => setActiveTab("profile")}>
            <FiUser size={22} />
            <span>Usuário</span>
          </button>
        </nav>
      </div>

      {showComposer ? (
        <div className="home-modal-backdrop" role="presentation" onClick={() => setShowComposer(false)}>
          <div className="home-modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Criação rápida</p>
                <h3>{composerMode === "agenda" ? "Novo evento da agenda" : "Nova publicação do mural"}</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={() => setShowComposer(false)}>
                Fechar
              </button>
            </div>

            {composerMode === "home" ? (
              <div className="home-modal-form">
                <div className="home-pill-row">
                  {(["Aviso", "Informação", "Imagem"] as const).map((option) => (
                    <button key={option} type="button" className={`home-pill-btn${composerDraft.category === option ? " is-active" : ""}`} onClick={() => setComposerDraft((current) => ({ ...current, category: option }))}>
                      {option}
                    </button>
                  ))}
                </div>
                <input name="title" value={composerDraft.title} onChange={handleComposerFieldChange} placeholder="Título da publicação" />
                <textarea name="content" value={composerDraft.content} onChange={handleComposerFieldChange} placeholder="Escreva o aviso, a informação ou instrução para o vocal" rows={5} />
                <input name="date" type="date" value={composerDraft.date} onChange={handleComposerFieldChange} />
                <input name="imageUrl" value={composerDraft.imageUrl} onChange={handleComposerFieldChange} placeholder="URL de imagem opcional" />
              </div>
            ) : (
              <div className="home-modal-form">
                <div className="home-pill-row">
                  {(["Ensaio", "Saída", "Culto"] as const).map((option) => (
                    <button key={option} type="button" className={`home-pill-btn${composerDraft.kind === option ? " is-active" : ""}`} onClick={() => setComposerDraft((current) => ({ ...current, kind: option }))}>
                      {option}
                    </button>
                  ))}
                </div>
                <input name="title" value={composerDraft.title} onChange={handleComposerFieldChange} placeholder="Título do compromisso" />
                <textarea name="content" value={composerDraft.content} onChange={handleComposerFieldChange} placeholder="Detalhes, observações e instruções para a equipe" rows={5} />
                <input name="date" type="date" value={composerDraft.date} onChange={handleComposerFieldChange} />
                <input name="time" type="time" value={composerDraft.time} onChange={handleComposerFieldChange} />
                <input name="location" value={composerDraft.location} onChange={handleComposerFieldChange} placeholder="Local do ensaio, saída ou culto" />
              </div>
            )}

            <div className="home-modal-actions">
              <button type="button" className="home-secondary-action" onClick={() => setShowComposer(false)}>
                Cancelar
              </button>
              <button type="button" className="home-primary-action" onClick={publishComposerEntry}>
                Publicar
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showHelpModal ? (
        <div className="home-modal-backdrop" role="presentation" onClick={() => setShowHelpModal(false)}>
          <div className="home-modal-card compact" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Ajuda rápida</p>
                <h3>Como usar essa tela</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={() => setShowHelpModal(false)}>
                Fechar
              </button>
            </div>

            <div className="home-help-list">
              <p>No Home você vê avisos, imagens e recados internos.</p>
              <p>Na Agenda você acompanha ensaios, saídas e horários com espaço para justificar ausência.</p>
              <p>Na aba Usuário você atualiza seu perfil e encontra os contatos internos liberados para o ministério.</p>
            </div>
          </div>
        </div>
      ) : null}

      {showLogoutModal ? (
        <div className="home-modal-backdrop" role="presentation" onClick={() => setShowLogoutModal(false)}>
          <div className="home-modal-card compact" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Encerrar sessão</p>
                <h3>Deseja realmente sair?</h3>
              </div>
            </div>

            <p className="home-logout-copy">Você vai voltar para a tela de autenticação e precisará entrar novamente para continuar.</p>

            <div className="home-modal-actions">
              <button type="button" className="home-secondary-action" onClick={() => setShowLogoutModal(false)}>
                Cancelar
              </button>
              <button type="button" className="home-primary-action danger" onClick={() => {
                setShowLogoutModal(false);
                onBackToAuth();
              }}>
                Sair agora
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}