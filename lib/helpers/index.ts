// lib/helpers.ts
import { StaticImageData } from "next/image";

// Define the image type
export interface ImageData {
  src: StaticImageData;
  orientation: string;
  width: number;
  height: number;
}

// Function to determine the orientation of the image
export const getImageOrientation = (width: number, height: number) => {
  return width > height ? "horizontal" : "vertical";
};

export const calculateImageSize = async (
  images: StaticImageData[]
): Promise<ImageData[]> => {
  const data = await Promise.all(
    images.map((img) => {
      return new Promise<ImageData>((resolve) => {
        const image = new window.Image();
        image.src = img.src;
        image.onload = () => {
          const orientation = getImageOrientation(
            image.naturalWidth,
            image.naturalHeight
          );
          resolve({
            src: img,
            orientation,
            width: image.naturalWidth,
            height: image.naturalHeight,
          });
        };
      });
    })
  );
  return data;
};

// Gallery Album Page Carousel Modal
export const calculateModalImageSize = (
  naturalWidth,
  naturalHeight,
  maxWidth,
  maxHeight
) => {
  const aspectRatio = naturalWidth / naturalHeight;
  let width = maxWidth;
  let height = maxWidth / aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = maxHeight * aspectRatio;
  }

  return { width, height };
};

export const calculateImageStyles = (src, callback) => {
  const img = new window.Image();
  img.src = src;
  img.onload = () => {
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    let width = maxWidth;
    let height = maxWidth / aspectRatio;

    if (height > maxHeight) {
      height = maxHeight;
      width = maxHeight * aspectRatio;
    }

    callback({ width, height });
  };
};

export const capitalizeWords = (str: string) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
