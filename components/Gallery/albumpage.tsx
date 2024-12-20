"use client";
import { useState, useEffect } from "react";
import {
  calculateImageSize,
  ImageData,
  capitalizeWords,
} from "../../lib/helpers";
import MasonryImage from "./masonryimage";
import CarouselModal from "./carouselmodal";
import { Album } from "../../types/gallery";

interface AlbumPageComponentProps {
  album: Album;
}

const AlbumPage: React.FC<AlbumPageComponentProps> = ({ album }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    const loadImageData = async () => {
      const data = await calculateImageSize(album.images);
      setImageData(data);
    };

    loadImageData();
  }, [album]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-y-16 items-center justify-center w-full py-12">
      <h1 className="text-3xl font-bold">
        {capitalizeWords(album.name?.toString().replace(/-/g, " "))}
      </h1>
      <div className="flex flex-col gap-y-16 items-center justify-center w-full py-12">
        <div className="masonry w-[90%] max-w-[1300px]">
          {imageData.map((img, index) => (
            <MasonryImage
              key={img.src.src}
              img={img}
              index={index}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <CarouselModal
          images={album.images}
          currentIndex={currentImageIndex}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AlbumPage;
