import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import type * as React from "react";
import {
  FiArrowLeft,
  FiCamera,
  FiClipboard,
  FiCopy,
  FiEye,
  FiExternalLink,
  FiFileText,
  FiHelpCircle,
  FiHeart,
  FiHome,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaCrown, FaHeart, FaReact, FaWhatsapp } from "react-icons/fa6";
import { GiMusicalNotes, GiMusicalScore } from "react-icons/gi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { AvatarEditorModal } from "../components/AvatarEditorModal";
import { firebaseAuth } from "../config/firebase";
import { type AccessLevel, normalizeAccessLevel, normalizePermissions } from "../data/access";
import logoAd from "../img/Login/LogoAD.png";
import {
  backfillMemberDirectoryFromMembers,
  ensureMemberDirectoryEntry,
  getMemberProfile,
  listMemberDirectoryProfiles,
  type MemberDirectoryProfile,
  type MemberProfile,
  type OwnMemberProfileUpdate,
  updateOwnMemberProfile,
} from "../services/memberProfiles";
import {
  addHomePostComment,
  addAgendaEventComment,
  createHomePost,
  createAgendaEvent,
  listHomePosts,
  listAgendaEvents,
  toggleHomePostLike,
  type AgendaEventRecord,
  type HomeCommentRecord,
  type HomePostRecord,
} from "../services/homeContent";
import { readImageFileAsDataUrl } from "../utils/avatarEditor";

type HomePageProps = {
  memberName: string;
  memberGender: string;
  memberVocalRange: string;
  accountLevel: AccessLevel;
  leadershipRole: string;
  permissions: string[];
  onBackToAuth: () => void;
};

type HomeTab = "home" | "agenda" | "songs" | "members";
type ComposerMode = "home" | "agenda" | "song";

type CommentEntry = HomeCommentRecord;

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
  likedByUids: string[];
  createdAtValue: number;
  expirationDays: number;
  syncState?: "pending" | "failed";
};

type AgendaEvent = {
  id: string;
  kind: string;
  title: string;
  scheduledDate: string;
  dateLabel: string;
  time: string;
  location: string;
  note: string;
  author: string;
  comments: CommentEntry[];
  createdAtValue: number;
  updatedAtValue: number;
};

type SongLibraryItem = {
  id: string;
  title: string;
  artist: string;
  tone: string;
  category: string;
  sourceUrl: string;
  sourceLabel: string;
  notes: string;
  addedBy: string;
  createdAtValue: number;
  updatedAtValue: number;
};

type AgendaCalendarDay = {
  dateKey: string;
  dayNumber: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: AgendaEvent[];
};

type AgendaNotificationItem = {
  id: string;
  eventId: string;
  scheduledDate: string;
  title: string;
  detail: string;
  changeType: "new" | "updated";
  createdAtValue: number;
};

const initialPosts: FeedPost[] = [];
const initialAgendaEvents: AgendaEvent[] = [];
const initialSongLibrary: SongLibraryItem[] = [];
const agendaWeekdayLabels = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const songLibraryStorageKey = "vocal-song-library";

type MemberRoleVisual = {
  label: string;
  priority: number;
  icon: React.ElementType;
  accentClassName: string;
};

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

function parseCalendarDate(value: string) {
  if (!value) {
    return null;
  }

  const parsedDate = new Date(`${value}T12:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}

function formatMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getMonthDate(monthKey: string) {
  return parseCalendarDate(`${monthKey}-01`) || new Date(new Date().getFullYear(), new Date().getMonth(), 1);
}

function shiftMonthKey(monthKey: string, offset: number) {
  const monthDate = getMonthDate(monthKey);
  return formatMonthKey(new Date(monthDate.getFullYear(), monthDate.getMonth() + offset, 1));
}

function formatAgendaMonthLabel(monthKey: string) {
  const label = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(getMonthDate(monthKey));

  return label.charAt(0).toUpperCase() + label.slice(1);
}

function formatCalendarDateKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatAgendaDateLong(value: string) {
  const parsedDate = parseCalendarDate(value);

  if (!parsedDate) {
    return value;
  }

  const label = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(parsedDate);

  return label.charAt(0).toUpperCase() + label.slice(1);
}

function buildAgendaCalendarDays(monthKey: string, eventsByDate: Map<string, AgendaEvent[]>) {
  const monthDate = getMonthDate(monthKey);
  const monthStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const calendarStart = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1 - monthStart.getDay());
  const todayKey = formatCalendarDateKey(new Date());
  const days: AgendaCalendarDay[] = [];

  for (let index = 0; index < 42; index += 1) {
    const currentDate = new Date(calendarStart.getFullYear(), calendarStart.getMonth(), calendarStart.getDate() + index);
    const dateKey = formatCalendarDateKey(currentDate);

    days.push({
      dateKey,
      dayNumber: String(currentDate.getDate()),
      isCurrentMonth: currentDate.getMonth() === monthDate.getMonth(),
      isToday: dateKey === todayKey,
      events: eventsByDate.get(dateKey) || [],
    });
  }

  return days;
}

function sortAgendaEventsBySchedule(left: AgendaEvent, right: AgendaEvent) {
  if (left.scheduledDate !== right.scheduledDate) {
    return left.scheduledDate.localeCompare(right.scheduledDate);
  }

  if (left.time !== right.time) {
    return left.time.localeCompare(right.time);
  }

  return left.title.localeCompare(right.title, "pt-BR", { sensitivity: "base" });
}

function resolveTimestampMillis(value: unknown) {
  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value === "object" && value !== null) {
    if ("toDate" in value && typeof value.toDate === "function") {
      return value.toDate().getTime();
    }

    if ("seconds" in value && typeof value.seconds === "number") {
      return value.seconds * 1000;
    }
  }

  return 0;
}

function formatDateTimeLabel(value: unknown) {
  const timestamp = resolveTimestampMillis(value);

  if (!timestamp) {
    return "Agora mesmo";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function buildAgendaSeenStorageKey(userUid: string) {
  return `vocal-agenda-seen-at:${userUid}`;
}

function isPostExpired(createdAt: unknown, expirationDays: number) {
  if (!expirationDays) {
    return false;
  }

  const createdAtMillis = resolveTimestampMillis(createdAt);

  if (!createdAtMillis) {
    return false;
  }

  return createdAtMillis + expirationDays * 24 * 60 * 60 * 1000 <= Date.now();
}

function buildWhatsappLink(phone: string) {
  const digits = normalizePhoneNumber(phone);

  if (!digits) {
    return "";
  }

  const normalized = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${normalized}`;
}

function normalizeExternalUrl(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
}

function buildSongFallbackUrl(title: string, artist: string) {
  const query = encodeURIComponent([title, artist].filter(Boolean).join(" "));
  return `https://www.cifraclub.com.br/?q=${query}`;
}

function inferSongSourceLabel(sourceUrl: string, usedFallback = false) {
  if (usedFallback || sourceUrl.includes("cifraclub.com.br")) {
    return "CifraClub";
  }

  return "Link externo";
}

function sortSongLibrary(library: SongLibraryItem[]) {
  return [...library].sort((left, right) => left.title.localeCompare(right.title, "pt-BR", { sensitivity: "base" }));
}

function readSongLibraryFromStorage() {
  if (typeof window === "undefined") {
    return initialSongLibrary;
  }

  try {
    const storedValue = window.localStorage.getItem(songLibraryStorageKey);

    if (!storedValue) {
      return initialSongLibrary;
    }

    const parsedValue = JSON.parse(storedValue);

    if (!Array.isArray(parsedValue)) {
      return initialSongLibrary;
    }

    return sortSongLibrary(
      parsedValue.filter(Boolean).map((item) => ({
        id: String(item.id || createId("song")),
        title: String(item.title || "").trim(),
        artist: String(item.artist || "").trim(),
        tone: String(item.tone || "").trim(),
        category: String(item.category || "Culto").trim(),
        sourceUrl: String(item.sourceUrl || "").trim(),
        sourceLabel: String(item.sourceLabel || "Link externo").trim(),
        notes: String(item.notes || "").trim(),
        addedBy: String(item.addedBy || "Equipe do vocal").trim(),
        createdAtValue: Number(item.createdAtValue) || Date.now(),
        updatedAtValue: Number(item.updatedAtValue) || Number(item.createdAtValue) || Date.now(),
      })).filter((item) => item.title),
    );
  } catch {
    return initialSongLibrary;
  }
}

function saveSongLibraryToStorage(library: SongLibraryItem[]) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(songLibraryStorageKey, JSON.stringify(library));
  } catch {
    // Ignore storage failures and keep the in-memory library.
  }
}

