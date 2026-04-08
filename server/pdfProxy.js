const allowedPdfSources = [
  {
    hostname: "firebasestorage.googleapis.com",
    pathPrefix: "/v0/b/vocalsalvosporcristo-70e5f.firebasestorage.app/o/",
  },
  {
    hostname: "storage.googleapis.com",
    pathPrefix: "/vocalsalvosporcristo-70e5f.firebasestorage.app/",
  },
];

class PdfProxyError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "PdfProxyError";
    this.statusCode = statusCode;
  }
}

function isAllowedPdfSource(url) {
  return allowedPdfSources.some(
    (source) => url.hostname === source.hostname && url.pathname.startsWith(source.pathPrefix),
  );
}

export function resolvePdfSourceUrl(rawUrl) {
  const normalizedValue = typeof rawUrl === "string" ? rawUrl.trim() : "";

  if (!normalizedValue) {
    throw new PdfProxyError(400, "URL do PDF não informada.");
  }

  let parsedUrl;

  try {
    parsedUrl = new URL(normalizedValue);
  } catch {
    throw new PdfProxyError(400, "URL do PDF inválida.");
  }

  if (parsedUrl.protocol !== "https:") {
    throw new PdfProxyError(400, "A URL do PDF precisa usar HTTPS.");
  }

  if (!isAllowedPdfSource(parsedUrl)) {
    throw new PdfProxyError(403, "Origem do PDF não permitida.");
  }

  return parsedUrl.toString();
}

export async function fetchPdfProxyPayload(rawUrl, rangeHeader) {
  const sourceUrl = resolvePdfSourceUrl(rawUrl);
  const requestHeaders = {
    Accept: "application/pdf,application/octet-stream;q=0.9,*/*;q=0.1",
  };

  if (rangeHeader) {
    requestHeaders.Range = rangeHeader;
  }

  const upstreamResponse = await fetch(sourceUrl, {
    headers: requestHeaders,
    redirect: "follow",
  });

  if (!upstreamResponse.ok && upstreamResponse.status !== 206) {
    if (upstreamResponse.status === 404) {
      throw new PdfProxyError(404, "PDF não encontrado.");
    }

    throw new PdfProxyError(502, "Não foi possível carregar o PDF agora.");
  }

  const contentType = (upstreamResponse.headers.get("content-type") || "").toLowerCase();

  if (!contentType.includes("application/pdf") && !contentType.includes("application/octet-stream")) {
    throw new PdfProxyError(415, "O arquivo solicitado não é um PDF válido.");
  }

  const buffer = Buffer.from(await upstreamResponse.arrayBuffer());

  return {
    body: buffer,
    statusCode: upstreamResponse.status === 206 ? 206 : 200,
    headers: {
      "Accept-Ranges": upstreamResponse.headers.get("accept-ranges") || "bytes",
      "Cache-Control": upstreamResponse.headers.get("cache-control") || "public, max-age=300",
      "Content-Disposition": "inline; filename=preview.pdf",
      "Content-Length": String(buffer.byteLength),
      "Content-Range": upstreamResponse.headers.get("content-range") || "",
      "Content-Type": "application/pdf",
      ETag: upstreamResponse.headers.get("etag") || "",
      "Last-Modified": upstreamResponse.headers.get("last-modified") || "",
      Vary: "Range",
    },
  };
}

export function sendPdfProxyResponse(res, payload, isHeadRequest = false) {
  res.statusCode = payload.statusCode;

  Object.entries(payload.headers).forEach(([headerName, headerValue]) => {
    if (headerValue) {
      res.setHeader(headerName, headerValue);
    }
  });

  if (isHeadRequest) {
    res.end();
    return;
  }

  res.end(payload.body);
}

export function sendPdfProxyError(res, error) {
  const statusCode = error instanceof PdfProxyError ? error.statusCode : 500;
  const message = error instanceof Error ? error.message : "Falha ao gerar a prévia do PDF.";

  res.statusCode = statusCode;
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(message);
}
