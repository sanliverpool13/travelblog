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
      className="flex flex-col md:gap-y-8 gap-y-4"
    >
      <Link
        href={`/gallery/${album.name.toLowerCase().replace(/\s+/g, "-")}`}
        legacyBehavior
        passHref
      >
        <a className="relative cursor-pointer hover:opacity-75 hover:brightness-75 transition duration-300">
          <Image
            src={album.coverImage}
            alt={album.name}
            width={600}
            height={600}
            className="object-cover rounded-lg"
          />
        </a>
      </Link>
      <h2 className="text-2xl font-semibold">{album.name}</h2>
    </motion.div>
  );
};

export default AlbumCard;