function resolveRoleLabel(role: string, accountLevel: AccessLevel, gender: string) {
  const isFeminine = gender === "Feminino";

  if (role === "Desenvolvedor") {
    return "Desenvolvedor";
  }

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
    return isFeminine ? "Administradora do Vocal" : "Administrador do Vocal";
  }

  return role || "Integrante";
}

function resolveDirectoryRoleLabel(member: MemberDirectoryProfile) {
  return resolveMemberRoleVisual(member).label;
}

function resolveMemberRoleVisual(member: MemberDirectoryProfile): MemberRoleVisual {
  if (member.accountLevel === "administration") {
    if (member.leadershipRole === "Desenvolvedor") {
      return {
        label: "Desenvolvedor",
        priority: 1,
        icon: FaReact,
        accentClassName: "is-developer",
      };
    }

    return {
      label: "Administrador do Vocal",
      priority: 0,
      icon: FaCrown,
      accentClassName: "is-admin",
    };
  }

  if (member.leadershipRole === "Maestro") {
    return {
      label: "Maestro",
      priority: 2,
      icon: GiMusicalNotes,
      accentClassName: "is-maestro",
    };
  }

  if (member.leadershipRole === "Secretário") {
    return {
      label: "Secretário",
      priority: 3,
      icon: FiClipboard,
      accentClassName: "is-secretary",
    };
  }

  if (member.leadershipRole === "Vice-Secretário") {
    return {
      label: "Vice-Secretário",
      priority: 4,
      icon: FiFileText,
      accentClassName: "is-vice-secretary",
    };
  }

  return {
    label: "Membro do vocal",
    priority: 5,
    icon: FiUsers,
    accentClassName: "is-member",
  };
}

function sortDirectoryMembers(members: MemberDirectoryProfile[]) {
  return [...members].sort((left, right) => {
    const leftRole = resolveMemberRoleVisual(left);
    const rightRole = resolveMemberRoleVisual(right);

    if (leftRole.priority !== rightRole.priority) {
      return leftRole.priority - rightRole.priority;
    }

    return left.name.localeCompare(right.name, "pt-BR", { sensitivity: "base" });
  });
}

