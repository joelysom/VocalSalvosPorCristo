import { useEffect, useState } from "react";
import Cropper, { type Area, type Point } from "react-easy-crop";
import { FiArrowLeft, FiRotateCw, FiSliders, FiSun } from "react-icons/fi";
import { renderEditedAvatarDataUrl } from "../utils/avatarEditor";

type AvatarEditorModalProps = {
  open: boolean;
  imageSrc: string;
  title: string;
  description: string;
  eyebrowLabel?: string;
  cropShape?: "round" | "rect";
  aspect?: number;
  layout?: "modal" | "page";
  backLabel?: string;
  onClose: () => void;
  onApply: (dataUrl: string) => Promise<void> | void;
};

const initialCrop: Point = { x: 0, y: 0 };

function buildPreviewFilter(saturation: number, brightness: number, contrast: number) {
  return `saturate(${saturation}%) brightness(${brightness}%) contrast(${contrast}%)`;
}

export function AvatarEditorModal({
  open,
  imageSrc,
  title,
  description,
  eyebrowLabel = "Foto de perfil",
  cropShape = "round",
  aspect = 1,
  layout = "modal",
  backLabel = "Voltar",
  onClose,
  onApply,
}: AvatarEditorModalProps) {
  const [crop, setCrop] = useState<Point>(initialCrop);
  const [zoom, setZoom] = useState(1.15);
  const [rotation, setRotation] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setCrop(initialCrop);
    setZoom(1.15);
    setRotation(0);
    setSaturation(100);
    setBrightness(100);
    setContrast(100);
    setCroppedAreaPixels(null);
    setStatusMessage("");
  }, [imageSrc, open]);

  if (!open || !imageSrc) {
    return null;
  }

  const handleApply = async () => {
    if (!croppedAreaPixels) {
      setStatusMessage("Ajuste a foto antes de aplicar.");
      return;
    }

    setIsApplying(true);
    setStatusMessage("");

    try {
      const result = await renderEditedAvatarDataUrl(imageSrc, croppedAreaPixels, {
        rotation,
        saturation,
        brightness,
        contrast,
      });

      await onApply(result);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Não foi possível preparar a foto agora.",
      );
    } finally {
      setIsApplying(false);
    }
  };

  const editorLayout = (
    <>
      <div className="avatar-editor-layout">
        <div className="avatar-editor-stage">
          <div className="avatar-editor-cropper-shell">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              rotation={rotation}
              cropShape={cropShape}
              showGrid={false}
              aspect={aspect}
              objectFit="cover"
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onRotationChange={setRotation}
              onCropComplete={(_, areaPixels) => setCroppedAreaPixels(areaPixels)}
              style={{
                mediaStyle: {
                  filter: buildPreviewFilter(saturation, brightness, contrast),
                },
              }}
            />
          </div>

          <div className="avatar-editor-tip-row">
            <span>Arraste a foto para enquadrar melhor o rosto.</span>
            <span>O resultado será salvo em formato otimizado.</span>
          </div>
        </div>

        <div className="avatar-editor-controls">
          <div className="avatar-editor-control-group">
            <div className="avatar-editor-control-header">
              <FiSliders size={16} />
              <strong>Enquadramento</strong>
            </div>

            <label className="avatar-editor-range-row">
              <span>Zoom</span>
              <strong>{zoom.toFixed(2)}x</strong>
              <input type="range" min="1" max="3" step="0.01" value={zoom} onChange={(event) => setZoom(Number(event.target.value))} />
            </label>

            <label className="avatar-editor-range-row">
              <span>Rotação</span>
              <strong>{rotation}°</strong>
              <input type="range" min="-180" max="180" step="1" value={rotation} onChange={(event) => setRotation(Number(event.target.value))} />
            </label>
          </div>

          <div className="avatar-editor-control-group">
            <div className="avatar-editor-control-header">
              <FiSun size={16} />
              <strong>Imagem</strong>
            </div>

            <label className="avatar-editor-range-row">
              <span>Saturação</span>
              <strong>{saturation}%</strong>
              <input type="range" min="40" max="180" step="1" value={saturation} onChange={(event) => setSaturation(Number(event.target.value))} />
            </label>

            <label className="avatar-editor-range-row">
              <span>Brilho</span>
              <strong>{brightness}%</strong>
              <input type="range" min="70" max="130" step="1" value={brightness} onChange={(event) => setBrightness(Number(event.target.value))} />
            </label>

            <label className="avatar-editor-range-row">
              <span>Contraste</span>
              <strong>{contrast}%</strong>
              <input type="range" min="80" max="150" step="1" value={contrast} onChange={(event) => setContrast(Number(event.target.value))} />
            </label>
          </div>

          <button
            type="button"
            className="home-secondary-action avatar-editor-reset"
            onClick={() => {
              setCrop(initialCrop);
              setZoom(1.15);
              setRotation(0);
              setSaturation(100);
              setBrightness(100);
              setContrast(100);
              setStatusMessage("");
            }}
            disabled={isApplying}
          >
            <FiRotateCw size={15} />
            Resetar ajustes
          </button>

          {statusMessage ? <p className="avatar-editor-status">{statusMessage}</p> : null}
        </div>
      </div>

      <div className="home-modal-actions avatar-editor-actions">
        <button type="button" className="home-secondary-action" onClick={onClose} disabled={isApplying}>
          Cancelar
        </button>
        <button type="button" className="home-primary-action" onClick={handleApply} disabled={isApplying}>
          {isApplying ? "Aplicando..." : "Usar esta foto"}
        </button>
      </div>
    </>
  );

  if (layout === "page") {
    return (
      <section className="home-post-screen avatar-editor-screen" role="dialog" aria-modal="true" aria-label={title}>
        <div className="home-post-screen-header">
          <button type="button" className="home-secondary-action compact" onClick={onClose} disabled={isApplying}>
            <FiArrowLeft size={16} />
            {backLabel}
          </button>
          <span className="home-role-chip">{eyebrowLabel}</span>
        </div>

        <article className="home-post-detail-card avatar-editor-page-card">
          <div className="avatar-editor-page-hero">
            <p className="home-card-eyebrow">{eyebrowLabel}</p>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          {editorLayout}
        </article>
      </section>
    );
  }

  return (
    <div className="home-modal-backdrop avatar-editor-backdrop" role="dialog" aria-modal="true" aria-label={title}>
      <div className="home-modal-card avatar-editor-card">
        <div className="home-modal-header avatar-editor-header">
          <div>
            <p className="home-card-eyebrow">{eyebrowLabel}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <button type="button" className="home-modal-close" onClick={onClose} disabled={isApplying}>
            Fechar
          </button>
        </div>

        {editorLayout}
      </div>
    </div>
  );
}