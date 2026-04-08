type GoogleDrivePickerMode = "audio" | "document";

type GoogleDrivePickerFileOptions = {
  title: string;
  mode: GoogleDrivePickerMode;
};

type GoogleDrivePickerDocument = {
  id: string;
  name: string;
  mimeType: string;
};

type GoogleApisWindow = Window & {
  gapi?: {
    load: (apiName: string, options: { callback: () => void; onerror?: () => void }) => void;
  };
  google?: {
    accounts?: {
      oauth2?: {
        initTokenClient: (options: {
          client_id: string;
          scope: string;
          callback: (response: { access_token?: string; error?: string; error_description?: string }) => void;
          error_callback?: () => void;
        }) => {
          requestAccessToken: (options?: { prompt?: string }) => void;
        };
      };
    };
    picker?: {
      ViewId: { DOCS: string };
      Action: { PICKED: string; CANCEL: string };
      Response: { ACTION: string; DOCUMENTS: string };
      Feature: { SUPPORT_DRIVES: string };
      DocsView: new (viewId: string) => {
        setIncludeFolders: (value: boolean) => void;
        setSelectFolderEnabled: (value: boolean) => void;
        setMimeTypes: (value: string) => void;
      };
      PickerBuilder: new () => {
        addView: (view: unknown) => unknown;
        enableFeature: (feature: string) => unknown;
        setAppId: (appId: string) => unknown;
        setDeveloperKey: (apiKey: string) => unknown;
        setOAuthToken: (token: string) => unknown;
        setOrigin: (origin: string) => unknown;
        setTitle: (title: string) => unknown;
        setCallback: (callback: (data: Record<string, unknown>) => void) => unknown;
        build: () => { setVisible: (value: boolean) => void };
      };
    };
  };
};

const GOOGLE_API_SCRIPT_SRC = "https://apis.google.com/js/api.js";
const GOOGLE_GIS_SCRIPT_SRC = "https://accounts.google.com/gsi/client";
const GOOGLE_DRIVE_SCOPE = "https://www.googleapis.com/auth/drive.readonly";
const GOOGLE_DRIVE_CANCELLED = "__GOOGLE_DRIVE_PICKER_CANCELLED__";

const driveAudioMimeTypes = [
  "audio/*",
  "video/mp4",
  "audio/mpeg",
  "audio/mp4",
  "audio/aac",
  "audio/ogg",
  "audio/wav",
  "audio/x-wav",
  "audio/webm",
  "audio/flac",
  "audio/aiff",
  "audio/amr",
  "audio/3gpp",
];

const driveDocumentMimeTypes = [
  "application/pdf",
  "image/*",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/bmp",
  "image/heic",
  "image/heif",
];

let googleApiScriptPromise: Promise<void> | null = null;
let googleGisScriptPromise: Promise<void> | null = null;
let googlePickerApiPromise: Promise<void> | null = null;
let googleDriveAccessToken = "";

function getGoogleApisWindow() {
  return window as GoogleApisWindow;
}

function loadScriptOnce(src: string, cacheKey: "googleApiScriptPromise" | "googleGisScriptPromise") {
  if (typeof document === "undefined") {
    return Promise.reject(new Error("O Google Drive Picker só pode ser carregado no navegador."));
  }

  const cachedPromise = cacheKey === "googleApiScriptPromise" ? googleApiScriptPromise : googleGisScriptPromise;

  if (cachedPromise) {
    return cachedPromise;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

    if (existingScript?.dataset.loaded === "true") {
      resolve();
      return;
    }

    const script = existingScript || document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;

    const handleLoad = () => {
      script.dataset.loaded = "true";
      resolve();
    };

    const handleError = () => {
      reject(new Error("Não foi possível carregar o Google Drive Picker agora."));
    };

    script.addEventListener("load", handleLoad, { once: true });
    script.addEventListener("error", handleError, { once: true });

    if (!existingScript) {
      document.head.appendChild(script);
    }
  });

  if (cacheKey === "googleApiScriptPromise") {
    googleApiScriptPromise = promise;
  } else {
    googleGisScriptPromise = promise;
  }

  return promise;
}

function getGoogleDrivePickerConfig() {
  return {
    apiKey: (import.meta.env.VITE_GOOGLE_DRIVE_API_KEY || "").trim(),
    clientId: (import.meta.env.VITE_GOOGLE_DRIVE_CLIENT_ID || "").trim(),
    appId: (import.meta.env.VITE_GOOGLE_DRIVE_APP_ID || "").trim(),
  };
}

export function getGoogleDrivePickerMissingConfigFields() {
  const { apiKey, clientId, appId } = getGoogleDrivePickerConfig();
  const missingFields: string[] = [];

  if (!apiKey) {
    missingFields.push("VITE_GOOGLE_DRIVE_API_KEY");
  }

  if (!clientId) {
    missingFields.push("VITE_GOOGLE_DRIVE_CLIENT_ID");
  }

  if (!appId) {
    missingFields.push("VITE_GOOGLE_DRIVE_APP_ID");
  }

  return missingFields;
}

export function isGoogleDrivePickerConfigured() {
  return getGoogleDrivePickerMissingConfigFields().length === 0;
}

export function isGoogleDrivePickerCancelled(error: unknown) {
  return error instanceof Error && error.message === GOOGLE_DRIVE_CANCELLED;
}

