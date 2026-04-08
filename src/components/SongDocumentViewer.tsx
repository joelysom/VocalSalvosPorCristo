import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

type SongDocumentViewerProps = {
  fileUrl: string;
  contentType: string;
  title: string;
  emptyMessage: string;
  fileName?: string;
  displayMode?: "preview" | "expanded";
};

const imageDocumentExtensions = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".bmp", ".heic", ".heif"];

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function resolveDocumentExtension(fileName: string, fileUrl: string) {
  const source = fileName || decodeURIComponent(fileUrl || "");
  const dotIndex = source.lastIndexOf(".");

  if (dotIndex < 0) {
    return "";
  }

  return source.slice(dotIndex).toLowerCase();
}

function resolvePdfViewerUrl(fileUrl: string) {
  if (!fileUrl) {
    return "";
  }

  return `/api/pdf-proxy?url=${encodeURIComponent(fileUrl)}`;
}

export function SongDocumentViewer({
  fileUrl,
  contentType,
  title,
  emptyMessage,
  fileName = "",
  displayMode = "preview",
}: SongDocumentViewerProps) {
  const pdfViewportRef = useRef<HTMLDivElement | null>(null);
  const [pdfPageCount, setPdfPageCount] = useState(0);
  const [pdfViewportWidth, setPdfViewportWidth] = useState(0);
  const [pdfErrorMessage, setPdfErrorMessage] = useState("");
  const extension = resolveDocumentExtension(fileName, fileUrl);
  const normalizedContentType = contentType.toLowerCase();
  const isPdf = normalizedContentType === "application/pdf" || extension === ".pdf";
  const isImage = normalizedContentType.startsWith("image/") || imageDocumentExtensions.includes(extension);
  const resolvedPdfViewerUrl = isPdf ? resolvePdfViewerUrl(fileUrl) : "";
  const pdfPageNumbers = useMemo(() => {
    if (!isPdf) {
      return [];
    }

    if (displayMode === "expanded" && pdfPageCount > 0) {
      return Array.from({ length: pdfPageCount }, (_, index) => index + 1);
    }

    return [1];
  }, [displayMode, isPdf, pdfPageCount]);

  useEffect(() => {
    setPdfErrorMessage("");
    setPdfPageCount(0);
  }, [fileUrl, displayMode]);

  useEffect(() => {
    if (!isPdf) {
      return undefined;
    }

    const viewportElement = pdfViewportRef.current;

    if (!viewportElement) {
      return undefined;
    }

    const updateViewportWidth = () => {
      setPdfViewportWidth(Math.floor(viewportElement.clientWidth));
    };

    updateViewportWidth();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateViewportWidth);
      return () => {
        window.removeEventListener("resize", updateViewportWidth);
      };
    }

    const resizeObserver = new ResizeObserver(() => {
      updateViewportWidth();
    });

    resizeObserver.observe(viewportElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [displayMode, isPdf, fileUrl]);

  if (!fileUrl) {
    return <p className="song-document-viewer__state">{emptyMessage}</p>;
  }

  return (
    <div className={`song-document-viewer is-${displayMode}`} onContextMenu={(event) => event.preventDefault()}>
      {isImage ? (
        <div className="song-document-viewer__surface is-image">
          <img src={fileUrl} alt={title} className="song-document-viewer__image" draggable={false} />
        </div>
      ) : isPdf ? (
        <div className="song-document-viewer__surface is-pdf">
          <div className="song-document-viewer__pdf-shell" ref={pdfViewportRef}>
            {pdfErrorMessage ? (
              <div className="song-document-viewer__state is-error">
                <p>{pdfErrorMessage}</p>
                <a href={fileUrl} target="_blank" rel="noreferrer" className="song-document-viewer__fallback-link">
                  Abrir PDF em nova aba
                </a>
              </div>
            ) : pdfViewportWidth > 0 ? (
              <Document
                file={resolvedPdfViewerUrl}
                loading={<p className="song-document-viewer__state">Carregando prévia do PDF...</p>}
                error={<p className="song-document-viewer__state is-error">Não foi possível carregar a prévia deste PDF.</p>}
                onLoadSuccess={({ numPages }) => {
                  setPdfPageCount(numPages);
                  setPdfErrorMessage("");
                }}
                onLoadError={(error) => {
                  setPdfErrorMessage(error instanceof Error ? error.message : "Não foi possível carregar a prévia deste PDF.");
                }}
                onSourceError={(error) => {
                  setPdfErrorMessage(error instanceof Error ? error.message : "Não foi possível preparar o arquivo PDF para leitura interna.");
                }}
                className="song-document-viewer__pdf-pages"
              >
                {pdfPageNumbers.map((pageNumber) => (
                  <div key={pageNumber} className="song-document-viewer__pdf-page">
                    <Page
                      pageNumber={pageNumber}
                      width={Math.max(pdfViewportWidth - 24, 220)}
                      loading={<p className="song-document-viewer__state">Renderizando página...</p>}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                    />
                  </div>
                ))}
              </Document>
            ) : (
              <p className="song-document-viewer__state">Preparando área de leitura...</p>
            )}
          </div>
        </div>
      ) : (
        <p className="song-document-viewer__state">Formato de {title.toLowerCase()} não suportado para visualização interna.</p>
      )}
    </div>
  );
}