import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import type * as React from "react";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiCamera,
  FiClipboard,
  FiCopy,
  FiEye,
  FiFileText,
  FiHelpCircle,
  FiHeart,
  FiHome,
  FiMessageCircle,
  FiPhone,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiUpload,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { FaCrown, FaHeart, FaReact, FaWhatsapp } from "react-icons/fa6";
import { GiMusicalNotes, GiMusicalScore } from "react-icons/gi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";
import { AvatarEditorModal } from "../components/AvatarEditorModal";
import { SongAudioPlayer } from "../components/SongAudioPlayer";
import { SongDocumentViewer } from "../components/SongDocumentViewer";
import { firebaseAuth } from "../config/firebase";
import {
  type AccessLevel,
  type ManagedMemberRoleKey,
  canEditManagedMemberTarget,
  canManageManagedMemberTarget,
  canResetManagedMemberPasswordTarget,
  getAssignableManagedRoleKeys,
  normalizeAccessLevel,
  normalizePermissions,
  resolveManagedMemberRoleKey,
  resolveManagedMemberRoleLabel,
} from "../data/access";
import logoAd from "../img/Login/LogoAD.png";
import {
  backfillMemberDirectoryFromMembers,
  ensureMemberDirectoryEntry,
  getMemberProfile,
  listMemberDirectoryProfiles,
  updateManagedMemberBasicProfile,
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
  deleteAgendaEvent,
  deleteHomePost,
  type HomePostMediaRecord,
  listHomePosts,
  listAgendaEvents,
  toggleHomePostLike,
  type AgendaEventRecord,
  type HomeCommentRecord,
  type HomePostRecord,
} from "../services/homeContent";
import {
  createSongLibraryItem,
  deleteSongLibraryItem,
  listSongLibrary,
  SONG_VOICE_PARTS,
  type SongAttachmentRecord,
  type SongLibraryRecord,
  type SongVoiceAssetRecord,
  type SongVoicePart,
} from "../services/songLibrary";
import {
  deleteStorageObjects,
  formatStorageBytes,
  MAX_SHARED_STORAGE_BYTES,
  uploadPostMediaFiles,
  uploadSongAttachment,
  uploadSongVoiceFile,
} from "../services/storageMedia";
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
type ProfileScreen = "details" | "photo" | "editor";
type MemberScreen = "details" | "editor" | "avatar-editor";

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
  mediaItems: HomePostMediaRecord[];
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
  notes: string;
  addedBy: string;
  referenceUrl: string;
  voiceAssets: SongVoiceAssetRecord[];
  lyricFile: SongAttachmentRecord | null;
  scoreFile: SongAttachmentRecord | null;
  createdAtValue: number;
  updatedAtValue: number;
};

type ComposerMediaPreview = {
  id: string;
  name: string;
  previewUrl: string;
  kind: "image" | "video";
  sizeBytes: number;
};

type SongVoiceUploadMap = Partial<Record<SongVoicePart, File | null>>;

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
const supportedSongAudioExtensions = [
  ".mp3",
  ".wav",
  ".m4a",
  ".aac",
  ".ogg",
  ".oga",
  ".opus",
  ".flac",
  ".weba",
  ".mp4",
  ".mpeg",
  ".mpga",
  ".3gp",
  ".caf",
  ".aif",
  ".aiff",
  ".amr",
];
const supportedSongDocumentExtensions = [
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".bmp",
  ".heic",
  ".heif",
];
const supportedComposerImageExtensions = [
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".bmp",
  ".heic",
  ".heif",
];
const supportedComposerVideoExtensions = [
  ".mp4",
  ".mov",
  ".m4v",
  ".webm",
  ".avi",
  ".mkv",
  ".mpeg",
  ".mpg",
  ".3gp",
];
const memberVocalRangeOptions = [
  "Soprano",
  "Mezzo-soprano",
  "Contralto",
  "Tenor",
  "Barítono",
  "Baixo",
];

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

function normalizeComparableText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getLowercaseFileExtension(fileName: string) {
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex < 0) {
    return "";
  }

  return fileName.slice(dotIndex).toLowerCase();
}

function fileMatchesExtensions(file: File, supportedExtensions: string[]) {
  return supportedExtensions.includes(getLowercaseFileExtension(file.name));
}

function resolveComposerMediaKind(file: File): "image" | "video" | null {
  const normalizedType = file.type.trim().toLowerCase();

  if (normalizedType.startsWith("image/")) {
    return "image";
  }

  if (normalizedType.startsWith("video/")) {
    return "video";
  }

  if (fileMatchesExtensions(file, supportedComposerImageExtensions)) {
    return "image";
  }

  if (fileMatchesExtensions(file, supportedComposerVideoExtensions)) {
    return "video";
  }

  if ((normalizedType === "" || normalizedType === "application/octet-stream") && file.size > 0) {
    if (fileMatchesExtensions(file, supportedComposerImageExtensions)) {
      return "image";
    }

    if (fileMatchesExtensions(file, supportedComposerVideoExtensions)) {
      return "video";
    }
  }

  return null;
}

function isSupportedSongAudioFile(file: File) {
  const normalizedType = file.type.trim().toLowerCase();

  return (
    normalizedType.startsWith("audio/") ||
    fileMatchesExtensions(file, supportedSongAudioExtensions) ||
    ((normalizedType === "" || normalizedType === "application/octet-stream") && file.size > 0)
  );
}

function isSupportedSongDocumentFile(file: File) {
  return (
    file.type === "application/pdf" ||
    file.type.startsWith("image/") ||
    fileMatchesExtensions(file, supportedSongDocumentExtensions)
  );
}

function describeSongPickerFile(file: File) {
  return [
    file.name || "arquivo sem nome",
    formatStorageBytes(file.size),
    file.type || "tipo não informado",
  ].join(" • ");
}

function normalizeVoiceType(value: string): SongVoicePart | "" {
  const normalizedValue = normalizeComparableText(value);

  if (normalizedValue.includes("mezzo")) {
    return "Mezzo-soprano";
  }

  if (normalizedValue.includes("soprano")) {
    return "Soprano";
  }

  if (normalizedValue.includes("contralto")) {
    return "Contralto";
  }

  if (normalizedValue.includes("tenor")) {
    return "Tenor";
  }

  if (normalizedValue.includes("baritono")) {
    return "Barítono";
  }

  if (normalizedValue.includes("baixo")) {
    return "Baixo";
  }

  return "";
}

function isGenericVoiceType(value: string) {
  return normalizeComparableText(value) === "geral";
}

function matchesVoiceTypeForMember(value: string, voicePart: SongVoicePart | "") {
  return Boolean(voicePart) && normalizeVoiceType(value) === voicePart;
}

function buildPostPrimaryImageUrl(mediaItems: HomePostMediaRecord[]) {
  return mediaItems.find((item) => item.kind === "image")?.url || "";
}

function createComposerMediaPreviews(files: File[]) {
  return files.map((file, index) => ({
    id: `${file.name}-${file.size}-${index}`,
    name: file.name,
    previewUrl: URL.createObjectURL(file),
    kind: resolveComposerMediaKind(file) === "video" ? "video" : "image",
    sizeBytes: file.size,
  })) satisfies ComposerMediaPreview[];
}

function revokeComposerMediaPreviews(previews: ComposerMediaPreview[]) {
  previews.forEach((preview) => {
    URL.revokeObjectURL(preview.previewUrl);
  });
}

function renderPostMediaGallery(mediaItems: HomePostMediaRecord[], title: string, detailView = false) {
  if (mediaItems.length === 0) {
    return null;
  }

  return (
    <div className={`home-feed-media-grid${detailView ? " is-detail" : ""}`}>
      {mediaItems.map((mediaItem) => (
        <div key={`${mediaItem.path}-${mediaItem.url}`} className={`home-feed-media${mediaItem.kind === "video" ? " is-video" : ""}`}>
          {mediaItem.kind === "video" ? (
            <video controls preload="metadata" playsInline>
              <source src={mediaItem.url} type={mediaItem.contentType} />
              Seu navegador não conseguiu abrir este vídeo.
            </video>
          ) : (
            <img src={mediaItem.url} alt={title} />
          )}
        </div>
      ))}
    </div>
  );
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
  const mediaItems = Array.isArray(post.mediaItems) ? post.mediaItems : [];

  return {
    id: post.id,
    category: post.category,
    title: post.title,
    content: post.content,
    author: post.author,
    role: post.role,
    dateLabel: formatDateTimeLabel(post.createdAt),
    imageUrl: post.imageUrl || buildPostPrimaryImageUrl(mediaItems),
    mediaItems,
    comments: Array.isArray(post.comments) ? post.comments : [],
    likedByUids: Array.isArray(post.likedByUids) ? post.likedByUids : [],
    createdAtValue: resolveTimestampMillis(post.createdAt),
    expirationDays: typeof post.expirationDays === "number" ? post.expirationDays : 0,
  };
}

function mapSongLibraryRecord(song: SongLibraryRecord): SongLibraryItem {
  return {
    id: song.id,
    title: song.title,
    artist: song.artist,
    tone: song.tone,
    category: song.category,
    notes: song.notes,
    addedBy: song.addedBy,
    referenceUrl: song.referenceUrl,
    voiceAssets: Array.isArray(song.voiceAssets) ? song.voiceAssets : [],
    lyricFile: song.lyricFile || null,
    scoreFile: song.scoreFile || null,
    createdAtValue: resolveTimestampMillis(song.createdAt),
    updatedAtValue: resolveTimestampMillis(song.updatedAt),
  };
}

