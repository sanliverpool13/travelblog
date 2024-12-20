import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AlbumCard = ({ album, index }) => {
  return (
    <motion.div
      key={album.name}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex flex-col md:gap-y-8 gap-y-4 mb-4 break-inside-avoid"
    >
      <Link
        href={`/gallery/${album.name.toLowerCase().replace(/\s+/g, "-")}`}
        legacyBehavior
        passHref
      >
        <a className="relative cursor-pointer hover:opacity-90 hover:brightness-90 transition duration-300">
          <div className="relative group w-full overflow-hidden rounded-3xl  shadow-lg">
            <Image
              src={album.coverImage}
              alt={album.name}
              width={600}
              height={600}
              className="object-cover "
            />
            {/* Greyed Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>

            {/* Album Title */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {album.name}
              </h3>
              <p className="text-white text-sm opacity-80">{album.date}</p>
            </div>
          </div>
        </a>
      </Link>
      {/* <h2 className="text-2xl font-semibold">{album.name}</h2> */}
    </motion.div>
  );
};

export default AlbumCard;
