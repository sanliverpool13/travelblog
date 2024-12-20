// components/CarouselModal.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { calculateImageStyles } from "../../lib/helpers";

interface CarouselModalProps {
  images: StaticImageData[];
  currentIndex: number;
  onClose: () => void;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
  images,
  currentIndex,
  onClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [imageStyles, setImageStyles] = useState({ width: 0, height: 0 });

  useEffect(() => {
    calculateImageStyles(images[currentImageIndex].src, setImageStyles);
  }, [currentImageIndex, images]);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100]"
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative z-10 max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-20"
        >
          &times;
        </button>
        {/* <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
        >
          &#10094;
        </button> */}
        <div className="relative flex items-center justify-center">
          <Image
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            width={imageStyles.width}
            height={imageStyles.height}
            className="object-cover"
          />
        </div>
        {/* <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
        >
          &#10095;
        </button> */}
        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`block w-2 h-2 rounded-full ${
                currentImageIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-400 opacity-75"
              }`}
            ></span>
          ))}
        </div> */}
      </div>
    </motion.div>
  );
};

export default CarouselModal;
