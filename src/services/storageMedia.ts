import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { firebaseStorage, firebaseStorageBuckets, getFirebaseStorage } from "../config/firebase";

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

type UploadMethod = "resumable" | "simple";

const mobileSimpleUploadPreferredBytes = 40 * 1024 * 1024;
const minUploadAttemptTimeoutMs = 90000;
const maxUploadAttemptTimeoutMs = 8 * 60 * 1000;
const minFileReadTimeoutMs = 20000;
const maxFileReadTimeoutMs = 3 * 60 * 1000;

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

const inferredPostMediaContentTypesByExtension: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".bmp": "image/bmp",
  ".heic": "image/heic",
  ".heif": "image/heif",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".m4v": "video/x-m4v",
  ".webm": "video/webm",
  ".avi": "video/x-msvideo",
  ".mkv": "video/x-matroska",
  ".mpeg": "video/mpeg",
  ".mpg": "video/mpeg",
  ".3gp": "video/3gpp",
};

function getFileExtension(name: string) {
  const dotIndex = name.lastIndexOf(".");

  if (dotIndex < 0) {
    return "";
  }

  return name.slice(dotIndex).toLowerCase();
}

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

  const extension = getFileExtension(file.name);

  if (!extension) {
    return "application/octet-stream";
  }

  return inferredContentTypesByExtension[extension] || "application/octet-stream";
}

function resolvePostMediaContentType(file: File) {
  if (file.type.trim()) {
    return file.type;
  }

  return inferredPostMediaContentTypesByExtension[getFileExtension(file.name)] || resolveContentType(file);
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

function isBucketMissingError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  const code = "code" in error && typeof error.code === "string" ? error.code : "";
  const message = "message" in error && typeof error.message === "string" ? error.message : "";

  return code === "storage/bucket-not-found" || /specified bucket does not exist/i.test(message);
}

function getStorageCandidates() {
  return firebaseStorageBuckets.map((bucketName, index) => (
    index === 0 ? firebaseStorage : getFirebaseStorage(bucketName)
  ));
}

function createUploadTimeoutError(method: UploadMethod) {
  const error = new Error(`O upload ${method === "simple" ? "direto" : "resumable"} excedeu o tempo limite.`) as Error & { code?: string };
  error.code = "storage/retry-limit-exceeded";
  return error;
}

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getBinarySize(data: Blob | Uint8Array | ArrayBuffer) {
  if (typeof Blob !== "undefined" && data instanceof Blob) {
    return data.size;
  }

  if (data instanceof ArrayBuffer) {
    return data.byteLength;
  }

  return data.byteLength;
}

function isLikelyMobileBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const userAgent = navigator.userAgent || "";
  const maxTouchPoints = navigator.maxTouchPoints || 0;

  return (
    /android|iphone|ipad|ipod|mobile|windows phone|opera mini|silk/i.test(userAgent) ||
    (/macintosh/i.test(userAgent) && maxTouchPoints > 1)
  );
}

function resolveUploadMethods(data: Blob | Uint8Array | ArrayBuffer): UploadMethod[] {
  const sizeBytes = getBinarySize(data);

  if (isLikelyMobileBrowser() && sizeBytes > 0 && sizeBytes <= mobileSimpleUploadPreferredBytes) {
    return ["simple", "resumable"];
  }

  return ["resumable", "simple"];
}

function waitForRetry(delayMs: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });
}