async function ensureGoogleDrivePickerApiLoaded() {
  if (googlePickerApiPromise) {
    return googlePickerApiPromise;
  }

  googlePickerApiPromise = Promise.all([
    loadScriptOnce(GOOGLE_API_SCRIPT_SRC, "googleApiScriptPromise"),
    loadScriptOnce(GOOGLE_GIS_SCRIPT_SRC, "googleGisScriptPromise"),
  ]).then(
    () =>
      new Promise<void>((resolve, reject) => {
        const googleWindow = getGoogleApisWindow();

        if (!googleWindow.gapi || !googleWindow.google?.accounts?.oauth2) {
          reject(new Error("Os serviços do Google Drive não ficaram disponíveis no navegador."));
          return;
        }

        googleWindow.gapi.load("picker", {
          callback: () => resolve(),
          onerror: () => reject(new Error("Não foi possível inicializar o seletor do Google Drive.")),
        });
      }),
  );

  return googlePickerApiPromise;
}

async function requestGoogleDriveAccessToken(clientId: string) {
  await ensureGoogleDrivePickerApiLoaded();

  return new Promise<string>((resolve, reject) => {
    const googleWindow = getGoogleApisWindow();
    const tokenClient = googleWindow.google?.accounts?.oauth2?.initTokenClient({
      client_id: clientId,
      scope: GOOGLE_DRIVE_SCOPE,
      callback: (response) => {
        if (response.error || !response.access_token) {
          reject(
            new Error(response.error_description || response.error || "Não foi possível autenticar o Google Drive."),
          );
          return;
        }

        googleDriveAccessToken = response.access_token;
        resolve(response.access_token);
      },
      error_callback: () => {
        reject(new Error("A autenticação do Google Drive foi cancelada ou falhou."));
      },
    });

    if (!tokenClient) {
      reject(new Error("O cliente de autenticação do Google Drive não foi iniciado."));
      return;
    }

    tokenClient.requestAccessToken({ prompt: googleDriveAccessToken ? "" : "consent" });
  });
}

async function openGoogleDrivePicker(
  accessToken: string,
  options: GoogleDrivePickerFileOptions,
): Promise<GoogleDrivePickerDocument> {
  await ensureGoogleDrivePickerApiLoaded();

  const { apiKey, appId } = getGoogleDrivePickerConfig();
  const googleWindow = getGoogleApisWindow();

  return new Promise<GoogleDrivePickerDocument>((resolve, reject) => {
    if (!googleWindow.google?.picker) {
      reject(new Error("O seletor do Google Drive não está disponível neste navegador."));
      return;
    }

    const mimeTypes = options.mode === "audio" ? driveAudioMimeTypes : driveDocumentMimeTypes;
    const docsView = new googleWindow.google.picker.DocsView(googleWindow.google.picker.ViewId.DOCS);
    docsView.setIncludeFolders(false);
    docsView.setSelectFolderEnabled(false);
    docsView.setMimeTypes(mimeTypes.join(","));

    const picker = new googleWindow.google.picker.PickerBuilder()
      .addView(docsView)
      .enableFeature(googleWindow.google.picker.Feature.SUPPORT_DRIVES)
      .setAppId(appId)
      .setDeveloperKey(apiKey)
      .setOAuthToken(accessToken)
      .setOrigin(window.location.origin)
      .setTitle(options.title)
      .setCallback((data) => {
        const action = String(data[googleWindow.google!.picker!.Response.ACTION] || "");

        if (action === googleWindow.google.picker.Action.CANCEL) {
          reject(new Error(GOOGLE_DRIVE_CANCELLED));
          return;
        }

        if (action !== googleWindow.google.picker.Action.PICKED) {
          return;
        }

        const documents = data[googleWindow.google!.picker!.Response.DOCUMENTS];
        const pickedDocument = Array.isArray(documents) ? (documents[0] as Record<string, unknown> | undefined) : undefined;

        if (!pickedDocument) {
          reject(new Error("Nenhum arquivo do Google Drive foi retornado."));
          return;
        }

        resolve({
          id: String(pickedDocument.id || ""),
          name: String(pickedDocument.name || pickedDocument["google.picker.Document.NAME"] || "arquivo-drive"),
          mimeType: String(pickedDocument.mimeType || pickedDocument["google.picker.Document.MIME_TYPE"] || ""),
        });
      })
      .build();

    picker.setVisible(true);
  });
}

async function downloadGoogleDriveFile(documentInfo: GoogleDrivePickerDocument, accessToken: string) {
  if (documentInfo.mimeType.startsWith("application/vnd.google-apps")) {
    throw new Error("Arquivos nativos do Google Docs precisam ser exportados antes. Envie um PDF, imagem ou áudio real do Drive.");
  }

  const response = await fetch(`https://www.googleapis.com/drive/v3/files/${documentInfo.id}?alt=media`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error("Não foi possível baixar o arquivo escolhido no Google Drive.");
  }

  const blob = await response.blob();
  const contentType = blob.type || documentInfo.mimeType || "application/octet-stream";
  return new File([blob], documentInfo.name, {
    type: contentType,
    lastModified: Date.now(),
  });
}

export async function pickGoogleDriveFile(options: GoogleDrivePickerFileOptions) {
  const missingFields = getGoogleDrivePickerMissingConfigFields();

  if (missingFields.length > 0) {
    throw new Error(`Configure ${missingFields.join(", ")} para usar o Google Drive Picker.`);
  }

  const { clientId } = getGoogleDrivePickerConfig();
  const accessToken = await requestGoogleDriveAccessToken(clientId);
  const documentInfo = await openGoogleDrivePicker(accessToken, options);
  return downloadGoogleDriveFile(documentInfo, accessToken);
}