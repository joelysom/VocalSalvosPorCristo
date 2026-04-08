import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseStorage } from "../config/firebase";

export const MAX_SHARED_STORAGE_BYTES = 5 * 1024 * 1024 * 1024;

export type StoredMediaKind = "image" | "video" | "audio" | "document";

export type StoredFileRecord = {
  name: string;
  url: string;
  path: string;
  contentType: string;
  sizeBytes: number;
  kind: StoredMediaKind;
};

const inferredContentTypesByExtension: Record<string, string> = {
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".m4a": "audio/mp4",
  ".aac": "audio/aac",
  ".ogg": "audio/ogg",
  ".oga": "audio/ogg",
  ".opus": "audio/ogg",
  ".flac": "audio/flac",
  ".weba": "audio/webm",
  ".mp4": "audio/mp4",
  ".mpeg": "audio/mpeg",
  ".mpga": "audio/mpeg",
  ".3gp": "audio/3gpp",
  ".amr": "audio/amr",
  ".caf": "audio/x-caf",
  ".aif": "audio/aiff",
  ".aiff": "audio/aiff",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".heic": "image/heic",
  ".heif": "image/heif",
};

function sanitizeFileName(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function buildTimestampedFileName(file: File, index = 0) {
  const safeName = sanitizeFileName(file.name || `arquivo-${index + 1}`) || `arquivo-${index + 1}`;
  return `${Date.now()}-${index + 1}-${safeName}`;
}

function resolveContentType(file: File) {
  if (file.type) {
    return file.type;
  }

  const dotIndex = file.name.lastIndexOf(".");

  if (dotIndex < 0) {
    return "application/octet-stream";
  }

  return inferredContentTypesByExtension[file.name.slice(dotIndex).toLowerCase()] || "application/octet-stream";
}

function resolveFileKind(contentType: string): StoredMediaKind {
  if (contentType.startsWith("image/")) {
    return "image";
  }

  if (contentType.startsWith("video/")) {
    return "video";
  }

  if (contentType.startsWith("audio/")) {
    return "audio";
  }

  return "document";
}

function shouldRetryUpload(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  const code = "code" in error && typeof error.code === "string" ? error.code : "";
  const message = "message" in error && typeof error.message === "string" ? error.message : "";

  return (
    code === "storage/retry-limit-exceeded" ||
    code === "storage/unknown" ||
    /ERR_HTTP2_PROTOCOL_ERROR|ERR_CONNECTION_(?:RESET|CLOSED)|network|timeout/i.test(message)
  );
}

function waitForRetry(delayMs: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });
}

async function uploadBinaryToPath(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: { contentType?: string },
) {
  const storageReference = ref(firebaseStorage, path);
  let lastError: unknown = null;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const snapshot = await new Promise<import("firebase/storage").UploadTaskSnapshot>((resolve, reject) => {
        const uploadTask = uploadBytesResumable(storageReference, data, metadata);
        uploadTask.on(
          "state_changed",
          undefined,
          (error) => reject(error),
          () => resolve(uploadTask.snapshot),
        );
      });

      const url = await getDownloadURL(snapshot.ref);
      return {
        snapshot,
        url,
      };
    } catch (error) {
      lastError = error;

      if (attempt === 0 && shouldRetryUpload(error)) {
        await waitForRetry(750);
        continue;
      }

      throw error;
    }
  }

  throw lastError;
}

async function uploadFileToPath(path: string, file: File) {
  const contentType = resolveContentType(file);
  const { snapshot, url } = await uploadBinaryToPath(path, file, {
    contentType,
  });

  return {
    name: file.name,
    url,
    path: snapshot.ref.fullPath,
    contentType,
    sizeBytes: file.size,
    kind: resolveFileKind(contentType),
  } satisfies StoredFileRecord;
}

export async function uploadProfileAvatar(userId: string, avatarDataUrl: string) {
  const response = await fetch(avatarDataUrl);
  const avatarBlob = await response.blob();
  const { url } = await uploadBinaryToPath(`avatars/${userId}/profile.jpg`, avatarBlob, {
    contentType: avatarBlob.type || "image/jpeg",
  });
  return url;
}

export async function uploadPostMediaFiles(postId: string, files: File[]) {
  const uploadedFiles: StoredFileRecord[] = [];

  for (const [index, file] of files.entries()) {
    uploadedFiles.push(
      await uploadFileToPath(`posts/${postId}/${buildTimestampedFileName(file, index)}`, file),
    );
  }

  return uploadedFiles;
}

export async function uploadSongVoiceFile(songId: string, voiceType: string, file: File) {
  return uploadFileToPath(
    `songs/${songId}/voices/${sanitizeFileName(voiceType)}/${buildTimestampedFileName(file)}`,
    file,
  );
}

export async function uploadSongAttachment(songId: string, attachmentType: "lyrics" | "score", file: File) {
  return uploadFileToPath(
    `songs/${songId}/${attachmentType}/${buildTimestampedFileName(file)}`,
    file,
  );
}

export async function deleteStorageObjects(paths: string[]) {
  const uniquePaths = Array.from(new Set(paths.filter(Boolean)));
  const results = await Promise.allSettled(
    uniquePaths.map((path) => deleteObject(ref(firebaseStorage, path))),
  );

  const failedDeletes = results.filter((result) => {
    if (result.status !== "rejected") {
      return false;
    }

    const errorCode = (result.reason as { code?: string } | undefined)?.code;
    return errorCode !== "storage/object-not-found";
  });

  if (failedDeletes.length > 0) {
    throw new Error("Alguns arquivos no Storage não puderam ser removidos.");
  }
}

export function formatStorageBytes(value: number) {
  if (value < 1024) {
    return `${value} B`;
  }

  const units = ["KB", "MB", "GB", "TB"];
  let currentValue = value / 1024;
  let unitIndex = 0;

  while (currentValue >= 1024 && unitIndex < units.length - 1) {
    currentValue /= 1024;
    unitIndex += 1;
  }

  return `${currentValue.toFixed(currentValue >= 100 ? 0 : currentValue >= 10 ? 1 : 2)} ${units[unitIndex]}`;
}