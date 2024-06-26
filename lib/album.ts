import fs from "fs";
import path from "path";
import sizeOf from "image-size";
import { Album } from "../types/gallery";

export function getAlbums(albumName: string | null = null): Album[] {
  const albumsDirectory = path.join(process.cwd(), "/public/images");
  const albumNames = fs.readdirSync(albumsDirectory).filter((file) => {
    return fs.statSync(path.join(albumsDirectory, file)).isDirectory();
  });

  const filteredAlbumNames = albumName
    ? albumNames.filter(
        (name) => name.toLowerCase() === albumName.toLowerCase()
      )
    : albumNames;

  const albums = filteredAlbumNames
    .map((albumName) => {
      const albumPath = path.join(albumsDirectory, albumName);
      const images = fs.readdirSync(albumPath).map((imageName) => {
        const imagePath = path.join(albumPath, imageName);
        const dimensions = sizeOf(imagePath);
        return {
          src: `/images/${albumName}/${imageName}`,
          name: imageName,
          width: dimensions.width, // placeholder
          height: dimensions.height, // placeholder
        };
      });

      const coverImage =
        images.find((image) => image.name.startsWith("cover-")) || images[0];

      return {
        name: albumName,
        coverImage: coverImage.src,
        images,
      };
    })
    .filter(Boolean) as Album[];

  return albums;
}
