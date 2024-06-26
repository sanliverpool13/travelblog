"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface MasonryImageProps {
  img: {
    src: StaticImageData;
    width: number;
    height: number;
  };
  index: number;
  onClick: () => void;
}

const MasonryImage: React.FC<MasonryImageProps> = ({ img, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="masonry-item cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={img.src}
        alt={`Image ${index + 1}`}
        width={img.width}
        height={img.height}
        className="object-cover rounded-lg hover:opacity-75 hover:brightness-75 transition duration-300"
      />
    </motion.div>
  );
};

export default MasonryImage;
