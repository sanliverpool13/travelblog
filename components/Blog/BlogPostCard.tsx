"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Post as PostType } from "../../types/blog.types";
import { itemVariants } from "../../lib/framer-motion";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const { id, title, date, readTime, intro, imageUrl, category, slug } = post;

  return (
    <Link href={`/blog/${id}`} className="no-underline">
      <div className="relative mb-16 max-w-[800px] flex flex-col cursor-pointer">
        <motion.h2
          variants={itemVariants}
          className="flex items-center text-2xl text-gray-800"
        >
          {title}
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-sm mb-2 flex items-center py-2 text-gray-800"
        >
          <div className="mr-2 flex items-center">
            <span>{date}</span>
          </div>
          <div className="mr-2 flex items-center">
            <span>&#9679;</span>
          </div>
          <div className="flex items-center">
            <span>{readTime}</span>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative w-full h-[310px]"
        >
          <Image
            src={imageUrl}
            fill
            style={{ objectFit: "cover" }}
            alt="img"
            priority
            className="rounded-lg"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="py-4 text-gray-500 w-full leading-6 overflow-hidden flex-grow"
        >
          {intro}
        </motion.div>
        <motion.div variants={itemVariants} className="w-full flex">
          <div className="mr-4 rounded-lg bg-clr-trqse py-2 px-3 text-xs h-6 flex justify-center items-center text-gray-800">
            {category[0]}
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Post;
