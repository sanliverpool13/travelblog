export interface ImageData {
  src: string;
  width: number;
  height: number;
}

export interface Album {
  name: string;
  coverImage: string;
  images: ImageData[];
}