function resolveSearchPlaceholder(tab: HomeTab) {
  switch (tab) {
    case "agenda":
      return "Buscar eventos, local ou observações";
    case "songs":
      return "Buscar músicas e observações";
    case "members":
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

function mapAgendaEventRecord(event: AgendaEventRecord): AgendaEvent {
  const createdAtValue =
    resolveTimestampMillis(event.createdAt) ||
    new Date(`${event.scheduledDate || "1970-01-01"}T${event.time || "12:00"}:00`).getTime() ||
    0;
  const updatedAtValue = resolveTimestampMillis(event.updatedAt) || createdAtValue;

  return {
    id: event.id,
    kind: event.kind,
    title: event.title,
    scheduledDate: event.scheduledDate,
    dateLabel: formatDisplayDate(event.scheduledDate),
    time: event.time,
    location: event.location,
    note: event.note,
    author: event.author,
    comments: Array.isArray(event.comments) ? event.comments : [],
    createdAtValue,
    updatedAtValue,
  };
}

function mapHomePostRecord(post: HomePostRecord): FeedPost {
  return {
    id: post.id,
    category: post.category,
    title: post.title,
    content: post.content,
    author: post.author,
    role: post.role,
    dateLabel: formatDateTimeLabel(post.createdAt),
    imageUrl: post.imageUrl,
    comments: Array.isArray(post.comments) ? post.comments : [],
    likedByUids: Array.isArray(post.likedByUids) ? post.likedByUids : [],
    createdAtValue: resolveTimestampMillis(post.createdAt),
    expirationDays: typeof post.expirationDays === "number" ? post.expirationDays : 0,
  };
}

function buildOptimisticHomePost(input: {
  id: string;
  category: string;
  title: string;
  content: string;
  author: string;
  role: string;
  imageUrl: string;
  expirationDays: number;
}): FeedPost {
  const now = Date.now();

  return {
    id: input.id,
    category: input.category,
    title: input.title,
    content: input.content,
    author: input.author,
    role: input.role,
    dateLabel: formatDateTimeLabel(new Date(now)),
    imageUrl: input.imageUrl,
    comments: [],
    likedByUids: [],
    createdAtValue: now,
    expirationDays: input.expirationDays,
    syncState: "pending",
  };
}

function extractOperationMessage(error: unknown, fallback: string) {
  if (error instanceof Error && error.message.trim()) {
    return error.message;
  }

  return fallback;
}

function buildDirectoryStatusMessage(members: MemberDirectoryProfile[], currentUid: string, didBackfill = false) {
  if (didBackfill && members.length > 0) {
    return `Diretório atualizado com ${members.length} membro(s).`;
  }

  if (members.length === 0) {
    return "Ainda não há perfis sincronizados no diretório interno.";
  }

  if (members.length === 1 && members[0]?.uid === currentUid) {
    return "Somente o seu perfil está sincronizado no diretório por enquanto.";
  }

  return "";
}

async function fetchAgendaContent() {
  const agendaRecords = await listAgendaEvents();
  return agendaRecords.map(mapAgendaEventRecord);
}

async function fetchHomePostsContent() {
  const homePosts = await listHomePosts();
  return homePosts.filter((post) => !isPostExpired(post.createdAt, post.expirationDays)).map(mapHomePostRecord);
}

async function fetchDirectoryContent(currentUid: string, memberProfile: MemberProfile | null) {
  let didBackfill = false;
  let directory = await listMemberDirectoryProfiles();

  if (memberProfile && !directory.some((member) => member.uid === memberProfile.uid)) {
    await ensureMemberDirectoryEntry(memberProfile);
    directory = await listMemberDirectoryProfiles();
  }

  if (memberProfile && normalizeAccessLevel(memberProfile.accountLevel) === "administration" && directory.length <= 1) {
    const syncSummary = await backfillMemberDirectoryFromMembers();

    if (syncSummary.synced > 0) {
      didBackfill = true;
      directory = await listMemberDirectoryProfiles();
    }
  }

  return {
    members: directory,
    statusMessage: buildDirectoryStatusMessage(directory, currentUid, didBackfill),
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
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showMemberDetailModal, setShowMemberDetailModal] = useState(false);
  const [showHomeFeedHeader, setShowHomeFeedHeader] = useState(true);
  const [showAgendaPanel, setShowAgendaPanel] = useState(true);
  const [activePostId, setActivePostId] = useState("");
  const [activeAgendaDate, setActiveAgendaDate] = useState("");
  const [agendaMonthKey, setAgendaMonthKey] = useState(() => formatMonthKey(new Date()));
  const [songs, setSongs] = useState<SongLibraryItem[]>(() => readSongLibraryFromStorage());
  const [songStatus, setSongStatus] = useState("");
  const [activeSongId, setActiveSongId] = useState("");
  const [composerDraft, setComposerDraft] = useState({
    category: "Aviso",
    title: "",
    content: "",
    date: "",
    time: "",
    location: "",
    imageUrl: "",
    expirationDays: "0",
    kind: "Ensaio",
    artist: "",
    tone: "",
    sourceUrl: "",
    songCategory: "Culto",
  });
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [profileDraft, setProfileDraft] = useState<OwnMemberProfileUpdate>(() =>
    buildProfileDraft(null, memberName, memberGender, memberVocalRange),
  );
  const [profileAvatarPreview, setProfileAvatarPreview] = useState("");
  const [profileAvatarDataUrl, setProfileAvatarDataUrl] = useState<string | null>(null);
  const [profileAvatarEditorSource, setProfileAvatarEditorSource] = useState("");
  const [showProfileAvatarEditor, setShowProfileAvatarEditor] = useState(false);
  const [composerImageEditorSource, setComposerImageEditorSource] = useState("");
  const [showComposerImageEditor, setShowComposerImageEditor] = useState(false);
  const [composerImageStatus, setComposerImageStatus] = useState("");
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileStatus, setProfileStatus] = useState("");
  const [agendaLoading, setAgendaLoading] = useState(false);
  const [agendaStatus, setAgendaStatus] = useState("");
  const [homeLoading, setHomeLoading] = useState(false);
  const [homeStatus, setHomeStatus] = useState("");
  const [composerSubmitting, setComposerSubmitting] = useState(false);
  const [directoryMembers, setDirectoryMembers] = useState<MemberDirectoryProfile[]>([]);
  const [directoryLoading, setDirectoryLoading] = useState(false);
  const [directoryRefreshing, setDirectoryRefreshing] = useState(false);
  const [directoryStatus, setDirectoryStatus] = useState("");
  const [selectedDirectoryUid, setSelectedDirectoryUid] = useState("");
  const [agendaSeenAt, setAgendaSeenAt] = useState(0);
  const mainPanelRef = useRef<HTMLDivElement | null>(null);

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
  const canManageSongs =
    resolvedAccessLevel === "administration" || effectivePermissions.includes("Adicionar músicas");
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
      setAgendaLoading(true);
      setHomeLoading(true);
      setProfileStatus("");
      setAgendaStatus("");
      setHomeStatus("");
      setDirectoryStatus("");

      try {
        const profileResult = await getMemberProfile(currentUid);
        const [agendaResult, directoryResult, homeResult] = await Promise.allSettled([
          fetchAgendaContent(),
          fetchDirectoryContent(currentUid, profileResult),
          fetchHomePostsContent(),
        ]);

        if (!isActive) {
          return;
        }

        setProfile(profileResult);
        setProfileDraft(buildProfileDraft(profileResult, memberName, memberGender, memberVocalRange));
        setProfileAvatarPreview(profileResult?.avatarDataUrl || currentUser?.photoURL || "");
        setProfileAvatarDataUrl(null);
        setProfileAvatarEditorSource("");
        setShowProfileAvatarEditor(false);

        if (agendaResult.status === "fulfilled") {
          setAgendaEvents(agendaResult.value);
        } else {
          setAgendaStatus("Não foi possível carregar a agenda agora.");
        }

        if (homeResult.status === "fulfilled") {
          setPosts(homeResult.value);
        } else {
          setHomeStatus("Não foi possível carregar o mural agora.");
        }

        if (directoryResult.status === "fulfilled") {
          setDirectoryMembers(sortDirectoryMembers(directoryResult.value.members));
          setDirectoryStatus(directoryResult.value.statusMessage);
        } else {
          setDirectoryStatus("Não foi possível carregar a lista de membros agora.");
        }
      } catch {
        if (!isActive) {
          return;
        }

        setProfileStatus("Não foi possível carregar seus dados completos agora.");
      } finally {
        if (isActive) {
          setDirectoryLoading(false);
          setAgendaLoading(false);
          setHomeLoading(false);
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

  const agendaEventsByDate = useMemo(() => {
    const nextMap = new Map<string, AgendaEvent[]>();

    filteredAgendaEvents.forEach((event) => {
      const currentEvents = nextMap.get(event.scheduledDate) || [];
      currentEvents.push(event);
      nextMap.set(event.scheduledDate, currentEvents.sort(sortAgendaEventsBySchedule));
    });

    return nextMap;
  }, [filteredAgendaEvents]);

  const agendaCalendarDays = useMemo(
    () => buildAgendaCalendarDays(agendaMonthKey, agendaEventsByDate),
    [agendaEventsByDate, agendaMonthKey],
  );

  const agendaMonthLabel = useMemo(() => formatAgendaMonthLabel(agendaMonthKey), [agendaMonthKey]);

  const agendaVisibleMonthEventCount = useMemo(
    () => agendaCalendarDays.reduce((total, day) => total + (day.isCurrentMonth ? day.events.length : 0), 0),
    [agendaCalendarDays],
  );

  const agendaVisibleMonthMarkedDays = useMemo(
    () => agendaCalendarDays.filter((day) => day.isCurrentMonth && day.events.length > 0).length,
    [agendaCalendarDays],
  );

  const activeAgendaEvents = useMemo(() => {
    if (!activeAgendaDate) {
      return [];
    }

    return agendaEventsByDate.get(activeAgendaDate) || [];
  }, [activeAgendaDate, agendaEventsByDate]);

  const unreadAgendaItems = useMemo(
    () => agendaEvents.filter((event) => event.updatedAtValue > agendaSeenAt).sort((left, right) => right.updatedAtValue - left.updatedAtValue),
    [agendaEvents, agendaSeenAt],
  );

  const unreadAgendaCount = useMemo(() => {
    const currentMonthKey = formatMonthKey(new Date());
    return unreadAgendaItems.filter((event) => event.scheduledDate.slice(0, 7) === currentMonthKey).length;
  }, [unreadAgendaItems]);

  const filteredDirectoryMembers = useMemo(() => {
    const source = directoryMembers.filter((member) =>
      !deferredQuery ||
      [member.name, resolveDirectoryRoleLabel(member), member.vocalRange, member.leadershipRole, member.accountLevel, member.phone]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery),
    );

    return sortDirectoryMembers(source);
  }, [deferredQuery, directoryMembers]);

  const filteredSongs = useMemo(() => {
    if (!deferredQuery) {
      return songs;
    }

    return songs.filter((song) =>
      [song.title, song.artist, song.tone, song.category, song.sourceLabel, song.notes, song.addedBy]
        .join(" ")
        .toLowerCase()
        .includes(deferredQuery),
    );
  }, [deferredQuery, songs]);

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
  const activePost = posts.find((post) => post.id === activePostId) || null;
  const activeSong = songs.find((song) => song.id === activeSongId) || null;
  const nextEvent = filteredAgendaEvents[0] ?? agendaEvents[0];
  const profileAvatar = profileAvatarPreview || currentUser?.photoURL || profile?.avatarDataUrl || "";
  const notificationItems = useMemo<AgendaNotificationItem[]>(
    () =>
      unreadAgendaItems.map((event) => ({
        id: `agenda-${event.id}`,
        eventId: event.id,
        scheduledDate: event.scheduledDate,
        title: event.title,
        detail: `${event.dateLabel}${event.time ? ` às ${event.time}` : ""}${event.location ? ` • ${event.location}` : ""}`,
        changeType: event.createdAtValue === event.updatedAtValue ? "new" : "updated",
        createdAtValue: event.updatedAtValue,
      })),
    [unreadAgendaItems],
  );

  useEffect(() => {
    if (!currentUid) {
      setAgendaSeenAt(0);
      return;
    }

    try {
      const storedValue = window.localStorage.getItem(buildAgendaSeenStorageKey(currentUid));
      setAgendaSeenAt(storedValue ? Number(storedValue) || 0 : 0);
    } catch {
      setAgendaSeenAt(0);
    }
  }, [currentUid]);

  useEffect(() => {
    setQuery("");
    mainPanelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  useEffect(() => {
    if (activePostId && !posts.some((post) => post.id === activePostId)) {
      setActivePostId("");
    }
  }, [activePostId, posts]);

  useEffect(() => {
    if (activeSongId && !songs.some((song) => song.id === activeSongId)) {
      setActiveSongId("");
    }
  }, [activeSongId, songs]);

  useEffect(() => {
    if (activeAgendaDate && !agendaEventsByDate.has(activeAgendaDate)) {
      setActiveAgendaDate("");
    }
  }, [activeAgendaDate, agendaEventsByDate]);

  const markAgendaNotificationsAsSeen = () => {
    const latestAgendaTimestamp = agendaEvents.reduce(
      (highestValue, event) => Math.max(highestValue, event.updatedAtValue),
      0,
    );

    if (!latestAgendaTimestamp) {
      return;
    }

    setAgendaSeenAt(latestAgendaTimestamp);

    if (!currentUid) {
      return;
    }

    try {
      window.localStorage.setItem(buildAgendaSeenStorageKey(currentUid), String(latestAgendaTimestamp));
    } catch {
      // Ignore localStorage failures and keep the in-memory marker.
    }
  };

  const openAgendaNotifications = () => {
    setShowNotificationsModal(true);
  };

  const closeAgendaNotifications = () => {
    setShowNotificationsModal(false);
    markAgendaNotificationsAsSeen();
  };

  const openAgendaNotificationItem = (item: AgendaNotificationItem) => {
    setShowNotificationsModal(false);
    markAgendaNotificationsAsSeen();
    setActivePostId("");
    setActiveTab("agenda");
    setAgendaMonthKey(item.scheduledDate.slice(0, 7));
    setActiveAgendaDate(item.scheduledDate);
  };

  const openTab = (tab: HomeTab) => {
    setActiveTab(tab);
    setActivePostId("");
    setActiveAgendaDate("");
    setActiveSongId("");
  };

  const closeAgendaDetail = () => {
    setActiveAgendaDate("");
  };

  const closeComposer = () => {
    setShowComposer(false);
    setComposerImageEditorSource("");
    setShowComposerImageEditor(false);
    setComposerImageStatus("");
  };

  const openPostDetail = (postId: string) => {
    setActivePostId(postId);
  };

  const closePostDetail = () => {
    setActivePostId("");
  };

  const openSongDetail = (songId: string) => {
    setActivePostId("");
    setActiveAgendaDate("");
    setActiveSongId(songId);
  };

  const closeSongDetail = () => {
    setActiveSongId("");
  };

  const openComposer = () => {
    if (activeTab === "songs" && canManageSongs) {
      setComposerMode("song");
    } else if (activeTab === "agenda" && canManageAgenda) {
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
      expirationDays: "0",
      kind: activeTab === "agenda" ? "Ensaio" : "Aviso",
      artist: "",
      tone: "",
      sourceUrl: "",
      songCategory: "Culto",
    });
    setComposerImageEditorSource("");
    setShowComposerImageEditor(false);
    setComposerImageStatus("");
    setShowComposer(true);
  };

  const handleComposerFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setComposerDraft((current) => ({ ...current, [name]: value }));
  };

  const publishComposerEntry = async () => {
    if (composerMode !== "song" && (!composerDraft.title.trim() || !composerDraft.content.trim())) {
      return;
    }

    if (composerMode === "song") {
      const normalizedTitle = composerDraft.title.trim();

      if (!normalizedTitle) {
        setSongStatus("Informe o nome da música para adicionar ao repertório.");
        return;
      }

      const normalizedArtist = composerDraft.artist.trim();
      const manualSourceUrl = normalizeExternalUrl(composerDraft.sourceUrl);
      const sourceUrl = manualSourceUrl || buildSongFallbackUrl(normalizedTitle, normalizedArtist);
      const usedFallback = !manualSourceUrl;
      const now = Date.now();
      const nextSong: SongLibraryItem = {
        id: createId("song"),
        title: normalizedTitle,
        artist: normalizedArtist,
        tone: composerDraft.tone.trim(),
        category: composerDraft.songCategory || "Culto",
        sourceUrl,
        sourceLabel: inferSongSourceLabel(sourceUrl, usedFallback),
        notes: composerDraft.content.trim(),
        addedBy: resolvedName,
        createdAtValue: now,
        updatedAtValue: now,
      };

      const nextSongs = sortSongLibrary([nextSong, ...songs]);
      setSongs(nextSongs);
      saveSongLibraryToStorage(nextSongs);
      setSongStatus("Música adicionada à biblioteca do vocal.");
      setActiveTab("songs");
      closeComposer();
      return;
    }

    if (composerMode === "agenda") {
      if (!currentUid) {
        setAgendaStatus("Não foi possível identificar sua sessão para salvar a agenda.");
        return;
      }

      if (!composerDraft.date) {
        setAgendaStatus("Informe a data do compromisso antes de publicar na agenda.");
        return;
      }

      setComposerSubmitting(true);

      try {
        await createAgendaEvent({
          kind: composerDraft.kind || "Ensaio",
          title: composerDraft.title.trim(),
          scheduledDate: composerDraft.date,
          time: composerDraft.time.trim() || "19:30",
          location: composerDraft.location.trim() || "Local a definir",
          note: composerDraft.content.trim(),
          author: resolvedName,
          createdByUid: currentUid,
        });

        const nextAgendaEvents = await fetchAgendaContent();
        setAgendaEvents(nextAgendaEvents);
        setAgendaStatus("Compromisso salvo com sucesso na agenda.");
        setActiveTab("agenda");
        closeComposer();
      } catch {
        setAgendaStatus("Não foi possível salvar esse compromisso no Firestore agora.");
      } finally {
        setComposerSubmitting(false);
      }
    } else {
      if (!currentUid) {
        setHomeStatus("Não foi possível identificar sua sessão para publicar no mural.");
        return;
      }

      const optimisticPostId = createId("post");
      const optimisticPost = buildOptimisticHomePost({
        id: optimisticPostId,
        category: composerDraft.category || "Aviso",
        title: composerDraft.title.trim(),
        content: composerDraft.content.trim(),
        author: resolvedName,
        role: roleLabel,
        imageUrl: composerDraft.imageUrl.trim(),
        expirationDays: Number(composerDraft.expirationDays) || 0,
      });

      setQuery("");
      setPosts((current) => [optimisticPost, ...current]);
      setHomeStatus("Publicação enviada. Atualizando o mural...");
      setActiveTab("home");
      closeComposer();

      setComposerSubmitting(true);

      try {
        await createHomePost({
          category: composerDraft.category || "Aviso",
          title: composerDraft.title.trim(),
          content: composerDraft.content.trim(),
          author: resolvedName,
          role: roleLabel,
          imageUrl: composerDraft.imageUrl.trim(),
          expirationDays: Number(composerDraft.expirationDays) || 0,
          createdByUid: currentUid,
        });

        const nextPosts = await fetchHomePostsContent();
        if (nextPosts.length > 0) {
          setPosts(nextPosts);
        } else {
          setPosts((current) =>
            current.map((post) =>
              post.id === optimisticPostId ? { ...post, syncState: undefined } : post,
            ),
          );
        }
        setHomeStatus("Publicação enviada ao mural.");
      } catch (error) {
        setPosts((current) =>
          current.map((post) =>
            post.id === optimisticPostId
              ? {
                  ...post,
                  syncState: "failed",
                }
              : post,
          ),
        );
        setHomeStatus(extractOperationMessage(error, "A publicação apareceu na tela, mas a sincronização com o servidor falhou."));
      } finally {
        setComposerSubmitting(false);
      }
    }
  };

  const addPostComment = async (postId: string) => {
    const nextComment = commentDrafts[postId]?.trim();

    if (!nextComment || !currentUid) {
      return;
    }

    const optimisticComment = {
      id: createId("post-comment"),
      author: resolvedName,
      role: roleLabel,
      text: nextComment,
      createdAt: "agora",
      createdByUid: currentUid,
    };

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, optimisticComment],
            }
          : post,
      ),
    );
    setCommentDrafts((current) => ({ ...current, [postId]: "" }));
    setHomeStatus("Comentário enviado. Atualizando o mural...");

    try {
      await addHomePostComment(postId, optimisticComment);

      const nextPosts = await fetchHomePostsContent();
      if (nextPosts.length > 0) {
        setPosts(nextPosts);
      }
      setHomeStatus("Comentário enviado para o mural.");
    } catch (error) {
      setHomeStatus(extractOperationMessage(error, "O comentário apareceu na tela, mas a sincronização com o servidor falhou."));
    }
  };

  const togglePostLikeAction = async (postId: string) => {
    if (!currentUid) {
      setHomeStatus("Não foi possível identificar sua sessão para curtir essa publicação.");
      return;
    }

    const targetPost = posts.find((post) => post.id === postId);

    if (!targetPost) {
      return;
    }

    const shouldLike = !targetPost.likedByUids.includes(currentUid);

    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              likedByUids: shouldLike
                ? Array.from(new Set([...post.likedByUids, currentUid]))
                : post.likedByUids.filter((uid) => uid !== currentUid),
            }
          : post,
      ),
    );

    try {
      await toggleHomePostLike(postId, currentUid, shouldLike);
      const nextPosts = await fetchHomePostsContent();

      if (nextPosts.length > 0) {
        setPosts(nextPosts);
      }
    } catch (error) {
      setPosts((current) =>
        current.map((post) =>
          post.id === postId
            ? {
                ...post,
                likedByUids: targetPost.likedByUids,
              }
            : post,
        ),
      );
      setHomeStatus(extractOperationMessage(error, "Não foi possível registrar a curtida agora."));
    }
  };

  const addAgendaComment = async (eventId: string) => {
    const nextComment = commentDrafts[eventId]?.trim();

    if (!nextComment || !currentUid) {
      return;
    }

    try {
      await addAgendaEventComment(eventId, {
        id: createId("agenda-comment"),
        author: resolvedName,
        role: roleLabel,
        text: nextComment,
        createdAt: "agora",
        createdByUid: currentUid,
      });

      const nextAgendaEvents = await fetchAgendaContent();
      setAgendaEvents(nextAgendaEvents);
      setCommentDrafts((current) => ({ ...current, [eventId]: "" }));
      setAgendaStatus("Comentário enviado para a agenda.");
    } catch {
      setAgendaStatus("Não foi possível comentar nesse compromisso agora.");
    }
  };

  const handleDirectorySearchAction = async () => {
    if (query.trim()) {
      if (filteredDirectoryMembers.length > 0) {
        setSelectedDirectoryUid(filteredDirectoryMembers[0].uid);
        setDirectoryStatus(`${filteredDirectoryMembers.length} membro(s) encontrado(s).`);
      } else {
        setDirectoryStatus("Nenhum membro encontrado para essa busca.");
      }

      return;
    }

    setDirectoryRefreshing(true);

    try {
      const directoryResult = await fetchDirectoryContent(currentUid, profile);
      setDirectoryMembers(sortDirectoryMembers(directoryResult.members));
      setDirectoryStatus(directoryResult.statusMessage || "Diretório atualizado.");
    } catch {
      setDirectoryStatus("Não foi possível atualizar a lista de membros agora.");
    } finally {
      setDirectoryRefreshing(false);
    }
  };

  const handleProfileFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileDraft((current) => ({ ...current, [name]: value }));
  };

  const openProfileAvatarEditor = async (file: File) => {
    const imageDataUrl = await readImageFileAsDataUrl(file);

    setProfileAvatarEditorSource(imageDataUrl);
    setShowProfileAvatarEditor(true);
  };

  const handleProfileAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    void openProfileAvatarEditor(file).catch((error) => {
      setProfileStatus(
        error instanceof Error ? error.message : "Não foi possível abrir o editor da foto agora.",
      );
    });
  };

  const openComposerImageEditor = async (file: File) => {
    const imageDataUrl = await readImageFileAsDataUrl(file);

    setComposerImageEditorSource(imageDataUrl);
    setShowComposerImageEditor(true);
  };

  const handleComposerImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    void openComposerImageEditor(file).catch((error) => {
      setComposerImageStatus(
        error instanceof Error ? error.message : "Não foi possível abrir o editor da imagem agora.",
      );
    });
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
        profileAvatarDataUrl,
        canManageExtendedProfile,
      );
      const directoryResult = await fetchDirectoryContent(currentUid, updatedProfile);

      setProfile(updatedProfile);
      setProfileDraft(buildProfileDraft(updatedProfile, memberName, memberGender, memberVocalRange));
      setProfileAvatarPreview(updatedProfile.avatarDataUrl || "");
      setProfileAvatarDataUrl(null);
      setProfileAvatarEditorSource("");
      setShowProfileAvatarEditor(false);
      setDirectoryMembers(sortDirectoryMembers(directoryResult.members));
      setDirectoryStatus(directoryResult.statusMessage);
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
          <div className="home-header-bar">
            <button
              type="button"
              className="home-brand-mark home-brand-trigger"
              aria-label="Abrir alterações da agenda"
              onClick={openAgendaNotifications}
            >
              <img src={logoAd} alt="Logo do vocal" />
              {unreadAgendaCount > 0 ? <span className="home-logo-badge">{unreadAgendaCount > 9 ? "9+" : unreadAgendaCount}</span> : null}
            </button>

            <div className="home-identity-copy">
              <h1>Bem-vindo, {firstName}</h1>
              <p className="home-header-meta">{roleLabel}</p>
            </div>

            <div className="home-header-actions">
              <button
                className="home-profile-trigger"
                type="button"
                aria-label="Abrir perfil do usuário"
                onClick={() => setShowProfileModal(true)}
              >
                {profileAvatar ? <img src={profileAvatar} alt={resolvedName} /> : <span>{getInitials(resolvedName)}</span>}
              </button>
            </div>
          </div>
        </header>

        {activeTab !== "members" ? (
          <>
            {activeTab !== "home" && activeTab !== "agenda" && activeTab !== "songs" ? (
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
            ) : null}

            {activeTab === "songs" ? (
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
            ) : null}

            {activeTab === "songs" ? (
              <section className="home-summary-strip home-summary-strip-single">
                <article className="home-summary-card modern">
                  <span>Próximo compromisso</span>
                  <strong>{nextEvent?.title || "Sem evento próximo"}</strong>
                  <p>{nextEvent ? `${nextEvent.dateLabel} • ${nextEvent.time} • ${nextEvent.location}` : "Ainda não existe ensaio, culto ou saída cadastrada."}</p>
                </article>
              </section>
            ) : null}

            {activeTab !== "home" && activeTab !== "agenda" && activeTab !== "songs" ? (
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
            ) : null}

            {activeTab !== "home" && activeTab !== "agenda" && activeTab !== "songs" ? (
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
            ) : null}
          </>
        ) : null}

        <main ref={mainPanelRef} className="home-main-panel">
          {activeTab === "home" ? (
            <div className="home-feed-stack">
              {homeStatus ? <p className="home-inline-status">{homeStatus}</p> : null}

              <section className="home-feed-sticky-bar">
                <label className="home-search-shell home-search-shell-compact" aria-label="Buscar no mural">
                  <FiSearch size={16} />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={resolveSearchPlaceholder("home")}
                  />
                </label>

                <div className="home-feed-sticky-actions">
                  <span className="home-feed-count-pill">{filteredPosts.length} publicações</span>
                  {!showHomeFeedHeader ? (
                    <button type="button" className="home-secondary-action home-feed-restore-btn" onClick={() => setShowHomeFeedHeader(true)}>
                      <FiEye size={16} />
                      Mostrar mural
                    </button>
                  ) : null}
                </div>
              </section>

              {homeLoading ? (
                <div className="home-feed-skeleton-list" aria-hidden="true">
                  {["1", "2", "3"].map((item) => (
                    <article key={item} className="home-feed-card home-feed-skeleton-card">
                      <div className="home-skeleton-line short" />
                      <div className="home-skeleton-line medium" />
                      <div className="home-skeleton-line long" />
                      <div className="home-skeleton-media" />
                      <div className="home-skeleton-line medium" />
                    </article>
                  ))}
                </div>
              ) : null}

              {showHomeFeedHeader ? (
                <article className="home-feed-header-card home-feed-intro-card">
                  <div className="home-feed-intro-main">
                    <div>
                      <p className="home-hero-kicker">Mural interno</p>
                      <h2>Publicações do vocal</h2>
                      <p>Role o feed normalmente, toque em qualquer card para abrir a conversa completa e feche este bloco quando quiser mais espaço.</p>
                    </div>

                    <div className="home-post-stats home-feed-intro-stats">
                      <span><FiMessageCircle size={14} /> {posts.length} publicação(ões)</span>
                      <span><LuCalendarDays size={14} /> {nextEvent?.title || "Sem próximo evento"}</span>
                    </div>
                  </div>

                  <div className="home-feed-intro-actions">
                    <button type="button" className="login-help-btn home-help-btn" onClick={() => setShowHelpModal(true)}>
                      <FiHelpCircle size={18} />
                      AJUDA
                    </button>
                    <button type="button" className="home-modal-close home-feed-close-btn" onClick={() => setShowHomeFeedHeader(false)} aria-label="Fechar cabeçalho do mural">
                      <FiX size={16} />
                      Fechar
                    </button>
                  </div>
                </article>
              ) : null}

              {filteredPosts.map((post) => (
                <article key={post.id} className="home-feed-card home-feed-card-clickable" onClick={() => openPostDetail(post.id)}>
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

                  <div className="home-post-actions">
                    <button type="button" className="home-secondary-action compact" onClick={(event) => {
                      event.stopPropagation();
                      openPostDetail(post.id);
                    }}>
                      <FiArrowLeft size={15} />
                      Abrir publicação
                    </button>
                    <div className="home-post-stats">
                      <span><FiHeart size={14} /> {post.likedByUids.length}</span>
                      <span><FiMessageCircle size={14} /> {post.comments.length}</span>
                    </div>
                  </div>

                  <div className="home-comment-list">
                    {post.comments.slice(0, 2).map((comment) => (
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

                  {post.comments.length > 2 ? <p className="home-directory-empty">Abra a publicação para ver todos os comentários.</p> : null}

                  <div onClick={(event) => event.stopPropagation()}>
                    {renderCommentComposer(post.id, "Responder ao aviso ou adicionar informação...", () => void addPostComment(post.id))}
                  </div>
                </article>
              ))}

              {!homeLoading && filteredPosts.length === 0 ? (
                <article className="home-empty-card">
                  <h3>Mural vazio</h3>
                  <p>Ainda não há avisos, imagens ou informações publicados.{canPost ? " Use o botão + para criar a primeira publicação." : " Quando a liderança publicar algo, vai aparecer aqui."}</p>
                </article>
              ) : null}
            </div>
          ) : null}

          {activeTab === "agenda" ? (
            <div className="home-agenda-stack is-calendar">
              {agendaStatus ? <p className="home-inline-status">{agendaStatus}</p> : null}
              {agendaLoading ? <article className="home-empty-card"><h3>Carregando agenda</h3><p>Buscando compromissos salvos no Firestore.</p></article> : null}

              {!agendaLoading ? (
                <>
                  {showAgendaPanel ? (
                    <article className="home-feed-header-card home-agenda-intro-card">
                      <div className="home-agenda-intro-main">
                        <div>
                          <p className="home-hero-kicker">Painel do vocal</p>
                          <h2>Agenda do vocal</h2>
                          <p>Visual mensal limpo, com abertura só nos dias marcados e navegação simples entre os meses.</p>
                        </div>

                        <div className="home-post-stats home-agenda-intro-stats">
                          <span>{agendaVisibleMonthMarkedDays} dia(s) marcado(s)</span>
                          <span>{agendaVisibleMonthEventCount} compromisso(s)</span>
                          <span>{nextEvent ? `${nextEvent.time} • ${nextEvent.location}` : "Sem próximo evento"}</span>
                        </div>
                      </div>

                      <div className="home-feed-intro-actions home-agenda-intro-actions">
                        <button type="button" className="login-help-btn home-help-btn" onClick={() => setShowHelpModal(true)}>
                          <FiHelpCircle size={18} />
                          AJUDA
                        </button>
                        <button type="button" className="home-modal-close home-feed-close-btn" onClick={() => setShowAgendaPanel(false)} aria-label="Fechar painel do vocal">
                          <FiX size={16} />
                          Fechar
                        </button>
                      </div>
                    </article>
                  ) : null}

                  <section className="home-agenda-calendar-card">
                  <div className="home-agenda-calendar-header">
                    <div>
                      <p className="home-card-eyebrow">Agenda do vocal</p>
                      <h3>{agendaMonthLabel}</h3>
                      <p>
                        {agendaVisibleMonthMarkedDays > 0
                          ? "Toque somente nos blocos marcados para abrir os detalhes do compromisso."
                          : "Este mês ainda não tem dia marcado. Navegue entre os meses para localizar compromissos já cadastrados."}
                      </p>
                    </div>

                    <div className="home-agenda-calendar-actions">
                      <button
                        type="button"
                        className="home-agenda-month-btn"
                        aria-label="Voltar um mês na agenda"
                        onClick={() => setAgendaMonthKey((currentValue) => shiftMonthKey(currentValue, -1))}
                      >
                        <FiArrowLeft size={16} />
                      </button>
                      <button
                        type="button"
                        className="home-agenda-month-btn is-next"
                        aria-label="Avançar um mês na agenda"
                        onClick={() => setAgendaMonthKey((currentValue) => shiftMonthKey(currentValue, 1))}
                      >
                        <FiArrowLeft size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="home-agenda-calendar-toolbar">
                    <label className="home-search-shell home-search-shell-compact home-agenda-search-shell" aria-label="Buscar na agenda">
                      <FiSearch size={16} />
                      <input
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={resolveSearchPlaceholder("agenda")}
                      />
                    </label>

                    <div className="home-agenda-toolbar-meta">
                      <span className="home-feed-count-pill">{agendaVisibleMonthEventCount} compromisso(s)</span>
                      <span className="home-feed-count-pill">{agendaVisibleMonthMarkedDays} dia(s)</span>
                      {!showAgendaPanel ? (
                        <button type="button" className="home-secondary-action home-feed-restore-btn" onClick={() => setShowAgendaPanel(true)}>
                          <FiEye size={16} />
                          Mostrar painel
                        </button>
                      ) : null}
                    </div>
                  </div>

                  <div className="home-agenda-weekdays" aria-hidden="true">
                    {agendaWeekdayLabels.map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>

                  <div className="home-agenda-calendar-grid">
                    {agendaCalendarDays.map((day) => {
                      const dayClasses = [
                        "home-agenda-day",
                        day.events.length > 0 ? "is-event" : "is-empty",
                        day.isToday ? "is-today" : "",
                        day.isCurrentMonth ? "" : "is-outside",
                      ]
                        .filter(Boolean)
                        .join(" ");

                      const dayIndicator =
                        day.events.length > 1
                          ? `${day.events.length} eventos`
                          : day.events[0]?.kind || "Livre";

                      if (day.events.length > 0) {
                        return (
                          <button
                            key={day.dateKey}
                            type="button"
                            className={dayClasses}
                            aria-label={`Abrir compromissos de ${formatAgendaDateLong(day.dateKey)}`}
                            onClick={() => setActiveAgendaDate(day.dateKey)}
                          >
                            <span className="home-agenda-day-number">{day.dayNumber}</span>
                            <span className="home-agenda-day-indicator">{dayIndicator}</span>
                            <span className="home-agenda-day-dots" aria-hidden="true">
                              {day.events.slice(0, 3).map((event) => (
                                <i key={event.id} />
                              ))}
                            </span>
                          </button>
                        );
                      }

                      return (
                        <div key={day.dateKey} className={dayClasses} aria-hidden="true">
                          <span className="home-agenda-day-number">{day.dayNumber}</span>
                        </div>
                      );
                    })}
                  </div>

                  {!agendaVisibleMonthEventCount && nextEvent ? (
                    <div className="home-agenda-calendar-footer">
                      <button
                        type="button"
                        className="home-secondary-action compact"
                        onClick={() => setAgendaMonthKey(nextEvent.scheduledDate.slice(0, 7))}
                      >
                        Ir para o próximo evento
                      </button>
                    </div>
                  ) : null}
                  </section>
                </>
              ) : null}

              {!agendaLoading && filteredAgendaEvents.length === 0 ? (
                <article className="home-empty-card">
                  <h3>Agenda vazia</h3>
                  <p>Nenhum ensaio, saída ou culto foi cadastrado.{canManageAgenda ? " Use o botão + para lançar o primeiro compromisso." : " Quando a agenda for atualizada, os eventos aparecerão aqui."}</p>
                </article>
              ) : null}
            </div>
          ) : null}

          {activeTab === "songs" ? (
            <section className="home-song-library">
              {songStatus ? <p className="home-inline-status">{songStatus}</p> : null}

              <article className="home-song-drive-card">
                <div className="home-song-drive-header">
                  <div>
                    <p className="home-card-eyebrow">Biblioteca do vocal</p>
                    <h3>Músicas e cifras</h3>
                    <p>Abra letras, cifras e referências como se estivesse em uma pasta organizada do repertório, com acesso rápido para ensaio, culto e ministrações especiais.</p>
                  </div>

                  <div className="home-song-drive-stats">
                    <span className="home-feed-count-pill">{filteredSongs.length} arquivo(s)</span>
                    <span className="home-feed-count-pill">{songs.filter((song) => song.category === "Ensaio").length} ensaio</span>
                  </div>
                </div>

                {filteredSongs.length > 0 ? (
                  <div className="home-song-list" role="list">
                    {filteredSongs.map((song) => (
                      <button key={song.id} type="button" className="home-song-row" onClick={() => openSongDetail(song.id)}>
                        <div className="home-song-row-icon">
                          <GiMusicalScore size={22} />
                        </div>

                        <div className="home-song-row-main">
                          <strong>{song.title}</strong>
                          <p>{song.artist || "Artista não informado"}</p>
                          <div className="home-song-row-meta">
                            <span>{song.category}</span>
                            <span>{song.tone ? `Tom ${song.tone}` : "Tom livre"}</span>
                            <span>{song.sourceLabel}</span>
                          </div>
                        </div>

                        <div className="home-song-row-actions" onClick={(event) => event.stopPropagation()}>
                          <a className="home-secondary-action compact" href={song.sourceUrl} target="_blank" rel="noreferrer">
                            <FiExternalLink size={15} />
                            Abrir letra
                          </a>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="home-song-library-empty">
                    <GiMusicalNotes size={34} />
                    <strong>Biblioteca pronta para receber músicas</strong>
                    <p>Use o botão + para cadastrar links de cifra, letra ou referência externa e deixar o repertório acessível para todo o vocal neste aparelho.</p>
                  </div>
                )}
              </article>
            </section>
          ) : null}

          {activeTab === "members" ? (
            <section className="home-profile-panel">
              <article className="home-profile-card home-profile-directory-toolbar">
                <div>
                  <p className="home-card-eyebrow">Membros</p>
                  <h3>Membros do vocal</h3>
                  <p>Consulte o contato interno, localize integrantes e acompanhe os dados liberados para organização da equipe.</p>
                </div>

                <label className="home-search-shell home-profile-search-shell" aria-label="Buscar membros do vocal">
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={resolveSearchPlaceholder("members")}
                  />
                  <button type="button" className="home-search-trigger" onClick={handleDirectorySearchAction} aria-label="Buscar ou atualizar membros" disabled={directoryRefreshing} aria-busy={directoryRefreshing}>
                    <FiSearch size={18} />
                  </button>
                </label>
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
                    {!directoryLoading && filteredDirectoryMembers.length === 0 ? <p className="home-directory-empty">Nenhum membro encontrado para este filtro.</p> : null}

                    {filteredDirectoryMembers.map((member) => (
                      <button
                        key={member.uid}
                        type="button"
                        className={`home-directory-item${selectedDirectoryUid === member.uid ? " is-active" : ""}`}
                        onClick={() => {
                          setSelectedDirectoryUid(member.uid);
                          setShowMemberDetailModal(true);
                        }}
                      >
                        <div className="home-directory-avatar">
                          {member.avatarDataUrl ? <img src={member.avatarDataUrl} alt={member.name} /> : <span>{getInitials(member.name)}</span>}
                        </div>

                        <div className="home-directory-copy">
                          <strong>{member.name}</strong>
                          <span className={`home-directory-role ${resolveMemberRoleVisual(member).accentClassName}`}>
                            {(() => {
                              const RoleIcon = resolveMemberRoleVisual(member).icon;
                              return <RoleIcon size={14} />;
                            })()}
                            {resolveDirectoryRoleLabel(member)}
                          </span>
                          {member.uid === currentUid ? <small>Seu perfil</small> : null}
                          {member.vocalRange ? <small>Timbre {member.vocalRange}</small> : null}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            </section>
          ) : null}
        </main>

        {(activeTab === "songs" ? canManageSongs : activeTab === "agenda" ? canManageAgenda : canPost) ? (
          !activePost && !activeAgendaDate && !activeSong ? (
          <button className="home-fab-action" type="button" aria-label={activeTab === "agenda" ? "Criar evento" : activeTab === "songs" ? "Adicionar música" : "Criar publicação"} onClick={openComposer}>
            <FiPlus size={24} />
          </button>
          ) : null
        ) : null}

        {!activePost && !activeAgendaDate && !activeSong ? <nav className="home-bottom-nav" aria-label="Navegação principal">
          <button className={`nav-icon-btn${activeTab === "home" ? " is-active" : ""}`} type="button" aria-label="Home" onClick={() => openTab("home")}>
            <FiHome size={22} />
            <span>Home</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "agenda" ? " is-active" : ""}`} type="button" aria-label="Agenda" onClick={() => openTab("agenda")}>
            <LuCalendarDays size={22} />
            <span>Agenda</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "songs" ? " is-active" : ""}`} type="button" aria-label="Músicas" onClick={() => openTab("songs")}>
            <GiMusicalScore size={24} />
            <span>Músicas</span>
          </button>

          <button className={`nav-icon-btn${activeTab === "members" ? " is-active" : ""}`} type="button" aria-label="Membros" onClick={() => openTab("members")}>
            <FiUsers size={22} />
            <span>Membros</span>
          </button>
        </nav> : null}

        <AvatarEditorModal
          open={showProfileAvatarEditor}
          imageSrc={profileAvatarEditorSource}
          title="Ajuste sua foto de perfil"
          description="Corte, aproxime, afaste e ajuste a aparência antes de atualizar o seu perfil."
          onClose={() => {
            setShowProfileAvatarEditor(false);
            setProfileAvatarEditorSource("");
          }}
          onApply={async (dataUrl) => {
            setProfileAvatarPreview(dataUrl);
            setProfileAvatarDataUrl(dataUrl);
            setShowProfileAvatarEditor(false);
            setProfileAvatarEditorSource("");
            setProfileStatus("");
          }}
        />

        {activeAgendaDate ? (
          <section className="home-post-screen home-agenda-screen" role="dialog" aria-modal="true">
            <div className="home-post-screen-header">
              <button type="button" className="home-secondary-action compact" onClick={closeAgendaDetail}>
                <FiArrowLeft size={16} />
                Voltar ao calendário
              </button>
              <span className="home-role-chip">Agenda</span>
            </div>

            <article className="home-post-detail-card home-agenda-detail-card">
              <div className="home-agenda-detail-heading">
                <p className="home-card-eyebrow">Compromissos do dia</p>
                <h2>{formatAgendaDateLong(activeAgendaDate)}</h2>
                <p>
                  {activeAgendaEvents.length > 1
                    ? `${activeAgendaEvents.length} compromissos encontrados para este dia.`
                    : "1 compromisso encontrado para este dia."}
                </p>
              </div>

              <div className="home-agenda-detail-list">
                {activeAgendaEvents.map((event) => (
                  <article key={event.id} className="home-agenda-detail-event">
                    <div className="home-card-topline">
                      <span>{event.kind}</span>
                      <strong>{event.time || "Horário a definir"}</strong>
                    </div>

                    <h3>{event.title}</h3>

                    <div className="home-agenda-meta">
                      <span>{event.dateLabel}</span>
                      <span>{event.location || "Local a definir"}</span>
                      <span>Lançado por {event.author}</span>
                    </div>

                    <p>{event.note}</p>

                    <div className="home-comment-list">
                      {event.comments.length > 0 ? (
                        event.comments.map((comment) => (
                          <div key={comment.id} className="home-comment-card agenda">
                            <div>
                              <strong>{comment.author}</strong>
                              <small>{comment.role}</small>
                            </div>
                            <p>{comment.text}</p>
                            <span>{comment.createdAt}</span>
                          </div>
                        ))
                      ) : (
                        <article className="home-empty-card home-agenda-comment-empty">
                          <h3>Sem comentários ainda</h3>
                          <p>Use este espaço para justificar ausência, atraso, carona ou qualquer observação importante do compromisso.</p>
                        </article>
                      )}
                    </div>

                    {renderCommentComposer(event.id, "Comentar ausência, atraso, carona ou observação...", () => addAgendaComment(event.id))}
                  </article>
                ))}
              </div>
            </article>
          </section>
        ) : null}

        {activePost ? (
          <section className="home-post-screen" role="dialog" aria-modal="true">
            <div className="home-post-screen-header">
              <button type="button" className="home-secondary-action compact" onClick={closePostDetail}>
                <FiArrowLeft size={16} />
                Voltar ao mural
              </button>
              <span className="home-role-chip">Publicação</span>
            </div>

            <article className="home-post-detail-card">
              <div className="home-card-topline">
                <span>{activePost.category}</span>
                <strong>{activePost.dateLabel}</strong>
              </div>

              <h2>{activePost.title}</h2>
              <p>{activePost.content}</p>

              {activePost.imageUrl ? (
                <div className="home-feed-media home-post-detail-media">
                  <img src={activePost.imageUrl} alt={activePost.title} />
                </div>
              ) : null}

              <div className="home-post-author">
                <span>{activePost.author}</span>
                <small>{activePost.role}</small>
              </div>

              <div className="home-post-detail-actions">
                <button
                  type="button"
                  className={`home-post-like-btn${activePost.likedByUids.includes(currentUid) ? " is-active" : ""}`}
                  onClick={() => void togglePostLikeAction(activePost.id)}
                >
                  {activePost.likedByUids.includes(currentUid) ? <FaHeart size={18} /> : <FiHeart size={18} />}
                  <span>{activePost.likedByUids.length} curtida(s)</span>
                </button>
                <div className="home-post-stats">
                  <span><FiMessageCircle size={15} /> {activePost.comments.length} comentário(s)</span>
                </div>
              </div>

              <div className="home-comment-list home-post-detail-comments">
                {activePost.comments.length > 0 ? (
                  activePost.comments.map((comment) => (
                    <div key={comment.id} className="home-comment-card">
                      <div>
                        <strong>{comment.author}</strong>
                        <small>{comment.role}</small>
                      </div>
                      <p>{comment.text}</p>
                      <span>{comment.createdAt}</span>
                    </div>
                  ))
                ) : (
                  <article className="home-empty-card">
                    <h3>Sem comentários ainda</h3>
                    <p>Essa publicação ainda não recebeu interação. Você pode ser a primeira pessoa a comentar.</p>
                  </article>
                )}
              </div>

              {renderCommentComposer(activePost.id, "Escreva seu comentário sobre essa publicação...", () => void addPostComment(activePost.id))}
            </article>
          </section>
        ) : null}
      </div>

      <AvatarEditorModal
        open={showComposerImageEditor}
        imageSrc={composerImageEditorSource}
        title="Ajuste a imagem da publicação"
        description="Corte, aproxime, gire e ajuste a imagem antes de publicar no mural."
        eyebrowLabel="Imagem do mural"
        cropShape="rect"
        aspect={4 / 3}
        onClose={() => {
          setShowComposerImageEditor(false);
          setComposerImageEditorSource("");
        }}
        onApply={async (dataUrl) => {
          setComposerDraft((current) => ({ ...current, imageUrl: dataUrl }));
          setShowComposerImageEditor(false);
          setComposerImageEditorSource("");
          setComposerImageStatus("");
        }}
      />

      {showComposer ? (
        <div className="home-modal-backdrop" role="presentation" onClick={closeComposer}>
          <div className="home-modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Criação rápida</p>
                <h3>{composerMode === "agenda" ? "Novo evento da agenda" : composerMode === "song" ? "Nova música do repertório" : "Nova publicação do mural"}</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={closeComposer}>
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
                <p className="home-inline-status">A data da publicação é registrada automaticamente no momento em que ela é enviada.</p>
                <select name="expirationDays" value={composerDraft.expirationDays} onChange={handleComposerFieldChange}>
                  <option value="0">Sem expiração automática</option>
                  <option value="7">Expirar em 7 dias</option>
                  <option value="21">Expirar em 21 dias</option>
                  <option value="30">Expirar em 30 dias</option>
                </select>
                <input name="imageUrl" value={composerDraft.imageUrl} onChange={handleComposerFieldChange} placeholder="URL de imagem opcional" />
                <div className="home-composer-image-tools">
                  <label className="home-secondary-action compact home-inline-label-btn" htmlFor="home-composer-image-upload">
                    Carregar imagem
                  </label>
                  <input id="home-composer-image-upload" type="file" accept="image/*" hidden onChange={handleComposerImageChange} />
                  {composerDraft.imageUrl ? (
                    <button
                      type="button"
                      className="home-secondary-action compact"
                      onClick={() => {
                        setComposerDraft((current) => ({ ...current, imageUrl: "" }));
                        setComposerImageStatus("");
                      }}
                    >
                      Remover imagem
                    </button>
                  ) : null}
                </div>
                {composerDraft.imageUrl ? (
                  <div className="home-feed-media home-composer-image-preview">
                    <img src={composerDraft.imageUrl} alt="Prévia da imagem da publicação" />
                  </div>
                ) : null}
                {composerImageStatus ? <p className="home-inline-status">{composerImageStatus}</p> : null}
              </div>
            ) : composerMode === "song" ? (
              <div className="home-modal-form">
                <div className="home-pill-row">
                  {(["Culto", "Ensaio", "Especial"] as const).map((option) => (
                    <button key={option} type="button" className={`home-pill-btn${composerDraft.songCategory === option ? " is-active" : ""}`} onClick={() => setComposerDraft((current) => ({ ...current, songCategory: option }))}>
                      {option}
                    </button>
                  ))}
                </div>
                <input name="title" value={composerDraft.title} onChange={handleComposerFieldChange} placeholder="Nome da música" />
                <input name="artist" value={composerDraft.artist} onChange={handleComposerFieldChange} placeholder="Artista ou ministério" />
                <input name="tone" value={composerDraft.tone} onChange={handleComposerFieldChange} placeholder="Tom principal ou referência" />
                <input name="sourceUrl" value={composerDraft.sourceUrl} onChange={handleComposerFieldChange} placeholder="Link da cifra, letra ou referência externa (opcional)" />
                <textarea name="content" value={composerDraft.content} onChange={handleComposerFieldChange} placeholder="Observações do maestro, estrutura, intro, modulação ou notas para a equipe" rows={5} />
                <p className="home-inline-status">Se você não informar um link, o app abre uma busca automática no CifraClub com o nome da música.</p>
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
              <button type="button" className="home-secondary-action" onClick={closeComposer}>
                Cancelar
              </button>
              <button type="button" className="home-primary-action" onClick={() => void publishComposerEntry()} disabled={composerSubmitting}>
                {composerSubmitting ? "Salvando..." : composerMode === "song" ? "Adicionar música" : "Publicar"}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {activeSong ? (
        <div className="home-modal-backdrop" role="presentation" onClick={closeSongDetail}>
          <div className="home-modal-card home-song-detail-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Biblioteca do vocal</p>
                <h3>{activeSong.title}</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={closeSongDetail}>
                Fechar
              </button>
            </div>

            <div className="home-song-detail-copy">
              <div className="home-song-detail-meta">
                <span>{activeSong.category}</span>
                <span>{activeSong.artist || "Artista não informado"}</span>
                <span>{activeSong.tone ? `Tom ${activeSong.tone}` : "Tom livre"}</span>
                <span>{activeSong.sourceLabel}</span>
              </div>

              <p>{activeSong.notes || "Sem observações extras. Use o link abaixo para abrir a cifra ou a letra da música."}</p>

              <div className="home-song-detail-actions">
                <a className="home-primary-action" href={activeSong.sourceUrl} target="_blank" rel="noreferrer">
                  <FiExternalLink size={16} />
                  Abrir cifra / letra
                </a>
                <button type="button" className="home-secondary-action" onClick={closeSongDetail}>
                  Voltar à biblioteca
                </button>
              </div>

              <p className="home-song-detail-footnote">Adicionada por {activeSong.addedBy}.</p>
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
              <p>No ícone do perfil você atualiza seus dados. Na aba Membros você encontra os contatos internos liberados para o ministério.</p>
            </div>
          </div>
        </div>
      ) : null}

      {showProfileModal ? (
        <div className="home-modal-backdrop" role="presentation" onClick={() => setShowProfileModal(false)}>
          <div className="home-modal-card home-profile-modal-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Meu perfil</p>
                <h3>Editar cadastro</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={() => setShowProfileModal(false)}>
                Fechar
              </button>
            </div>

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
                    Ajustar foto
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
            </section>
          </div>
        </div>
      ) : null}

      {showMemberDetailModal && selectedDirectoryMember ? (
        <div className="home-modal-backdrop home-member-detail-backdrop" role="presentation" onClick={() => setShowMemberDetailModal(false)}>
          <div className="home-modal-card compact home-member-detail-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Contato interno</p>
                <h3>{selectedDirectoryMember.name}</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={() => setShowMemberDetailModal(false)}>
                Fechar
              </button>
            </div>

            <div className="home-directory-detail-header home-member-detail-header">
              <div className="home-directory-avatar large">
                {selectedDirectoryMember.avatarDataUrl ? <img src={selectedDirectoryMember.avatarDataUrl} alt={selectedDirectoryMember.name} /> : <span>{getInitials(selectedDirectoryMember.name)}</span>}
              </div>

              <div>
                <p className={`home-directory-role ${resolveMemberRoleVisual(selectedDirectoryMember).accentClassName}`}>
                  {(() => {
                    const RoleIcon = resolveMemberRoleVisual(selectedDirectoryMember).icon;
                    return <RoleIcon size={15} />;
                  })()}
                  Contato interno • {resolveDirectoryRoleLabel(selectedDirectoryMember)}
                </p>
                <div className="home-chip-row">
                  {selectedDirectoryMember.vocalRange ? <span className="home-chip">Timbre {selectedDirectoryMember.vocalRange}</span> : null}
                  {selectedDirectoryMember.uid === currentUid ? <span className="home-chip">Seu perfil</span> : null}
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
          </div>
        </div>
      ) : null}

      {showNotificationsModal ? (
        <div className="home-modal-backdrop" role="presentation" onClick={closeAgendaNotifications}>
          <div className="home-modal-card compact" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Agenda</p>
                <h3>Alterações da agenda</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={closeAgendaNotifications}>
                Fechar
              </button>
            </div>

            <div className="home-help-list">
              {notificationItems.length > 0 ? (
                <div className="home-notification-list">
                  {notificationItems.map((item) => (
                    <button key={item.id} type="button" className="home-notification-item" onClick={() => openAgendaNotificationItem(item)}>
                      <div className="home-notification-item-top">
                        <span className={`home-notification-kind is-${item.changeType}`}>
                          {item.changeType === "new" ? "Novo compromisso" : "Agenda atualizada"}
                        </span>
                        <small>{formatDateTimeLabel(item.createdAtValue)}</small>
                      </div>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <>
                  <p>Aqui aparecem compromissos novos ou alterações recentes que você ainda não tinha visto na agenda.</p>
                  <p>No momento, não há mudanças novas para mostrar.</p>
                </>
              )}
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