"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ExampleImg from "../../public/images/HorViewCirquePeak.jpg";
import AlbumCard from "./albumcard";
import { Album } from "../../types/gallery"; // Import the Album type

interface GalleryProps {
  albums: Album[];
}

const ScrollFadeImage = ({ yTransform, opacityTransform }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 500], [1, 0]);
  const y = useTransform(scrollY, [100, 500], [0, -200]);
  return (
    <motion.div
      style={{ opacity }}
      className="relative w-full md:h-[70vw] lg:h-[60vw] h-[90vh] overflow-hidden"
    >
      <Image
        src={ExampleImg}
        alt="Eye-catching image"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col gap-y-4 justify-center items-center bg-opacity-50">
        <h1 className="md:text-8xl text-5xl font-bold text-center text-white">
          GALLERY
        </h1>
        <p className="text-xl text-center text-white">
          A collection of photo albums from all of our adventures
        </p>
      </div>
    </motion.div>
  );
};

const Gallery: React.FC<GalleryProps> = ({ albums }) => {
  const { scrollY } = useScroll();
  const opacityFadeOutTransform = useTransform(scrollY, [100, 300], [1, 0]);
  const yTransform = useTransform(scrollY, [100, 500], [0, -70]);

  // Section transformations
  const sectionOpacity = useTransform(scrollY, [200, 500], [0, 1]);
  const sectionY = useTransform(scrollY, [200, 500], [200, -70]);

  return (
    <div className="flex flex-col gap-y-8 items-center w-full">
      <section className="flex flex-col gap-y-16 items-center w-full mb-12">
        <ScrollFadeImage
          yTransform={yTransform}
          opacityTransform={opacityFadeOutTransform}
        />
      </section>
      <motion.div
        className="flex flex-col items-center w-[90%] max-w-[1300px]"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        <section className="flex flex-col items-center gap-y-24 justify-center w-full">
          <h2 className="text-5xl font-bold">Adventure Albums</h2>
          <div className="grid gap-16 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {albums &&
              albums.map((album, index) => (
                <AlbumCard key={album.name} album={album} index={index} />
              ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Gallery;