function extractOperationMessage(error: unknown, fallback: string) {
  if (error && typeof error === "object" && "code" in error && typeof error.code === "string") {
    if (error.code === "storage/unauthorized") {
      return "Seu usuário não tem permissão para enviar esse arquivo ao Storage.";
    }

    if (error.code === "storage/retry-limit-exceeded") {
      return "A conexão caiu durante o envio ao Storage. Tente novamente no celular com internet estável ou envie menos arquivos por vez.";
    }
  }

  if (error instanceof Error && error.message.trim()) {
    if (/ERR_HTTP2_PROTOCOL_ERROR|ERR_CONNECTION_(?:RESET|CLOSED)|network|timeout/i.test(error.message)) {
      return "A conexão com o Storage falhou durante o envio. Tente novamente com internet estável ou envie um arquivo por vez.";
    }

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

async function fetchSongLibraryContent() {
  const library = await listSongLibrary();
  return library.map(mapSongLibraryRecord);
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
  const [activeProfileScreen, setActiveProfileScreen] = useState<ProfileScreen | null>(null);
  const [activeMemberScreen, setActiveMemberScreen] = useState<MemberScreen | null>(null);
  const [memberManagementNameDraft, setMemberManagementNameDraft] = useState("");
  const [memberManagementPhoneDraft, setMemberManagementPhoneDraft] = useState("");
  const [memberManagementVocalRangeDraft, setMemberManagementVocalRangeDraft] = useState("");
  const [memberManagementAvatarPreview, setMemberManagementAvatarPreview] = useState("");
  const [memberManagementAvatarDataUrl, setMemberManagementAvatarDataUrl] = useState<string | null>(null);
  const [memberManagementAvatarEditorSource, setMemberManagementAvatarEditorSource] = useState("");
  const [memberManagementRoleDraft, setMemberManagementRoleDraft] = useState<ManagedMemberRoleKey>("member");
  const [memberManagementLoading, setMemberManagementLoading] = useState(false);
  const [memberManagementSubmitting, setMemberManagementSubmitting] = useState(false);
  const [memberManagementDisabled, setMemberManagementDisabled] = useState(false);
  const [memberManagementAuthExists, setMemberManagementAuthExists] = useState(true);
  const [memberManagementEmail, setMemberManagementEmail] = useState("");
  const [memberManagementStatus, setMemberManagementStatus] = useState("");
  const [showHomeFeedHeader, setShowHomeFeedHeader] = useState(true);
  const [showAgendaPanel, setShowAgendaPanel] = useState(true);
  const [activePostId, setActivePostId] = useState("");
  const [activeAgendaDate, setActiveAgendaDate] = useState("");
  const [agendaMonthKey, setAgendaMonthKey] = useState(() => formatMonthKey(new Date()));
  const [songs, setSongs] = useState<SongLibraryItem[]>(initialSongLibrary);
  const [songsLoading, setSongsLoading] = useState(false);
  const [songStatus, setSongStatus] = useState("");
  const [activeSongId, setActiveSongId] = useState("");
  const [selectedSongAssetPath, setSelectedSongAssetPath] = useState("");
  const [selectedSongDocumentKind, setSelectedSongDocumentKind] = useState<"lyrics" | "score">("lyrics");
  const [isSongDocumentExpanded, setIsSongDocumentExpanded] = useState(false);
  const [songPickerDebug, setSongPickerDebug] = useState("");
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
    songCategory: "Clássicos",
    customSongCategory: "",
  });
  const [postMediaFiles, setPostMediaFiles] = useState<File[]>([]);
  const [postMediaPreviews, setPostMediaPreviews] = useState<ComposerMediaPreview[]>([]);
  const [songVoiceFiles, setSongVoiceFiles] = useState<SongVoiceUploadMap>({});
  const [songLyricFile, setSongLyricFile] = useState<File | null>(null);
  const [songScoreFile, setSongScoreFile] = useState<File | null>(null);
  const [profile, setProfile] = useState<MemberProfile | null>(null);
  const [profileDraft, setProfileDraft] = useState<OwnMemberProfileUpdate>(() =>
    buildProfileDraft(null, memberName, memberGender, memberVocalRange),
  );
  const [profileAvatarPreview, setProfileAvatarPreview] = useState("");
  const [profileAvatarDataUrl, setProfileAvatarDataUrl] = useState<string | null>(null);
  const [profileAvatarEditorSource, setProfileAvatarEditorSource] = useState("");
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
  const songVoiceInputRefs = useRef<Partial<Record<SongVoicePart, HTMLInputElement | null>>>({});
  const songLyricsInputRef = useRef<HTMLInputElement | null>(null);
  const songScoreInputRef = useRef<HTMLInputElement | null>(null);
  const profileAvatarInputRef = useRef<HTMLInputElement | null>(null);
  const memberAvatarInputRef = useRef<HTMLInputElement | null>(null);
  const managedMemberContextUidRef = useRef("");

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
  const canViewAllSongTracks =
    resolvedAccessLevel === "administration" ||
    resolvedLeadershipRole === "Desenvolvedor" ||
    resolvedLeadershipRole === "Maestro" ||
    resolvedLeadershipRole === "Secretário";
  const currentManagementRole = resolveManagedMemberRoleKey(resolvedAccessLevel, resolvedLeadershipRole);
  const canRemoveManagedContent =
    resolvedAccessLevel === "administration" ||
    resolvedLeadershipRole === "Maestro" ||
    resolvedLeadershipRole === "Secretário";
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
      setSongsLoading(true);
      setProfileStatus("");
      setAgendaStatus("");
      setHomeStatus("");
      setSongStatus("");
      setDirectoryStatus("");

      try {
        const profileResult = await getMemberProfile(currentUid);
        const [agendaResult, directoryResult, homeResult, songsResult] = await Promise.allSettled([
          fetchAgendaContent(),
          fetchDirectoryContent(currentUid, profileResult),
          fetchHomePostsContent(),
          fetchSongLibraryContent(),
        ]);

        if (!isActive) {
          return;
        }

        setProfile(profileResult);
        setProfileDraft(buildProfileDraft(profileResult, memberName, memberGender, memberVocalRange));
        setProfileAvatarPreview(profileResult?.avatarDataUrl || currentUser?.photoURL || "");
        setProfileAvatarDataUrl(null);
        setProfileAvatarEditorSource("");

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

        if (songsResult.status === "fulfilled") {
          setSongs(songsResult.value);
        } else {
          setSongStatus("Não foi possível carregar a biblioteca musical agora.");
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
          setSongsLoading(false);
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
      [
        song.title,
        song.artist,
        song.tone,
        song.category,
        song.notes,
        song.addedBy,
        song.referenceUrl,
        ...song.voiceAssets.map((asset) => asset.voiceType),
      ]
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
  const currentVoicePart = normalizeVoiceType(resolvedVocalRange);
  const selectedMemberManagementRole = selectedDirectoryMember
    ? resolveManagedMemberRoleKey(selectedDirectoryMember.accountLevel, selectedDirectoryMember.leadershipRole)
    : "member";
  const canEditSelectedMember = Boolean(selectedDirectoryMember) && canEditManagedMemberTarget(
    currentManagementRole,
    selectedMemberManagementRole,
    currentUid,
    selectedDirectoryMember.uid,
  );
  const canManageSelectedMember = Boolean(selectedDirectoryMember) && canManageManagedMemberTarget(
    currentManagementRole,
    selectedMemberManagementRole,
    currentUid,
    selectedDirectoryMember.uid,
  );
  const canResetSelectedMemberPassword = Boolean(selectedDirectoryMember) && canResetManagedMemberPasswordTarget(
    currentManagementRole,
    selectedMemberManagementRole,
    currentUid,
    selectedDirectoryMember.uid,
  );
  const canOpenSelectedMemberEditor = canEditSelectedMember || canManageSelectedMember;
  const assignableManagedRoleKeys = canEditSelectedMember
    ? getAssignableManagedRoleKeys(currentManagementRole)
    : [];
  const nextEvent = filteredAgendaEvents[0] ?? agendaEvents[0];
  const profileAvatar = profileAvatarPreview || currentUser?.photoURL || profile?.avatarDataUrl || "";
  const managedMemberAvatar = memberManagementAvatarPreview || selectedDirectoryMember?.avatarDataUrl || "";
  const hasPendingProfileAvatar = Boolean(profileAvatarDataUrl);
  const hasPendingManagedMemberAvatar = Boolean(memberManagementAvatarDataUrl);
  const sharedStorageUsedBytes = useMemo(
    () =>
      posts.reduce(
        (total, post) => total + post.mediaItems.reduce((postTotal, mediaItem) => postTotal + mediaItem.sizeBytes, 0),
        0,
      ) +
      songs.reduce(
        (total, song) =>
          total +
          song.voiceAssets.reduce((songTotal, asset) => songTotal + asset.sizeBytes, 0) +
          (song.lyricFile?.sizeBytes || 0) +
          (song.scoreFile?.sizeBytes || 0),
        0,
      ),
    [posts, songs],
  );
  const visibleSongVoiceAssets = useMemo(() => {
    if (!activeSong) {
      return [];
    }

    if (canViewAllSongTracks) {
      return activeSong.voiceAssets;
    }

    const genericAssets = activeSong.voiceAssets.filter((asset) => isGenericVoiceType(asset.voiceType));

    if (!currentVoicePart) {
      return genericAssets;
    }

    const currentVoiceAssets = activeSong.voiceAssets.filter((asset) => matchesVoiceTypeForMember(asset.voiceType, currentVoicePart));

    return [...currentVoiceAssets, ...genericAssets.filter((asset) => asset.voiceType !== currentVoicePart)];
  }, [activeSong, canViewAllSongTracks, currentVoicePart]);
  const selectedSongVoiceAsset = useMemo(
    () => visibleSongVoiceAssets.find((asset) => asset.path === selectedSongAssetPath) || visibleSongVoiceAssets[0] || null,
    [selectedSongAssetPath, visibleSongVoiceAssets],
  );
  const availableSongDocuments = useMemo(
    () => ({
      lyrics: activeSong?.lyricFile || null,
      score: activeSong?.scoreFile || null,
    }),
    [activeSong],
  );
  const selectedSongDocument =
    selectedSongDocumentKind === "lyrics" ? availableSongDocuments.lyrics : availableSongDocuments.score;
  const selectedSongVoiceUrl = selectedSongVoiceAsset?.url || "";
  const selectedSongDocumentUrl = selectedSongDocument?.url || "";
  const hasOverlayModalOpen =
    showComposer ||
    Boolean(activeSong) ||
    Boolean(activeProfileScreen) ||
    Boolean(activeMemberScreen) ||
    showHelpModal ||
    showNotificationsModal ||
    showLogoutModal;
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
    setSelectedSongAssetPath("");
    setSelectedSongDocumentKind("lyrics");
    setIsSongDocumentExpanded(false);
  }, [activeSongId]);

  useEffect(() => {
    if (visibleSongVoiceAssets.length === 0) {
      setSelectedSongAssetPath("");
      return;
    }

    if (!visibleSongVoiceAssets.some((asset) => asset.path === selectedSongAssetPath)) {
      setSelectedSongAssetPath(visibleSongVoiceAssets[0].path);
    }
  }, [selectedSongAssetPath, visibleSongVoiceAssets]);

  useEffect(() => {
    if (!activeSong) {
      setSelectedSongDocumentKind("lyrics");
      setIsSongDocumentExpanded(false);
      return;
    }

    if (availableSongDocuments[selectedSongDocumentKind]) {
      return;
    }

    if (availableSongDocuments.lyrics) {
      setSelectedSongDocumentKind("lyrics");
      return;
    }

    if (availableSongDocuments.score) {
      setSelectedSongDocumentKind("score");
    }
  }, [activeSong, availableSongDocuments, selectedSongDocumentKind]);

  useEffect(() => {
    if (!selectedSongDocumentUrl) {
      setIsSongDocumentExpanded(false);
    }
  }, [selectedSongDocumentUrl]);

  useEffect(() => {
    if ((activeMemberScreen !== "details" && activeMemberScreen !== "editor") || !selectedDirectoryMember) {
      return;
    }

    if (managedMemberContextUidRef.current === selectedDirectoryMember.uid) {
      return;
    }

    managedMemberContextUidRef.current = selectedDirectoryMember.uid;

    const nextTargetRole = resolveManagedMemberRoleKey(
      selectedDirectoryMember.accountLevel,
      selectedDirectoryMember.leadershipRole,
    );

    setMemberManagementRoleDraft(nextTargetRole);
    setMemberManagementNameDraft(selectedDirectoryMember.name || "");
    setMemberManagementPhoneDraft(selectedDirectoryMember.phone || "");
    setMemberManagementVocalRangeDraft(selectedDirectoryMember.vocalRange || "");
    setMemberManagementAvatarPreview(selectedDirectoryMember.avatarDataUrl || "");
    setMemberManagementAvatarDataUrl(null);
    setMemberManagementAvatarEditorSource("");
    setMemberManagementStatus("");
    setMemberManagementEmail("");
    setMemberManagementDisabled(false);
    setMemberManagementAuthExists(true);

    if (!canOpenSelectedMemberEditor || !currentUser) {
      setMemberManagementLoading(false);
      return;
    }

    let cancelled = false;

    setMemberManagementLoading(true);

    void (async () => {
      try {
        const idToken = await currentUser.getIdToken();
        const response = await fetch("/api/members/manage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            action: "inspect",
            targetUid: selectedDirectoryMember.uid,
          }),
        });
        const payload = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(
            typeof payload.message === "string"
              ? payload.message
              : "Não foi possível carregar as ações deste membro agora.",
          );
        }

        if (cancelled) {
          return;
        }

        if (typeof payload.target?.roleKey === "string") {
          setMemberManagementRoleDraft(payload.target.roleKey as ManagedMemberRoleKey);
        }

        if (typeof payload.target?.name === "string") {
          setMemberManagementNameDraft(payload.target.name);
        }

        if (typeof payload.target?.phone === "string") {
          setMemberManagementPhoneDraft(payload.target.phone);
        }

        if (typeof payload.target?.vocalRange === "string") {
          setMemberManagementVocalRangeDraft(payload.target.vocalRange);
        }

        if (typeof payload.target?.avatarDataUrl === "string") {
          setMemberManagementAvatarPreview(payload.target.avatarDataUrl);
        }

        setMemberManagementDisabled(Boolean(payload.target?.disabled));
        setMemberManagementAuthExists(payload.target?.authExists !== false);
        setMemberManagementEmail(typeof payload.target?.email === "string" ? payload.target.email : "");
      } catch (error) {
        if (!cancelled) {
          setMemberManagementStatus(
            error instanceof Error
              ? error.message
              : "Não foi possível carregar as ações deste membro agora.",
          );
        }
      } finally {
        if (!cancelled) {
          setMemberManagementLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    canOpenSelectedMemberEditor,
    currentUser,
    selectedDirectoryMember,
    activeMemberScreen,
  ]);

  useEffect(() => {
    if (activeAgendaDate && !agendaEventsByDate.has(activeAgendaDate)) {
      setActiveAgendaDate("");
    }
  }, [activeAgendaDate, agendaEventsByDate]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousBodyOverscroll = body.style.overscrollBehaviorY;
    const previousHtmlOverscroll = documentElement.style.overscrollBehaviorY;

    if (hasOverlayModalOpen) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
      body.style.overscrollBehaviorY = "none";
      documentElement.style.overscrollBehaviorY = "none";
    }

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.overscrollBehaviorY = previousBodyOverscroll;
      documentElement.style.overscrollBehaviorY = previousHtmlOverscroll;
    };
  }, [hasOverlayModalOpen]);

  useEffect(
    () => () => {
      revokeComposerMediaPreviews(postMediaPreviews);
    },
    [postMediaPreviews],
  );

  const clearPostMediaSelection = () => {
    setPostMediaFiles([]);
    setPostMediaPreviews((current) => {
      revokeComposerMediaPreviews(current);
      return [];
    });
  };

  const resetSongUploadSelection = () => {
    setSongVoiceFiles({});
    setSongLyricFile(null);
    setSongScoreFile(null);
    setSongPickerDebug("");
  };

  const applySongVoiceFileSelection = (voiceType: SongVoicePart, file: File | null, sourceLabel: string) => {
    if (!file) {
      setSongPickerDebug(`Nenhum arquivo foi retornado para ${voiceType} via ${sourceLabel}.`);
      return;
    }

    if (!isSupportedSongAudioFile(file)) {
      setSongStatus("Envie apenas arquivos de áudio para cada voz.");
      setSongPickerDebug(`Arquivo rejeitado para ${voiceType}: ${describeSongPickerFile(file)}.`);
      return;
    }

    setSongVoiceFiles((current) => ({ ...current, [voiceType]: file }));
    setSongStatus("");
    setSongPickerDebug(`${voiceType}: ${describeSongPickerFile(file)} via ${sourceLabel}.`);
  };

  const applySongAttachmentFileSelection = (
    attachmentType: "lyrics" | "score",
    file: File | null,
    sourceLabel: string,
  ) => {
    if (!file) {
      setSongPickerDebug(`Nenhum arquivo foi retornado para ${attachmentType === "lyrics" ? "a letra" : "a partitura"} via ${sourceLabel}.`);
      return;
    }

    if (!isSupportedSongDocumentFile(file)) {
      setSongStatus("Letra e partitura aceitam apenas PDF ou imagem.");
      setSongPickerDebug(`Arquivo rejeitado para ${attachmentType === "lyrics" ? "letra" : "partitura"}: ${describeSongPickerFile(file)}.`);
      return;
    }

    if (attachmentType === "lyrics") {
      setSongLyricFile(file);
    } else {
      setSongScoreFile(file);
    }

    setSongStatus("");
    setSongPickerDebug(`${attachmentType === "lyrics" ? "Letra" : "Partitura"}: ${describeSongPickerFile(file)} via ${sourceLabel}.`);
  };

  const openSongVoiceLocalPicker = (voiceType: SongVoicePart) => {
    setSongPickerDebug(`Abrindo seletor local para ${voiceType}...`);
    songVoiceInputRefs.current[voiceType]?.click();
  };

  const openSongAttachmentLocalPicker = (attachmentType: "lyrics" | "score") => {
    setSongPickerDebug(`Abrindo seletor local para ${attachmentType === "lyrics" ? "a letra" : "a partitura"}...`);
    if (attachmentType === "lyrics") {
      songLyricsInputRef.current?.click();
      return;
    }

    songScoreInputRef.current?.click();
  };

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
    setActiveProfileScreen(null);
    setActiveMemberScreen(null);
    setActivePostId("");
    setActiveTab("agenda");
    setAgendaMonthKey(item.scheduledDate.slice(0, 7));
    setActiveAgendaDate(item.scheduledDate);
  };

  const openTab = (tab: HomeTab) => {
    setActiveProfileScreen(null);
    setActiveMemberScreen(null);
    setActiveTab(tab);
    setActivePostId("");
    setActiveAgendaDate("");
    setActiveSongId("");
  };

  const closeAgendaDetail = () => {
    setActiveAgendaDate("");
  };

  const resetMemberManagementState = () => {
    managedMemberContextUidRef.current = "";
    setMemberManagementNameDraft("");
    setMemberManagementPhoneDraft("");
    setMemberManagementVocalRangeDraft("");
    setMemberManagementAvatarPreview("");
    setMemberManagementAvatarDataUrl(null);
    setMemberManagementAvatarEditorSource("");
    setMemberManagementRoleDraft("member");
    setMemberManagementLoading(false);
    setMemberManagementSubmitting(false);
    setMemberManagementDisabled(false);
    setMemberManagementAuthExists(true);
    setMemberManagementEmail("");
    setMemberManagementStatus("");
  };

  const closeMemberDetailPage = () => {
    setActiveMemberScreen(null);
    resetMemberManagementState();
  };

  const closeComposer = () => {
    setShowComposer(false);
    clearPostMediaSelection();
    resetSongUploadSelection();
  };

  const openPostDetail = (postId: string) => {
    setActiveProfileScreen(null);
    setActiveMemberScreen(null);
    setActivePostId(postId);
  };

  const closePostDetail = () => {
    setActivePostId("");
  };

  const openSongDetail = (songId: string) => {
    setActiveProfileScreen(null);
    setActiveMemberScreen(null);
    setActivePostId("");
    setActiveAgendaDate("");
    setIsSongDocumentExpanded(false);
    setActiveSongId(songId);
  };

  const closeSongDetail = () => {
    setIsSongDocumentExpanded(false);
    setActiveSongId("");
  };

  const openProfilePage = () => {
    setProfileStatus("");
    setActiveMemberScreen(null);
    setActiveProfileScreen("details");
  };

  const openProfilePhotoPage = () => {
    setProfileStatus("");
    setActiveProfileScreen("photo");
  };

  const closeProfileFlow = () => {
    setActiveProfileScreen(null);
    setProfileAvatarEditorSource("");
  };

  const openProfileAvatarPicker = () => {
    setProfileStatus("");
    profileAvatarInputRef.current?.click();
  };

  const reopenProfileAvatarEditor = () => {
    const source = profileAvatarDataUrl || profileAvatarPreview || currentUser?.photoURL || profile?.avatarDataUrl || "";

    if (!source) {
      setProfileStatus("Escolha uma imagem para ajustar a sua foto.");
      return;
    }

    setProfileStatus("");
    setProfileAvatarEditorSource(source);
    setActiveProfileScreen("editor");
  };

  const discardPendingProfileAvatar = () => {
    setProfileAvatarPreview(profile?.avatarDataUrl || currentUser?.photoURL || "");
    setProfileAvatarDataUrl(null);
    setProfileAvatarEditorSource("");
    setProfileStatus("Alteração da foto descartada.");
  };

  const openComposer = () => {
    setActiveProfileScreen(null);
    setActiveMemberScreen(null);
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
      songCategory: "Clássicos",
      customSongCategory: "",
    });
    clearPostMediaSelection();
    resetSongUploadSelection();
    setShowComposer(true);
  };

  const openMemberDetailPage = (memberUid: string) => {
    setActiveProfileScreen(null);
    setActivePostId("");
    setActiveAgendaDate("");
    setActiveSongId("");
    setSelectedDirectoryUid(memberUid);
    managedMemberContextUidRef.current = "";
    setActiveMemberScreen("details");
  };

  const openManagedMemberEditorPage = () => {
    if (!selectedDirectoryMember || !canOpenSelectedMemberEditor) {
      return;
    }

    setMemberManagementStatus("");
    setActiveMemberScreen("editor");
  };

  const handleComposerFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setComposerDraft((current) => ({ ...current, [name]: value }));
  };

  const handlePostMediaFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextFiles = Array.from(event.target.files || []).filter(
      (file) => resolveComposerMediaKind(file) !== null,
    );
    event.target.value = "";

    if (nextFiles.length === 0) {
      setHomeStatus("Selecione imagens ou vídeos válidos para o mural.");
      return;
    }

    clearPostMediaSelection();
    setPostMediaFiles(nextFiles);
    setPostMediaPreviews(createComposerMediaPreviews(nextFiles));
    setHomeStatus("");
  };

  const handleSongVoiceFileChange = (voiceType: SongVoicePart, event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const file = input.files?.[0] || null;
    input.value = "";
    applySongVoiceFileSelection(voiceType, file, "dispositivo");
  };

  const handleSongAttachmentChange = (
    attachmentType: "lyrics" | "score",
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const input = event.currentTarget;
    const file = input.files?.[0] || null;
    input.value = "";
    applySongAttachmentFileSelection(attachmentType, file, "dispositivo");
  };

  const publishComposerEntry = async () => {
    if (composerMode !== "song" && (!composerDraft.title.trim() || !composerDraft.content.trim())) {
      return;
    }

    if (composerMode === "song") {
      if (!currentUid) {
        setSongStatus("Não foi possível identificar sua sessão para salvar a música.");
        return;
      }

      const normalizedTitle = composerDraft.title.trim();

      if (!normalizedTitle) {
        setSongStatus("Informe o nome da música para adicionar ao repertório.");
        return;
      }

      const voiceFileEntries = Object.entries(songVoiceFiles).filter((entry): entry is [SongVoicePart, File] => {
        const [, file] = entry;
        return Boolean(file);
      });

      if (voiceFileEntries.length === 0 && !songLyricFile && !songScoreFile && !composerDraft.sourceUrl.trim()) {
        setSongStatus("Envie ao menos um arquivo por voz, a letra, a partitura ou um link de apoio.");
        return;
      }

      const uploadBytesTotal = voiceFileEntries.reduce((total, [, file]) => total + file.size, 0) + (songLyricFile?.size || 0) + (songScoreFile?.size || 0);

      if (sharedStorageUsedBytes + uploadBytesTotal > MAX_SHARED_STORAGE_BYTES) {
        setSongStatus("Esse envio ultrapassa o limite configurado de 5 GB do storage compartilhado.");
        return;
      }

      setComposerSubmitting(true);
      setSongStatus("Enviando arquivos da música para o Storage...");
      const songUploadToastId = toast.loading("Enviando arquivos da música...");

      const songId = createId("song");
      const uploadedPaths: string[] = [];
      let songCreated = false;

      try {
        const voiceAssets: SongVoiceAssetRecord[] = [];

        for (const [voiceType, file] of voiceFileEntries) {
          const asset = await uploadSongVoiceFile(songId, voiceType, file);
          uploadedPaths.push(asset.path);
          voiceAssets.push({
            ...asset,
            voiceType,
          });
        }

        const lyricFile = songLyricFile
          ? {
              ...(await uploadSongAttachment(songId, "lyrics", songLyricFile)),
              attachmentType: "lyrics",
            }
          : null;

        if (lyricFile) {
          uploadedPaths.push(lyricFile.path);
        }

        const scoreFile = songScoreFile
          ? {
              ...(await uploadSongAttachment(songId, "score", songScoreFile)),
              attachmentType: "score",
            }
          : null;

        if (scoreFile) {
          uploadedPaths.push(scoreFile.path);
        }

        const createdSong = await createSongLibraryItem({
          id: songId,
          title: normalizedTitle,
          artist: composerDraft.artist.trim(),
          tone: composerDraft.tone.trim(),
          category: composerDraft.customSongCategory.trim() || composerDraft.songCategory || "Clássicos",
          notes: composerDraft.content.trim(),
          addedBy: resolvedName,
          createdByUid: currentUid,
          referenceUrl: normalizeExternalUrl(composerDraft.sourceUrl),
          voiceAssets,
          lyricFile,
          scoreFile,
        });
        songCreated = true;

        setSongs((current) => [
          mapSongLibraryRecord(createdSong),
          ...current.filter((song) => song.id !== createdSong.id),
        ]);
        setActiveTab("songs");
        closeComposer();
        setSongStatus("Música salva com sucesso.");
        toast.success("Música salva com sucesso.", { id: songUploadToastId });

        void fetchSongLibraryContent()
          .then((nextSongs) => {
            setSongs(nextSongs);
          })
          .catch(() => undefined);
      } catch (error) {
        if (!songCreated && uploadedPaths.length > 0) {
          await deleteStorageObjects(uploadedPaths).catch(() => undefined);
        }

        const message = extractOperationMessage(error, "Não foi possível salvar a música agora.");
        setSongStatus(message);
        toast.error(message, { id: songUploadToastId });
      } finally {
        setComposerSubmitting(false);
      }

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
        toast.success("Compromisso publicado na agenda.");
      } catch {
        setAgendaStatus("Não foi possível salvar esse compromisso no Firestore agora.");
        toast.error("Não foi possível salvar esse compromisso no Firestore agora.");
      } finally {
        setComposerSubmitting(false);
      }
    } else {
      if (!currentUid) {
        setHomeStatus("Não foi possível identificar sua sessão para publicar no mural.");
        return;
      }

      const uploadBytesTotal = postMediaFiles.reduce((total, file) => total + file.size, 0);

      if (sharedStorageUsedBytes + uploadBytesTotal > MAX_SHARED_STORAGE_BYTES) {
        setHomeStatus("Esse envio ultrapassa o limite configurado de 5 GB do storage compartilhado.");
        return;
      }

      setComposerSubmitting(true);
      setHomeStatus(postMediaFiles.length > 0 ? "Enviando mídia para o mural..." : "Publicando no mural...");

      const postId = createId("post");
      const uploadedPaths: string[] = [];

      try {
        const uploadedMedia = postMediaFiles.length > 0 ? await uploadPostMediaFiles(postId, postMediaFiles) : [];
        uploadedMedia.forEach((mediaItem) => uploadedPaths.push(mediaItem.path));

        const mediaItems = uploadedMedia.filter(
          (mediaItem): mediaItem is HomePostMediaRecord => mediaItem.kind === "image" || mediaItem.kind === "video",
        );

        await createHomePost({
          id: postId,
          category: composerDraft.category || "Aviso",
          title: composerDraft.title.trim(),
          content: composerDraft.content.trim(),
          author: resolvedName,
          role: roleLabel,
          imageUrl: buildPostPrimaryImageUrl(mediaItems),
          mediaItems,
          expirationDays: Number(composerDraft.expirationDays) || 0,
          createdByUid: currentUid,
        });

        const nextPosts = await fetchHomePostsContent();
        setPosts(nextPosts);
        setQuery("");
        setHomeStatus("Publicação enviada ao mural.");
        setActiveTab("home");
        closeComposer();
        toast.success("Publicação enviada ao mural.");
      } catch (error) {
        if (uploadedPaths.length > 0) {
          await deleteStorageObjects(uploadedPaths).catch(() => undefined);
        }

        const message = extractOperationMessage(error, "Não foi possível publicar no mural agora.");
        setHomeStatus(message);
        toast.error(message);
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
      toast.success("Comentário publicado no mural.");
    } catch (error) {
      const message = extractOperationMessage(error, "O comentário apareceu na tela, mas a sincronização com o servidor falhou.");
      setHomeStatus(message);
      toast.error(message);
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
      toast.success("Comentário enviado para a agenda.");
    } catch {
      setAgendaStatus("Não foi possível comentar nesse compromisso agora.");
      toast.error("Não foi possível comentar nesse compromisso agora.");
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

  const refreshDirectoryMembers = async (nextStatusMessage?: string) => {
    const directoryResult = await fetchDirectoryContent(currentUid, profile);
    setDirectoryMembers(sortDirectoryMembers(directoryResult.members));
    setDirectoryStatus(nextStatusMessage || directoryResult.statusMessage || "Diretório atualizado.");
    return directoryResult.members;
  };

  const callManagedMemberAction = async (
    action: "inspect" | "update-profile" | "update-role" | "set-disabled" | "delete-account",
    payload: Record<string, unknown>,
  ) => {
    if (!currentUser) {
      throw new Error("Não foi possível identificar sua sessão para gerenciar membros.");
    }

    const idToken = await currentUser.getIdToken();
    const response = await fetch("/api/members/manage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        action,
        ...payload,
      }),
    });
    const responsePayload = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        typeof responsePayload.message === "string"
          ? responsePayload.message
          : "Não foi possível concluir esta ação no membro agora.",
      );
    }

    return responsePayload as {
      message?: string;
      target?: {
        uid?: string;
        name?: string;
        phone?: string;
        vocalRange?: string;
        avatarDataUrl?: string;
        disabled?: boolean;
        deleted?: boolean;
        roleKey?: ManagedMemberRoleKey;
      };
    };
  };

  const saveManagedMemberProfile = async () => {
    if (!selectedDirectoryMember || !canEditSelectedMember) {
      return;
    }

    const normalizedName = memberManagementNameDraft.trim();
    const normalizedPhone = memberManagementPhoneDraft.trim();
    const normalizedVocalRange = memberManagementVocalRangeDraft.trim();

    if (!normalizedName) {
      const message = "Informe um nome válido antes de salvar.";
      setMemberManagementStatus(message);
      toast.error(message);
      return;
    }

    const hasProfileChanges =
      normalizedName !== selectedDirectoryMember.name.trim() ||
      normalizedPhone !== (selectedDirectoryMember.phone || "").trim() ||
      normalizedVocalRange !== (selectedDirectoryMember.vocalRange || "").trim() ||
      Boolean(memberManagementAvatarDataUrl);
    const hasRoleChange = memberManagementRoleDraft !== selectedMemberManagementRole;

    if (!hasProfileChanges && !hasRoleChange) {
      const message = "Altere nome, telefone, timbre, foto ou cargo antes de salvar.";
      setMemberManagementStatus(message);
      toast(message);
      return;
    }

    const saveToastId = toast.loading("Salvando alterações do membro...");
    setMemberManagementSubmitting(true);
    setMemberManagementStatus("Salvando alterações do membro...");

    try {
      let successMessage = "Alterações do membro salvas com sucesso.";

      if (hasProfileChanges) {
        const updatedMemberProfile = await updateManagedMemberBasicProfile(
          selectedDirectoryMember.uid,
          {
            name: normalizedName,
            phone: normalizedPhone,
            vocalRange: normalizedVocalRange,
          },
          selectedDirectoryMember,
          memberManagementAvatarDataUrl ?? undefined,
        );

        setMemberManagementNameDraft(updatedMemberProfile.name || normalizedName);
        setMemberManagementPhoneDraft(updatedMemberProfile.phone || normalizedPhone);
        setMemberManagementVocalRangeDraft(updatedMemberProfile.vocalRange || normalizedVocalRange);
        setMemberManagementAvatarPreview(updatedMemberProfile.avatarDataUrl || managedMemberAvatar);
        successMessage = "Dados do membro atualizados com sucesso.";
      }

      if (hasRoleChange) {
        const responsePayload = await callManagedMemberAction("update-role", {
          targetUid: selectedDirectoryMember.uid,
          nextRoleKey: memberManagementRoleDraft,
        });

        if (typeof responsePayload.target?.roleKey === "string") {
          setMemberManagementRoleDraft(responsePayload.target.roleKey as ManagedMemberRoleKey);
        }

        successMessage = hasProfileChanges
          ? "Dados e cargo do membro atualizados com sucesso."
          : responsePayload.message || "Cargo atualizado com sucesso.";
      }

      await refreshDirectoryMembers(successMessage);
      setMemberManagementAvatarDataUrl(null);
      setMemberManagementAvatarEditorSource("");
      setMemberManagementStatus(successMessage);
      setActiveMemberScreen("details");
      toast.success(successMessage, { id: saveToastId });
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : "Não foi possível atualizar este membro agora.";
      setMemberManagementStatus(message);
      toast.error(message, { id: saveToastId });
    } finally {
      setMemberManagementSubmitting(false);
    }
  };

  const resetManagedMemberPassword = async () => {
    if (!selectedDirectoryMember || !canResetSelectedMemberPassword || !currentUser) {
      return;
    }

    const confirmationMessage = `Redefinir a senha de ${selectedDirectoryMember.name}? Um e-mail de recuperação será enviado para essa conta.`;

    if (!window.confirm(confirmationMessage)) {
      return;
    }

    setMemberManagementSubmitting(true);
    setMemberManagementStatus("Enviando link de redefinição...");

    try {
      const idToken = await currentUser.getIdToken();
      const response = await fetch("/api/auth/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ targetUid: selectedDirectoryMember.uid }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof payload.message === "string"
            ? payload.message
            : "Não foi possível enviar o link de redefinição agora.",
        );
      }

      const message = typeof payload.message === "string"
        ? payload.message
        : `Link de redefinição enviado para ${selectedDirectoryMember.name}.`;

      setMemberManagementStatus(message);
      toast.success(message);
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : "Não foi possível enviar o link de redefinição agora.";
      setMemberManagementStatus(message);
      toast.error(message);
    } finally {
      setMemberManagementSubmitting(false);
    }
  };

  const setManagedMemberDisabledState = async (nextDisabledState: boolean) => {
    if (!selectedDirectoryMember || !canManageSelectedMember) {
      return;
    }

    const confirmationMessage = nextDisabledState
      ? `Desativar a conta de ${selectedDirectoryMember.name}? Ela não conseguirá entrar até ser reativada.`
      : `Reativar a conta de ${selectedDirectoryMember.name}?`;

    if (!window.confirm(confirmationMessage)) {
      return;
    }

    setMemberManagementSubmitting(true);
    setMemberManagementStatus(nextDisabledState ? "Desativando conta..." : "Reativando conta...");

    try {
      const responsePayload = await callManagedMemberAction("set-disabled", {
        targetUid: selectedDirectoryMember.uid,
        disabled: nextDisabledState,
      });

      setMemberManagementDisabled(nextDisabledState);
      const message = responsePayload.message || (nextDisabledState ? "Conta desativada com sucesso." : "Conta reativada com sucesso.");
      setMemberManagementStatus(message);
      toast.success(message);
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : "Não foi possível alterar o estado da conta agora.";
      setMemberManagementStatus(message);
      toast.error(message);
    } finally {
      setMemberManagementSubmitting(false);
    }
  };

  const deleteManagedMemberAccount = async () => {
    if (!selectedDirectoryMember || !canManageSelectedMember) {
      return;
    }

    if (!window.confirm(`Apagar a conta de ${selectedDirectoryMember.name}? Esta ação remove o acesso e o cadastro do diretório.`)) {
      return;
    }

    setMemberManagementSubmitting(true);
    setMemberManagementStatus("Apagando conta...");

    try {
      const responsePayload = await callManagedMemberAction("delete-account", {
        targetUid: selectedDirectoryMember.uid,
      });

      await refreshDirectoryMembers(responsePayload.message || "Conta apagada com sucesso.");
      toast.success(responsePayload.message || "Conta apagada com sucesso.");
      closeMemberDetailPage();
    } catch (error) {
      const message = error instanceof Error
        ? error.message
        : "Não foi possível apagar esta conta agora.";
      setMemberManagementStatus(message);
      toast.error(message);
    } finally {
      setMemberManagementSubmitting(false);
    }
  };

  const handleProfileFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileDraft((current) => ({ ...current, [name]: value }));
  };

  const openProfileAvatarEditor = async (file: File) => {
    const imageDataUrl = await readImageFileAsDataUrl(file);

    setProfileStatus("");
    setProfileAvatarEditorSource(imageDataUrl);
    setActiveProfileScreen("editor");
  };

  const openManagedMemberAvatarEditor = async (file: File) => {
    const imageDataUrl = await readImageFileAsDataUrl(file);

    setMemberManagementStatus("");
    setMemberManagementAvatarEditorSource(imageDataUrl);
    setActiveMemberScreen("avatar-editor");
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

  const handleManagedMemberAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    void openManagedMemberAvatarEditor(file).catch((error) => {
      setMemberManagementStatus(
        error instanceof Error ? error.message : "Não foi possível abrir o editor da foto deste membro agora.",
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
      setActiveProfileScreen((current) => (current === "photo" || current === "editor" ? "details" : current));
      setDirectoryMembers(sortDirectoryMembers(directoryResult.members));
      setDirectoryStatus(directoryResult.statusMessage);
      setProfileStatus("Perfil atualizado com sucesso.");
      toast.success("Perfil atualizado com sucesso.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Não foi possível atualizar seu perfil agora.";
      setProfileStatus(message);
      toast.error(message);
    } finally {
      setProfileSaving(false);
    }
  };

  const removeAgendaEvent = async (eventId: string, title: string) => {
    if (!canRemoveManagedContent) {
      return;
    }

    if (!window.confirm(`Remover o compromisso "${title}" da agenda?`)) {
      return;
    }

    setAgendaStatus("Removendo compromisso...");

    try {
      await deleteAgendaEvent(eventId);
      const nextAgendaEvents = await fetchAgendaContent();
      setAgendaEvents(nextAgendaEvents);
      setAgendaStatus("Compromisso removido da agenda.");
      toast.success("Compromisso removido da agenda.");
    } catch (error) {
      const message = extractOperationMessage(error, "Não foi possível remover esse compromisso agora.");
      setAgendaStatus(message);
      toast.error(message);
    }
  };

  const removeHomePost = async (post: FeedPost) => {
    if (!canRemoveManagedContent) {
      return;
    }

    if (!window.confirm(`Remover a publicação "${post.title}" e toda a mídia vinculada?`)) {
      return;
    }

    setHomeStatus("Removendo publicação...");

    try {
      const storagePaths = post.mediaItems.map((mediaItem) => mediaItem.path);

      if (storagePaths.length > 0) {
        await deleteStorageObjects(storagePaths);
      }

      await deleteHomePost(post.id);
      const nextPosts = await fetchHomePostsContent();
      setPosts(nextPosts);
      setActivePostId("");
      setHomeStatus("Publicação removida do mural.");
      toast.success("Publicação removida do mural.");
    } catch (error) {
      const message = extractOperationMessage(error, "Não foi possível remover essa publicação agora.");
      setHomeStatus(message);
      toast.error(message);
    }
  };

  const removeSong = async (song: SongLibraryItem) => {
    if (!canRemoveManagedContent) {
      return;
    }

    if (!window.confirm(`Remover a música "${song.title}" e todos os arquivos enviados?`)) {
      return;
    }

    setSongStatus("Removendo música e arquivos...");

    try {
      const storagePaths = [
        ...song.voiceAssets.map((asset) => asset.path),
        song.lyricFile?.path || "",
        song.scoreFile?.path || "",
      ].filter(Boolean);

      if (storagePaths.length > 0) {
        await deleteStorageObjects(storagePaths);
      }

      await deleteSongLibraryItem(song.id);
      const nextSongs = await fetchSongLibraryContent();
      setSongs(nextSongs);
      setActiveSongId("");
      setSongStatus("Música removida da biblioteca.");
      toast.success("Música removida da biblioteca.");
    } catch (error) {
      const message = extractOperationMessage(error, "Não foi possível remover essa música agora.");
      setSongStatus(message);
      toast.error(message);
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
      toast.success("Telefone copiado.");
    } catch {
      setDirectoryStatus("Não foi possível copiar o telefone agora.");
      toast.error("Não foi possível copiar o telefone agora.");
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
                onClick={openProfilePage}
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

                  {post.mediaItems.length > 0 ? renderPostMediaGallery(post.mediaItems, post.title) : post.imageUrl ? (
                    <div className="home-feed-media">
                      <img src={post.imageUrl} alt={post.title} />
                    </div>
                  ) : null}

                  <div className="home-post-author">
                    <span>{post.author}</span>
                    <small>{post.role}</small>
                  </div>

                  <div className="home-post-actions">
                    <div className="home-post-inline-actions">
                      <button type="button" className="home-secondary-action compact" onClick={(event) => {
                        event.stopPropagation();
                        openPostDetail(post.id);
                      }}>
                        <FiArrowLeft size={15} />
                        Abrir publicação
                      </button>
                      {canRemoveManagedContent ? (
                        <button
                          type="button"
                          className="home-secondary-action compact danger"
                          onClick={(event) => {
                            event.stopPropagation();
                            void removeHomePost(post);
                          }}
                        >
                          <FiTrash2 size={15} />
                          Remover
                        </button>
                      ) : null}
                    </div>
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
                    <h3>Músicas por voz, letra e partitura</h3>
                    <p>O repertório agora fica organizado no Firebase com arquivos por voz, letra em PDF/imagem, partitura opcional e remoção controlada pela liderança.</p>
                  </div>

                  <div className="home-song-drive-stats">
                    <span className="home-feed-count-pill">{filteredSongs.length} música(s)</span>
                    <span className="home-feed-count-pill">{formatStorageBytes(sharedStorageUsedBytes)} / {formatStorageBytes(MAX_SHARED_STORAGE_BYTES)}</span>
                  </div>
                </div>

                <div className="home-storage-usage-card">
                  <div>
                    <strong>Storage compartilhado</strong>
                    <p>
                      O mural e a biblioteca musical usam um limite monitorado de 5 GB para evitar estouro de mídia em imagens, vídeos, áudios e documentos.
                    </p>
                  </div>

                  <div className="home-storage-meter" aria-hidden="true">
                    <span style={{ width: `${Math.min(100, (sharedStorageUsedBytes / MAX_SHARED_STORAGE_BYTES) * 100)}%` }} />
                  </div>

                  <small>
                    {formatStorageBytes(sharedStorageUsedBytes)} usados. {currentVoicePart ? `Seu timbre atual: ${currentVoicePart}.` : "Defina seu timbre no perfil para abrir apenas o material certo da sua voz."}
                  </small>
                </div>

                {songsLoading ? (
                  <div className="home-song-library-empty">
                    <GiMusicalNotes size={34} />
                    <strong>Carregando biblioteca musical</strong>
                    <p>Buscando arquivos e metadados salvos no Firestore.</p>
                  </div>
                ) : filteredSongs.length > 0 ? (
                  <div className="home-song-list" role="list">
                    {filteredSongs.map((song) => (
                      <article
                        key={song.id}
                        className="home-song-row"
                        role="button"
                        tabIndex={0}
                        onClick={() => openSongDetail(song.id)}
                        onKeyDown={(event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            openSongDetail(song.id);
                          }
                        }}
                      >
                        <div className="home-song-row-icon">
                          <GiMusicalScore size={22} />
                        </div>

                        <div className="home-song-row-main">
                          <strong>{song.title}</strong>
                          <p>{song.artist || "Artista não informado"}</p>
                          <div className="home-song-row-meta">
                            <span>{song.category}</span>
                            <span>{song.tone ? `Tom ${song.tone}` : "Tom livre"}</span>
                            <span>{song.voiceAssets.length} voz(es)</span>
                            <span>{song.lyricFile ? "Letra anexada" : "Sem letra"}</span>
                            <span>{song.scoreFile ? "Partitura pronta" : "Sem partitura"}</span>
                          </div>
                        </div>

                        <div className="home-song-row-actions" onClick={(event) => event.stopPropagation()}>
                          {canRemoveManagedContent ? (
                            <button
                              type="button"
                              className="home-secondary-action compact danger"
                              onClick={() => void removeSong(song)}
                            >
                              <FiTrash2 size={15} />
                              Remover
                            </button>
                          ) : null}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="home-song-library-empty">
                    <GiMusicalNotes size={34} />
                    <strong>Biblioteca pronta para receber músicas</strong>
                    <p>Use o botão + para enviar áudios por voz, letra em PDF/imagem, partitura opcional e organizar o repertório completo do vocal.</p>
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
                        onClick={() => openMemberDetailPage(member.uid)}
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
          !activePost && !activeAgendaDate && !activeSong && !activeProfileScreen && !activeMemberScreen ? (
          <button className="home-fab-action" type="button" aria-label={activeTab === "agenda" ? "Criar evento" : activeTab === "songs" ? "Adicionar música" : "Criar publicação"} onClick={openComposer}>
            <FiPlus size={24} />
          </button>
          ) : null
        ) : null}

        {!activePost && !activeAgendaDate && !activeSong && !activeProfileScreen && !activeMemberScreen ? <nav className="home-bottom-nav" aria-label="Navegação principal">
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

        <input
          ref={profileAvatarInputRef}
          className="hidden-input"
          type="file"
          accept="image/*"
          onChange={handleProfileAvatarChange}
        />

        <input
          ref={memberAvatarInputRef}
          className="hidden-input"
          type="file"
          accept="image/*"
          onChange={handleManagedMemberAvatarChange}
        />

        <AvatarEditorModal
          open={activeProfileScreen === "editor"}
          layout="page"
          backLabel="Voltar para a foto"
          imageSrc={profileAvatarEditorSource}
          title="Ajuste sua foto de perfil"
          description="Corte, aproxime, afaste e ajuste a aparência antes de atualizar o seu perfil."
          onClose={() => {
            setActiveProfileScreen("photo");
            setProfileAvatarEditorSource("");
          }}
          onApply={async (dataUrl) => {
            setProfileAvatarPreview(dataUrl);
            setProfileAvatarDataUrl(dataUrl);
            setActiveProfileScreen("photo");
            setProfileAvatarEditorSource("");
            setProfileStatus("Nova foto pronta. Salve o perfil para publicar a alteração.");
          }}
        />

        <AvatarEditorModal
          open={activeMemberScreen === "avatar-editor"}
          layout="page"
          backLabel="Voltar à edição"
          imageSrc={memberManagementAvatarEditorSource}
          title="Ajuste a foto do membro"
          description="Corte, aproxime, afaste e ajuste a imagem antes de salvar as alterações deste integrante."
          onClose={() => {
            setActiveMemberScreen("editor");
            setMemberManagementAvatarEditorSource("");
          }}
          onApply={async (dataUrl) => {
            setMemberManagementAvatarPreview(dataUrl);
            setMemberManagementAvatarDataUrl(dataUrl);
            setActiveMemberScreen("editor");
            setMemberManagementAvatarEditorSource("");
            setMemberManagementStatus("Nova foto pronta. Salve os dados do membro para publicar a alteração.");
            toast.success("Nova foto pronta para salvar.");
          }}
        />

        {activeProfileScreen === "details" ? (
          <section className="home-post-screen home-profile-screen" role="dialog" aria-modal="true">
            <div className="home-post-screen-header">
              <button type="button" className="home-secondary-action compact" onClick={closeProfileFlow}>
                <FiArrowLeft size={16} />
                Voltar ao painel
              </button>
              <span className="home-role-chip">Meu perfil</span>
            </div>

            <article className="home-post-detail-card home-profile-screen-card">
              <div className="home-profile-screen-hero">
                <div>
                  <p className="home-card-eyebrow">Central de perfil</p>
                  <h2>{resolvedName}</h2>
                  <p>Organizamos cadastro, foto e edição fina em etapas separadas para deixar tudo mais claro no celular e no desktop.</p>
                </div>

                <button type="button" className="home-profile-hero-avatar" onClick={openProfilePhotoPage} aria-label="Abrir gestão da foto de perfil">
                  {profileAvatar ? <img src={profileAvatar} alt={resolvedName} /> : <span>{getInitials(resolvedName)}</span>}
                  <span className="home-profile-hero-avatar-badge">{hasPendingProfileAvatar ? "Nova foto pronta" : "Gerenciar foto"}</span>
                </button>
              </div>

              <section className="home-profile-page-grid">
                <article className="home-profile-card home-profile-summary-card home-profile-summary-card-page">
                  <div className="home-card-topline compact">
                    <span>Visão geral</span>
                    <strong>{roleLabel}</strong>
                  </div>

                  <p>Atualize seus dados com mais foco e deixe a foto em uma área separada, com edição própria para enquadramento.</p>

                  <div className="home-chip-row">
                    {resolvedVocalRange ? <span className="home-chip">Timbre {resolvedVocalRange}</span> : null}
                    <span className="home-chip">{roleLabel}</span>
                    {hasPendingProfileAvatar ? <span className="home-chip">Foto pendente de salvar</span> : null}
                  </div>

                  <div className="home-profile-page-actions">
                    <button type="button" className="home-secondary-action" onClick={openProfilePhotoPage}>
                      <FiCamera size={16} />
                      Gerenciar foto
                    </button>
                    <button type="button" className="home-secondary-action" onClick={() => setShowLogoutModal(true)}>
                      <HiOutlineArrowRightOnRectangle size={16} />
                      Sair
                    </button>
                  </div>

                  {profileStatus ? <p className="home-inline-status">{profileStatus}</p> : null}
                </article>

                <article className="home-profile-card home-profile-edit-card home-profile-edit-page-card">
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
                    <button type="button" className="home-primary-action" onClick={() => void saveProfile()} disabled={profileSaving}>
                      {profileSaving ? "Salvando..." : "Salvar alterações"}
                    </button>
                  </div>
                </article>
              </section>
            </article>
          </section>
        ) : null}

        {activeProfileScreen === "photo" ? (
          <section className="home-post-screen home-profile-screen" role="dialog" aria-modal="true">
            <div className="home-post-screen-header">
              <button type="button" className="home-secondary-action compact" onClick={() => setActiveProfileScreen("details")}>
                <FiArrowLeft size={16} />
                Voltar ao perfil
              </button>
              <span className="home-role-chip">Foto do perfil</span>
            </div>

            <article className="home-post-detail-card home-profile-photo-card">
              <div className="home-profile-photo-hero">
                <div>
                  <p className="home-card-eyebrow">Foto do perfil</p>
                  <h2>Imagem, enquadramento e publicação</h2>
                  <p>Escolha uma foto, entre no editor para posicionar melhor o rosto e só depois confirme a alteração no seu perfil.</p>
                </div>

                <div className="home-chip-row">
                  <span className="home-chip">{hasPendingProfileAvatar ? "Prévia pronta" : "Foto atual"}</span>
                </div>
              </div>

              <section className="home-profile-photo-grid">
                <article className="home-profile-photo-preview-card">
                  <div className="home-profile-photo-preview">
                    {profileAvatar ? <img src={profileAvatar} alt={resolvedName} /> : <span>{getInitials(resolvedName)}</span>}
                  </div>
                  <strong>{hasPendingProfileAvatar ? "Prévia pronta para salvar" : "Foto em uso no momento"}</strong>
                  <p>{hasPendingProfileAvatar ? "Sua nova foto já foi ajustada. Salve para publicar no perfil e no diretório interno." : "Escolha uma imagem para abrir o editor e montar a versão final da sua foto."}</p>
                </article>

                <article className="home-profile-photo-actions-card">
                  <div className="home-profile-photo-step-list">
                    <div className="home-profile-photo-step">
                      <span>1</span>
                      <div>
                        <strong>Escolha uma imagem</strong>
                        <p>Abra a galeria ou os arquivos do aparelho para selecionar a foto base.</p>
                      </div>
                    </div>

                    <div className="home-profile-photo-step">
                      <span>2</span>
                      <div>
                        <strong>Ajuste no editor</strong>
                        <p>Posicione, aproxime, gire e refine a imagem em uma tela exclusiva.</p>
                      </div>
                    </div>

                    <div className="home-profile-photo-step">
                      <span>3</span>
                      <div>
                        <strong>Publique no perfil</strong>
                        <p>Depois do ajuste final, salve a alteração para atualizar o perfil e o diretório.</p>
                      </div>
                    </div>
                  </div>

                  <div className="home-profile-page-actions">
                    <button type="button" className="home-primary-action" onClick={openProfileAvatarPicker} disabled={profileSaving}>
                      <FiCamera size={16} />
                      Escolher imagem
                    </button>
                    <button type="button" className="home-secondary-action" onClick={reopenProfileAvatarEditor} disabled={!profileAvatar || profileSaving}>
                      <FiEye size={16} />
                      Reabrir editor
                    </button>
                    <button type="button" className="home-secondary-action" onClick={() => void saveProfile()} disabled={!hasPendingProfileAvatar || profileSaving}>
                      <FiUpload size={16} />
                      {profileSaving ? "Salvando..." : "Salvar foto"}
                    </button>
                    <button type="button" className="home-secondary-action danger" onClick={discardPendingProfileAvatar} disabled={!hasPendingProfileAvatar || profileSaving}>
                      <FiX size={16} />
                      Descartar nova foto
                    </button>
                  </div>

                  {profileStatus ? <p className="home-inline-status">{profileStatus}</p> : null}
                </article>
              </section>

              <p className="home-profile-photo-note">Dica: use uma imagem nítida, com o rosto centralizado e fundo simples. Isso melhora leitura visual no diretório e no topo do app.</p>
            </article>
          </section>
        ) : null}

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

                    {canRemoveManagedContent ? (
                      <div className="home-detail-danger-row">
                        <button
                          type="button"
                          className="home-secondary-action compact danger"
                          onClick={() => void removeAgendaEvent(event.id, event.title)}
                        >
                          <FiTrash2 size={15} />
                          Remover compromisso
                        </button>
                      </div>
                    ) : null}

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

              {activePost.mediaItems.length > 0 ? renderPostMediaGallery(activePost.mediaItems, activePost.title, true) : activePost.imageUrl ? (
                <div className="home-feed-media home-post-detail-media">
                  <img src={activePost.imageUrl} alt={activePost.title} />
                </div>
              ) : null}

              <div className="home-post-author">
                <span>{activePost.author}</span>
                <small>{activePost.role}</small>
              </div>

              <div className="home-post-detail-actions">
                <div className="home-post-inline-actions">
                  <button
                    type="button"
                    className={`home-post-like-btn${activePost.likedByUids.includes(currentUid) ? " is-active" : ""}`}
                    onClick={() => void togglePostLikeAction(activePost.id)}
                  >
                    {activePost.likedByUids.includes(currentUid) ? <FaHeart size={18} /> : <FiHeart size={18} />}
                    <span>{activePost.likedByUids.length} curtida(s)</span>
                  </button>
                  {canRemoveManagedContent ? (
                    <button
                      type="button"
                      className="home-secondary-action danger"
                      onClick={() => void removeHomePost(activePost)}
                    >
                      <FiTrash2 size={15} />
                      Remover publicação
                    </button>
                  ) : null}
                </div>
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

      {showComposer ? (
        <div className="home-modal-backdrop" role="presentation" onClick={closeComposer}>
          <div className="home-modal-card home-modal-card-scrollable" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <div className="home-modal-header">
              <div>
                <p className="home-card-eyebrow">Criação rápida</p>
                <h3>{composerMode === "agenda" ? "Novo evento da agenda" : composerMode === "song" ? "Nova música do repertório" : "Nova publicação do mural"}</h3>
              </div>
              <button type="button" className="home-modal-close" onClick={closeComposer}>
                Fechar
              </button>
            </div>

            <div className="home-modal-body">
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
                  <div className="home-upload-panel">
                    <div className="home-upload-toolbar">
                      <label className="home-secondary-action compact home-inline-label-btn" htmlFor="home-composer-media-upload">
                        <FiUpload size={15} />
                        Enviar imagens ou vídeos
                      </label>
                      <input id="home-composer-media-upload" type="file" accept="image/*,video/*" multiple hidden onChange={handlePostMediaFilesChange} />
                      {postMediaPreviews.length > 0 ? (
                        <button type="button" className="home-secondary-action compact" onClick={clearPostMediaSelection}>
                          Limpar mídia
                        </button>
                      ) : null}
                    </div>

                    {postMediaPreviews.length > 0 ? (
                      <div className="home-composer-media-grid">
                        {postMediaPreviews.map((preview) => (
                          <article key={preview.id} className="home-composer-media-card">
                            <div className={`home-composer-media-shell${preview.kind === "video" ? " is-video" : ""}`}>
                              {preview.kind === "video" ? <video src={preview.previewUrl} muted playsInline /> : <img src={preview.previewUrl} alt={preview.name} />}
                            </div>
                            <strong>{preview.name}</strong>
                            <small>{formatStorageBytes(preview.sizeBytes)}</small>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <p className="home-inline-status">Sem mídia selecionada. Você pode publicar só texto ou combinar com imagens e vídeos.</p>
                    )}
                  </div>
                </div>
              ) : composerMode === "song" ? (
                <div className="home-modal-form">
                  <div className="home-pill-row">
                    {(["Clássicos", "Culto", "Ensaio", "Especial", "Outra"] as const).map((option) => (
                      <button key={option} type="button" className={`home-pill-btn${composerDraft.songCategory === option ? " is-active" : ""}`} onClick={() => setComposerDraft((current) => ({ ...current, songCategory: option }))}>
                        {option}
                      </button>
                    ))}
                  </div>
                  {composerDraft.songCategory === "Outra" ? (
                    <input name="customSongCategory" value={composerDraft.customSongCategory} onChange={handleComposerFieldChange} placeholder="Digite a categoria personalizada" />
                  ) : null}
                  <input name="title" value={composerDraft.title} onChange={handleComposerFieldChange} placeholder="Nome da música" />
                  <input name="artist" value={composerDraft.artist} onChange={handleComposerFieldChange} placeholder="Artista ou ministério" />
                  <input name="tone" value={composerDraft.tone} onChange={handleComposerFieldChange} placeholder="Tom principal ou referência" />
                  <input name="sourceUrl" value={composerDraft.sourceUrl} onChange={handleComposerFieldChange} placeholder="Link externo de apoio (opcional)" />
                  <textarea name="content" value={composerDraft.content} onChange={handleComposerFieldChange} placeholder="Observações do maestro, estrutura, intro, modulação ou notas para a equipe" rows={5} />
                  <section className="home-upload-panel">
                    <div className="home-upload-section-header">
                      <strong>Áudio por voz</strong>
                      <p>Envie um arquivo para cada naipe e, se quiser, uma faixa geral. No celular, o seletor pode usar o app Arquivos ou o provedor que o sistema disponibilizar.</p>
                    </div>
                    <p className="home-upload-provider-note">Compatível com arquivos locais e provedores do sistema disponíveis no seletor do aparelho.</p>
                    {songPickerDebug ? <p className="home-inline-status">{songPickerDebug}</p> : null}
                    <div className="home-voice-upload-grid">
                      {SONG_VOICE_PARTS.map((voiceType) => {
                        const inputId = `song-voice-${normalizeComparableText(voiceType).replace(/[^a-z0-9]+/g, "-")}`;
                        const selectedFile = songVoiceFiles[voiceType];

                        return (
                          <article key={voiceType} className="home-upload-field-card">
                            <div>
                              <strong>{voiceType}</strong>
                              <small>{selectedFile ? `${selectedFile.name} • ${formatStorageBytes(selectedFile.size)}` : "Nenhum áudio enviado."}</small>
                            </div>
                            <div className="home-upload-field-actions">
                              <button type="button" className="home-secondary-action compact home-inline-label-btn" onClick={() => openSongVoiceLocalPicker(voiceType)}>
                                <FiUpload size={15} />
                                Arquivo
                              </button>
                              <input
                                id={inputId}
                                ref={(element) => {
                                  songVoiceInputRefs.current[voiceType] = element;
                                }}
                                className="hidden-input"
                                type="file"
                                accept="audio/*,.mp3,.wav,.m4a,.aac,.ogg,.oga,.opus,.flac,.weba,.mp4,.mpeg,.mpga,.3gp,.caf,.aif,.aiff,.amr"
                                onChange={(event) => handleSongVoiceFileChange(voiceType, event)}
                              />
                              {selectedFile ? (
                                <button type="button" className="home-secondary-action compact" onClick={() => setSongVoiceFiles((current) => ({ ...current, [voiceType]: null }))}>
                                  Remover
                                </button>
                              ) : null}
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </section>

                  <section className="home-upload-panel">
                    <div className="home-upload-section-header">
                      <strong>Letra e partitura</strong>
                      <p>Letra em PDF ou imagem. A partitura é opcional e também pode ser PDF ou imagem escolhidas pelo seletor nativo do aparelho.</p>
                    </div>
                    <div className="home-document-upload-grid">
                      <article className="home-upload-field-card">
                        <div>
                          <strong>Letra da música</strong>
                          <small>{songLyricFile ? `${songLyricFile.name} • ${formatStorageBytes(songLyricFile.size)}` : "Nenhuma letra enviada."}</small>
                        </div>
                        <div className="home-upload-field-actions">
                          <button type="button" className="home-secondary-action compact home-inline-label-btn" onClick={() => openSongAttachmentLocalPicker("lyrics")}>
                            <FiUpload size={15} />
                            Arquivo
                          </button>
                          <input
                            id="song-lyrics-upload"
                            ref={songLyricsInputRef}
                            className="hidden-input"
                            type="file"
                            accept="application/pdf,image/*,.pdf,.png,.jpg,.jpeg,.webp,.gif,.bmp,.heic,.heif"
                            onChange={(event) => handleSongAttachmentChange("lyrics", event)}
                          />
                          {songLyricFile ? (
                            <button type="button" className="home-secondary-action compact" onClick={() => setSongLyricFile(null)}>
                              Remover
                            </button>
                          ) : null}
                        </div>
                      </article>

                      <article className="home-upload-field-card">
                        <div>
                          <strong>Partitura opcional</strong>
                          <small>{songScoreFile ? `${songScoreFile.name} • ${formatStorageBytes(songScoreFile.size)}` : "Nenhuma partitura enviada."}</small>
                        </div>
                        <div className="home-upload-field-actions">
                          <button type="button" className="home-secondary-action compact home-inline-label-btn" onClick={() => openSongAttachmentLocalPicker("score")}>
                            <FiUpload size={15} />
                            Arquivo
                          </button>
                          <input
                            id="song-score-upload"
                            ref={songScoreInputRef}
                            className="hidden-input"
                            type="file"
                            accept="application/pdf,image/*,.pdf,.png,.jpg,.jpeg,.webp,.gif,.bmp,.heic,.heif"
                            onChange={(event) => handleSongAttachmentChange("score", event)}
                          />
                          {songScoreFile ? (
                            <button type="button" className="home-secondary-action compact" onClick={() => setSongScoreFile(null)}>
                              Remover
                            </button>
                          ) : null}
                        </div>
                      </article>
                    </div>
                  </section>
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
            </div>

            <div className="home-modal-actions home-modal-footer">
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
        <section className="home-post-screen home-song-screen" role="dialog" aria-modal="true">
          <div className="home-post-screen-header">
            <button type="button" className="home-secondary-action compact" onClick={closeSongDetail}>
              <FiArrowLeft size={16} />
              Voltar à biblioteca
            </button>
            <span className="home-role-chip">Ensaiador interno</span>
          </div>

          <article className="home-post-detail-card home-song-screen-card">
            <div className="home-song-screen-hero">
              <div>
                <p className="home-card-eyebrow">Biblioteca do vocal</p>
                <h2>{activeSong.title}</h2>
                <p>
                  Escolha a faixa do seu timbre, acompanhe a letra e visualize a partitura sem sair do app.
                </p>
              </div>

              <div className="home-song-detail-meta">
                <span>{activeSong.category}</span>
                <span>{activeSong.artist || "Artista não informado"}</span>
                <span>{activeSong.tone ? `Tom ${activeSong.tone}` : "Tom livre"}</span>
                <span>{activeSong.voiceAssets.length} faixa(s)</span>
              </div>

              {activeSong.notes ? <p className="home-song-screen-note">{activeSong.notes}</p> : null}
            </div>

            <div className="home-song-screen-grid">
              <div className="home-song-screen-main">
                <section className="home-song-panel">
                  <div className="home-song-panel-header">
                    <div>
                      <strong>{canViewAllSongTracks ? "Faixas disponíveis" : currentVoicePart ? `Faixas para ${currentVoicePart}` : "Faixa geral"}</strong>
                      <p>
                        {canViewAllSongTracks
                          ? "Administração, desenvolvedor, maestro e secretário visualizam todas as faixas internas."
                          : "Membros visualizam a faixa do próprio timbre e a faixa geral, quando ela existir."}
                      </p>
                    </div>
                  </div>

                  {visibleSongVoiceAssets.length > 0 ? (
                    <div className="home-song-track-list" role="list">
                      {visibleSongVoiceAssets.map((asset) => (
                        <button
                          key={asset.path}
                          type="button"
                          className={`home-song-track-chip${selectedSongVoiceAsset?.path === asset.path ? " is-active" : ""}`}
                          onClick={() => setSelectedSongAssetPath(asset.path)}
                        >
                          <strong>{asset.voiceType}</strong>
                          <small>{formatStorageBytes(asset.sizeBytes)}</small>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="home-song-detail-empty">
                      {currentVoicePart
                        ? "Ainda não existe faixa enviada para o seu timbre nem uma faixa geral nesta música."
                        : "Ainda não existe faixa geral disponível para esta música."}
                    </p>
                  )}

                  <SongAudioPlayer
                    sourceUrl={selectedSongVoiceUrl}
                    title={activeSong.title}
                    subtitle={selectedSongVoiceAsset ? `${selectedSongVoiceAsset.voiceType} • ${formatStorageBytes(selectedSongVoiceAsset.sizeBytes)}` : "Nenhuma faixa selecionada"}
                    emptyMessage="Esta música ainda não tem faixa disponível para reprodução interna."
                  />
                </section>
              </div>

              <div className="home-song-screen-side">
                <section className="home-song-panel">
                  <div className="home-song-panel-header">
                    <div>
                      <strong>Material de apoio</strong>
                      <p>Letra e partitura ficam disponíveis para leitura interna, sem abrir novas abas.</p>
                    </div>
                  </div>

                  <div className="home-song-document-tabs">
                    <button
                      type="button"
                      className={`home-pill-btn${selectedSongDocumentKind === "lyrics" ? " is-active" : ""}`}
                      onClick={() => setSelectedSongDocumentKind("lyrics")}
                      disabled={!availableSongDocuments.lyrics}
                    >
                      Letra
                    </button>
                    <button
                      type="button"
                      className={`home-pill-btn${selectedSongDocumentKind === "score" ? " is-active" : ""}`}
                      onClick={() => setSelectedSongDocumentKind("score")}
                      disabled={!availableSongDocuments.score}
                    >
                      Partitura
                    </button>
                  </div>

                  <div className="home-song-document-preview-header">
                    <strong>Prévia interna</strong>
                    {selectedSongDocumentUrl ? (
                      <button
                        type="button"
                        className="home-secondary-action compact"
                        onClick={() => setIsSongDocumentExpanded(true)}
                      >
                        <FiEye size={15} />
                        Expandir
                      </button>
                    ) : null}
                  </div>

                  <div className="home-song-document-preview">
                    <SongDocumentViewer
                      fileUrl={selectedSongDocumentUrl}
                      contentType={selectedSongDocument?.contentType || ""}
                      title={selectedSongDocumentKind === "lyrics" ? "Letra" : "Partitura"}
                      fileName={selectedSongDocument?.name || ""}
                      displayMode="preview"
                      emptyMessage={
                        selectedSongDocumentKind === "lyrics"
                          ? "Nenhuma letra foi anexada para esta música."
                          : "Nenhuma partitura foi anexada para esta música."
                      }
                    />
                  </div>
                  {selectedSongDocumentUrl ? <p className="home-song-document-hint">A prévia continua visível aqui; use o botão Expandir quando quiser abrir em tela cheia.</p> : null}

                  <p className="home-song-detail-footnote">
                    Conteúdo liberado apenas para leitura e reprodução dentro do app. Adicionada por {activeSong.addedBy}.
                  </p>
                  {activeSong.referenceUrl ? <p className="home-song-reference-note">Existe uma referência externa cadastrada para esta música, mas a experiência principal foi mantida aqui dentro.</p> : null}
                  {canRemoveManagedContent ? (
                    <button type="button" className="home-secondary-action danger" onClick={() => void removeSong(activeSong)}>
                      <FiTrash2 size={15} />
                      Remover música
                    </button>
                  ) : null}
                </section>
              </div>
            </div>
          </article>
        </section>
      ) : null}

      {activeSong && isSongDocumentExpanded && selectedSongDocumentUrl ? (
        <section className="home-post-screen home-song-document-screen" role="dialog" aria-modal="true">
          <div className="home-post-screen-header">
            <button type="button" className="home-secondary-action compact" onClick={() => setIsSongDocumentExpanded(false)}>
              <FiArrowLeft size={16} />
              Voltar à música
            </button>
            <span className="home-role-chip">{selectedSongDocumentKind === "lyrics" ? "Letra expandida" : "Partitura expandida"}</span>
          </div>

          <article className="home-post-detail-card home-song-document-expanded-card">
            <div className="home-song-screen-hero">
              <div>
                <p className="home-card-eyebrow">Visualização ampliada</p>
                <h2>{selectedSongDocumentKind === "lyrics" ? `Letra • ${activeSong.title}` : `Partitura • ${activeSong.title}`}</h2>
                <p>Use esta tela para acompanhar melhor durante o ensaio e volte quando quiser.</p>
              </div>

              <div className="home-song-document-tabs">
                <button
                  type="button"
                  className={`home-pill-btn${selectedSongDocumentKind === "lyrics" ? " is-active" : ""}`}
                  onClick={() => setSelectedSongDocumentKind("lyrics")}
                  disabled={!availableSongDocuments.lyrics}
                >
                  Letra
                </button>
                <button
                  type="button"
                  className={`home-pill-btn${selectedSongDocumentKind === "score" ? " is-active" : ""}`}
                  onClick={() => setSelectedSongDocumentKind("score")}
                  disabled={!availableSongDocuments.score}
                >
                  Partitura
                </button>
              </div>
            </div>

            <SongDocumentViewer
              fileUrl={selectedSongDocumentUrl}
              contentType={selectedSongDocument?.contentType || ""}
              title={selectedSongDocumentKind === "lyrics" ? "Letra" : "Partitura"}
              fileName={selectedSongDocument?.name || ""}
              displayMode="expanded"
              emptyMessage={
                selectedSongDocumentKind === "lyrics"
                  ? "Nenhuma letra foi anexada para esta música."
                  : "Nenhuma partitura foi anexada para esta música."
              }
            />
          </article>
        </section>
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

      {activeMemberScreen === "details" && selectedDirectoryMember ? (
        <section className="home-post-screen home-member-screen" role="dialog" aria-modal="true">
          <div className="home-post-screen-header">
            <button type="button" className="home-secondary-action compact" onClick={closeMemberDetailPage}>
              <FiArrowLeft size={16} />
              Voltar aos membros
            </button>

            <div className="home-member-screen-header-actions">
              {canOpenSelectedMemberEditor ? (
                <button
                  type="button"
                  className="home-secondary-action compact"
                  onClick={openManagedMemberEditorPage}
                >
                  Editar membro
                </button>
              ) : null}
              {canResetSelectedMemberPassword ? (
                <button
                  type="button"
                  className="home-secondary-action compact"
                  onClick={() => void resetManagedMemberPassword()}
                  disabled={memberManagementLoading || memberManagementSubmitting}
                >
                  Redefinir senha
                </button>
              ) : null}
              <span className="home-role-chip">Contato interno</span>
            </div>
          </div>

          <article className="home-post-detail-card home-member-screen-card">
            <div className="home-member-screen-hero">
              <div className="home-member-screen-identity">
                <div className="home-directory-avatar large home-member-screen-avatar">
                  {selectedDirectoryMember.avatarDataUrl ? <img src={selectedDirectoryMember.avatarDataUrl} alt={selectedDirectoryMember.name} /> : <span>{getInitials(selectedDirectoryMember.name)}</span>}
                </div>

                <div>
                  <p className="home-card-eyebrow">Contato interno</p>
                  <h2>{selectedDirectoryMember.name}</h2>
                  <p className={`home-directory-role ${resolveMemberRoleVisual(selectedDirectoryMember).accentClassName}`}>
                    {(() => {
                      const RoleIcon = resolveMemberRoleVisual(selectedDirectoryMember).icon;
                      return <RoleIcon size={15} />;
                    })()}
                    {resolveDirectoryRoleLabel(selectedDirectoryMember)}
                  </p>
                </div>
              </div>

              <div className="home-chip-row">
                {selectedDirectoryMember.vocalRange ? <span className="home-chip">Timbre {selectedDirectoryMember.vocalRange}</span> : null}
                {selectedDirectoryMember.uid === currentUid ? <span className="home-chip">Seu perfil</span> : null}
                {memberManagementEmail ? <span className="home-chip">{memberManagementEmail}</span> : null}
                <span className="home-chip">{memberManagementDisabled ? "Conta desativada" : memberManagementAuthExists ? "Conta ativa" : "Sem login ativo"}</span>
              </div>
            </div>

            <div className="home-member-screen-grid">
              <section className="home-member-panel">
                <div className="home-member-panel-header">
                  <strong>Contato rápido</strong>
                  <p>Somente dados úteis para organização do ministério aparecem aqui.</p>
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
              </section>
            </div>
          </article>
        </section>
      ) : null}

      {activeMemberScreen === "editor" && selectedDirectoryMember ? (
        <section className="home-post-screen home-member-screen" role="dialog" aria-modal="true">
          <div className="home-post-screen-header">
            <button type="button" className="home-secondary-action compact" onClick={() => setActiveMemberScreen("details")}>
              <FiArrowLeft size={16} />
              Voltar ao contato
            </button>
            <span className="home-role-chip">Editor do membro</span>
          </div>

          <article className="home-post-detail-card home-member-screen-card">
            <div className="home-member-screen-hero">
              <div className="home-member-screen-identity">
                <div className="home-directory-avatar large home-member-screen-avatar">
                  {managedMemberAvatar ? <img src={managedMemberAvatar} alt={selectedDirectoryMember.name} /> : <span>{getInitials(selectedDirectoryMember.name)}</span>}
                </div>

                <div>
                  <p className="home-card-eyebrow">Edição dedicada</p>
                  <h2>{selectedDirectoryMember.name}</h2>
                  <p>Atualize dados, foto e cargo nesta tela única e volte ao contato interno assim que salvar.</p>
                </div>
              </div>

              <div className="home-chip-row">
                {memberManagementEmail ? <span className="home-chip">{memberManagementEmail}</span> : null}
                <span className="home-chip">{memberManagementDisabled ? "Conta desativada" : memberManagementAuthExists ? "Conta ativa" : "Sem login ativo"}</span>
                {hasPendingManagedMemberAvatar ? <span className="home-chip">Nova foto pronta</span> : null}
              </div>
            </div>

            <div className="home-member-management-card home-member-management-card-page">
              <div className="home-member-management-grid">
                <div className="home-member-management-avatar-block">
                  <div className="home-member-management-avatar-preview">
                    {managedMemberAvatar ? <img src={managedMemberAvatar} alt={selectedDirectoryMember.name} /> : <span>{getInitials(selectedDirectoryMember.name)}</span>}
                  </div>

                  <div className="home-member-management-avatar-copy">
                    <strong>{hasPendingManagedMemberAvatar ? "Nova foto pronta" : "Foto do membro"}</strong>
                    <p>Escolha uma imagem, ajuste no editor e finalize tudo com um único salvamento.</p>
                  </div>

                  <div className="home-member-management-avatar-actions">
                    <button
                      type="button"
                      className="home-secondary-action compact"
                      onClick={() => memberAvatarInputRef.current?.click()}
                      disabled={memberManagementLoading || memberManagementSubmitting || !canEditSelectedMember}
                    >
                      <FiCamera size={15} />
                      Escolher foto
                    </button>

                    <button
                      type="button"
                      className="home-secondary-action compact"
                      onClick={() => {
                        const source = memberManagementAvatarDataUrl || memberManagementAvatarPreview || selectedDirectoryMember.avatarDataUrl || "";

                        if (!source) {
                          const message = "Escolha uma imagem antes de abrir o editor da foto.";
                          setMemberManagementStatus(message);
                          toast.error(message);
                          return;
                        }

                        setMemberManagementAvatarEditorSource(source);
                        setActiveMemberScreen("avatar-editor");
                      }}
                      disabled={memberManagementLoading || memberManagementSubmitting || !managedMemberAvatar || !canEditSelectedMember}
                    >
                      <FiEye size={15} />
                      Reabrir editor
                    </button>
                  </div>
                </div>

                <label className="home-member-management-field">
                  <span>Nome</span>
                  <input
                    type="text"
                    value={memberManagementNameDraft}
                    onChange={(event) => setMemberManagementNameDraft(event.target.value)}
                    placeholder="Nome do membro"
                    disabled={memberManagementLoading || memberManagementSubmitting || !canEditSelectedMember}
                  />
                </label>

                <label className="home-member-management-field">
                  <span>Telefone</span>
                  <input
                    type="tel"
                    value={memberManagementPhoneDraft}
                    onChange={(event) => setMemberManagementPhoneDraft(event.target.value)}
                    placeholder="Telefone do membro"
                    disabled={memberManagementLoading || memberManagementSubmitting || !canEditSelectedMember}
                  />
                </label>

                <label className="home-member-management-field">
                  <span>Timbre</span>
                  <select
                    value={memberManagementVocalRangeDraft}
                    onChange={(event) => setMemberManagementVocalRangeDraft(event.target.value)}
                    disabled={memberManagementLoading || memberManagementSubmitting || !canEditSelectedMember}
                  >
                    <option value="">Sem timbre definido</option>
                    {memberVocalRangeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                {canEditSelectedMember ? (
                  <label className="home-member-management-field">
                    <span>Cargo</span>
                    <select
                      value={memberManagementRoleDraft}
                      onChange={(event) => setMemberManagementRoleDraft(event.target.value as ManagedMemberRoleKey)}
                      disabled={memberManagementLoading || memberManagementSubmitting}
                    >
                      {assignableManagedRoleKeys.map((roleKey) => (
                        <option key={roleKey} value={roleKey}>
                          {resolveManagedMemberRoleLabel(roleKey)}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : null}

                <div className="home-member-management-actions">
                  {canEditSelectedMember ? (
                    <button
                      type="button"
                      className="home-primary-action"
                      onClick={() => void saveManagedMemberProfile()}
                      disabled={memberManagementLoading || memberManagementSubmitting || !memberManagementNameDraft.trim()}
                    >
                      {memberManagementSubmitting ? "Salvando..." : "Salvar alterações do membro"}
                    </button>
                  ) : null}

                  {canManageSelectedMember ? (
                    <button
                      type="button"
                      className="home-secondary-action compact"
                      onClick={() => void setManagedMemberDisabledState(!memberManagementDisabled)}
                      disabled={memberManagementLoading || memberManagementSubmitting || !memberManagementAuthExists}
                    >
                      {memberManagementDisabled ? "Reativar conta" : "Desativar conta"}
                    </button>
                  ) : null}

                  {canResetSelectedMemberPassword ? (
                    <button
                      type="button"
                      className="home-secondary-action compact"
                      onClick={() => void resetManagedMemberPassword()}
                      disabled={memberManagementLoading || memberManagementSubmitting}
                    >
                      Redefinir senha
                    </button>
                  ) : null}

                  {canManageSelectedMember ? (
                    <button
                      type="button"
                      className="home-danger-action compact"
                      onClick={() => void deleteManagedMemberAccount()}
                      disabled={memberManagementLoading || memberManagementSubmitting}
                    >
                      <FiTrash2 size={15} />
                      Apagar conta
                    </button>
                  ) : null}
                </div>
              </div>

              {memberManagementStatus ? <p className="home-member-management-status">{memberManagementStatus}</p> : null}
            </div>
          </article>
        </section>
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