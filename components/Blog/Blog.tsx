"use client";
import React from "react";
import Post from "./BlogPostCard";
import { motion } from "framer-motion";
import { containerVariants } from "../../lib/framer-motion";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  posts: string;
}

const Blog: React.FC<Props> = ({ posts }) => {
  const parsedPosts = JSON.parse(posts);

  const blogPostElements = parsedPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <div className="flex justify-center items-center w-full relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="grid w-[90%] max-w-[1300px] grid-cols-3 gap-16 md:grid-cols-2 sm:grid-cols-1"
      >
        {blogPostElements}
      </motion.div>
    </div>
  );
};

// const PostSkeleton = () => {
//   return (
//     <SkeletonPostContainer>
//       <div>
//         <Skeleton />
//       </div>
//       <div>
//         <Skeleton />
//       </div>
//       <div>
//         <Skeleton height={310} width={"100%"} />
//       </div>
//       <div>
//         <Skeleton count={5} />
//       </div>
//     </SkeletonPostContainer>
//   );
// };

export default Blog;
