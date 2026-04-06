import type { Area } from "react-easy-crop";

const MAX_AVATAR_DIMENSION = 320;
const MAX_AVATAR_DATA_URL_LENGTH = 700000;

export type AvatarAdjustments = {
  rotation: number;
  saturation: number;
  brightness: number;
  contrast: number;
  outputSize?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}

function getRotatedBounds(width: number, height: number, rotation: number) {
  const radians = degreesToRadians(rotation);

  return {
    width: Math.abs(Math.cos(radians) * width) + Math.abs(Math.sin(radians) * height),
    height: Math.abs(Math.sin(radians) * width) + Math.abs(Math.cos(radians) * height),
  };
}

export function readImageFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(String(reader.result || ""));
    };

    reader.onerror = () => {
      reject(new Error("Não foi possível ler a imagem selecionada."));
    };

    reader.readAsDataURL(file);
  });
}

function loadImage(source: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Não foi possível processar a foto selecionada."));
    image.src = source;
  });
}

function buildFilterString({ saturation, brightness, contrast }: AvatarAdjustments) {
  return `saturate(${saturation}%) brightness(${brightness}%) contrast(${contrast}%)`;
}

async function exportCanvasToDataUrl(canvas: HTMLCanvasElement) {
  const targetSizes = [canvas.width, 280, 240, 200].filter((size, index, sizes) => size > 0 && sizes.indexOf(size) === index);
  const qualities = [0.88, 0.82, 0.76, 0.7];

  for (const size of targetSizes) {
    let workingCanvas = canvas;

    if (size !== canvas.width) {
      workingCanvas = document.createElement("canvas");
      workingCanvas.width = size;
      workingCanvas.height = size;

      const workingContext = workingCanvas.getContext("2d");

      if (!workingContext) {
        throw new Error("Não foi possível preparar a foto ajustada.");
      }

      workingContext.imageSmoothingEnabled = true;
      workingContext.imageSmoothingQuality = "high";
      workingContext.drawImage(canvas, 0, 0, size, size);
    }

    for (const quality of qualities) {
      const dataUrl = workingCanvas.toDataURL("image/jpeg", quality);

      if (dataUrl.length <= MAX_AVATAR_DATA_URL_LENGTH) {
        return dataUrl;
      }
    }
  }

  throw new Error("A foto ainda ficou grande para salvar. Reduza o zoom ou escolha outra imagem.");
}

export async function renderEditedAvatarDataUrl(
  imageSource: string,
  cropAreaPixels: Area,
  adjustments: AvatarAdjustments,
) {
  const image = await loadImage(imageSource);
  const rotatedBounds = getRotatedBounds(image.width, image.height, adjustments.rotation);
  const safeCanvas = document.createElement("canvas");
  safeCanvas.width = Math.ceil(rotatedBounds.width);
  safeCanvas.height = Math.ceil(rotatedBounds.height);

  const safeContext = safeCanvas.getContext("2d");

  if (!safeContext) {
    throw new Error("Não foi possível preparar a foto ajustada.");
  }

  safeContext.save();
  safeContext.translate(safeCanvas.width / 2, safeCanvas.height / 2);
  safeContext.rotate(degreesToRadians(adjustments.rotation));
  safeContext.filter = buildFilterString(adjustments);
  safeContext.drawImage(image, -image.width / 2, -image.height / 2);
  safeContext.restore();

  const cropSize = clamp(
    Math.max(cropAreaPixels.width, cropAreaPixels.height),
    1,
    adjustments.outputSize || MAX_AVATAR_DIMENSION,
  );
  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = cropSize;
  outputCanvas.height = cropSize;

  const outputContext = outputCanvas.getContext("2d");

  if (!outputContext) {
    throw new Error("Não foi possível finalizar a foto ajustada.");
  }

  outputContext.imageSmoothingEnabled = true;
  outputContext.imageSmoothingQuality = "high";
  outputContext.drawImage(
    safeCanvas,
    cropAreaPixels.x,
    cropAreaPixels.y,
    cropAreaPixels.width,
    cropAreaPixels.height,
    0,
    0,
    cropSize,
    cropSize,
  );

  return exportCanvasToDataUrl(outputCanvas);
}