async function withTimedOperation<T>(operation: Promise<T>, timeoutMs: number, errorFactory: () => Error) {
  let timeoutId = 0;

  try {
    return await Promise.race([
      operation,
      new Promise<T>((_, reject) => {
        timeoutId = window.setTimeout(() => {
          reject(errorFactory());
        }, timeoutMs);
      }),
    ]);
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function resolveUploadTimeoutMs(method: UploadMethod, data: Blob | Uint8Array | ArrayBuffer) {
  const sizeInMegabytes = getBinarySize(data) / (1024 * 1024);
  const baseTimeoutMs = method === "simple" ? 75000 : 90000;
  const perMegabyteTimeoutMs = method === "simple" ? 5000 : 6500;

  return clampNumber(
    Math.round(baseTimeoutMs + sizeInMegabytes * perMegabyteTimeoutMs),
    minUploadAttemptTimeoutMs,
    maxUploadAttemptTimeoutMs,
  );
}

async function withUploadTimeout<T>(
  promise: Promise<T>,
  method: UploadMethod,
  data: Blob | Uint8Array | ArrayBuffer,
  onTimeout?: () => void,
) {
  return withTimedOperation(
    promise,
    resolveUploadTimeoutMs(method, data),
    () => {
      onTimeout?.();
      return createUploadTimeoutError(method);
    },
  );
}

function shouldPreMaterializeFile(file: File, contentType: string) {
  const normalizedType = file.type.trim().toLowerCase();

  if (normalizedType === "" || normalizedType === "application/octet-stream") {
    return isLikelyMobileBrowser();
  }

  if (!isLikelyMobileBrowser()) {
    return false;
  }

  return contentType.startsWith("audio/") || contentType === "application/pdf";
}

function createFileReadTimeoutError(file: File) {
  const error = new Error(`A leitura local do arquivo ${file.name || "selecionado"} excedeu o tempo limite.`) as Error & { code?: string };
  error.code = "storage/retry-limit-exceeded";
  return error;
}

async function readFileAsArrayBuffer(file: File) {
  const sizeInMegabytes = file.size / (1024 * 1024);
  const timeoutMs = clampNumber(
    Math.round(20000 + sizeInMegabytes * 3500),
    minFileReadTimeoutMs,
    maxFileReadTimeoutMs,
  );

  return withTimedOperation(file.arrayBuffer(), timeoutMs, () => createFileReadTimeoutError(file));
}

async function readFileThroughObjectUrl(file: File) {
  const objectUrl = URL.createObjectURL(file);
  const sizeInMegabytes = file.size / (1024 * 1024);
  const timeoutMs = clampNumber(
    Math.round(25000 + sizeInMegabytes * 4000),
    minFileReadTimeoutMs,
    maxFileReadTimeoutMs,
  );

  try {
    const response = await withTimedOperation(
      fetch(objectUrl),
      timeoutMs,
      () => createFileReadTimeoutError(file),
    );
    const blob = await withTimedOperation(
      response.blob(),
      timeoutMs,
      () => createFileReadTimeoutError(file),
    );
    return blob.arrayBuffer();
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

async function materializeFileForUpload(file: File) {
  try {
    return await readFileAsArrayBuffer(file);
  } catch (error) {
    if (!shouldRetryUpload(error)) {
      throw error;
    }
  }

  return readFileThroughObjectUrl(file);
}

async function performUpload(
  storage: ReturnType<typeof getFirebaseStorage>,
  method: UploadMethod,
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: { contentType?: string },
) {
  const storageReference = ref(storage, path);

  if (method === "simple") {
    const snapshot = await withUploadTimeout(uploadBytes(storageReference, data, metadata), method, data);
    const url = await getDownloadURL(snapshot.ref);
    return {
      snapshot,
      url,
    };
  }

  let uploadTask: import("firebase/storage").UploadTask | null = null;

  const snapshot = await withUploadTimeout(
    new Promise<import("firebase/storage").UploadTaskSnapshot>((resolve, reject) => {
      uploadTask = uploadBytesResumable(storageReference, data, metadata);
      uploadTask.on(
        "state_changed",
        undefined,
        (error) => reject(error),
        () => resolve(uploadTask.snapshot),
      );
    }),
    method,
    data,
    () => {
      uploadTask?.cancel();
    },
  );

  const url = await getDownloadURL(snapshot.ref);
  return {
    snapshot,
    url,
  };
}

async function uploadBinaryToPath(
  path: string,
  data: Blob | Uint8Array | ArrayBuffer,
  metadata?: { contentType?: string },
) {
  let lastError: unknown = null;
  const uploadMethods = resolveUploadMethods(data);

  for (const storage of getStorageCandidates()) {
    for (const uploadMethod of uploadMethods) {
      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          return await performUpload(storage, uploadMethod, path, data, metadata);
        } catch (error) {
          lastError = error;

          if (attempt === 0 && shouldRetryUpload(error)) {
            await waitForRetry(uploadMethod === "simple" ? 450 : 750);
            continue;
          }

          break;
        }
      }

      if (isBucketMissingError(lastError)) {
        break;
      }

      if (!shouldRetryUpload(lastError)) {
        throw lastError;
      }

      await waitForRetry(250);
    }

    if (isBucketMissingError(lastError)) {
      continue;
    }
  }

  throw lastError;
}

async function uploadFileToPath(path: string, file: File, preferredContentType?: string) {
  const contentType = preferredContentType || resolveContentType(file);
  let uploadResult: Awaited<ReturnType<typeof uploadBinaryToPath>>;

  try {
    const payload = shouldPreMaterializeFile(file, contentType) ? await materializeFileForUpload(file) : file;

    uploadResult = await uploadBinaryToPath(path, payload, {
      contentType,
    });
  } catch (error) {
    if (!shouldRetryUpload(error) && !isLikelyMobileBrowser()) {
      throw error;
    }

    const materializedFile = await materializeFileForUpload(file);
    uploadResult = await uploadBinaryToPath(path, materializedFile, {
      contentType,
    });
  }

  const { snapshot, url } = uploadResult;

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
      await uploadFileToPath(
        `posts/${postId}/${buildTimestampedFileName(file, index)}`,
        file,
        resolvePostMediaContentType(file),
      ),
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
    uniquePaths.map(async (path) => {
      let lastError: unknown = null;

      for (const storage of getStorageCandidates()) {
        try {
          await deleteObject(ref(storage, path));
          return;
        } catch (error) {
          lastError = error;

          const errorCode = (error as { code?: string } | undefined)?.code;

          if (errorCode === "storage/object-not-found" || isBucketMissingError(error)) {
            continue;
          }

          throw error;
        }
      }

      const errorCode = (lastError as { code?: string } | undefined)?.code;

      if (errorCode === "storage/object-not-found" || isBucketMissingError(lastError)) {
        return;
      }

      throw lastError;
    }),
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