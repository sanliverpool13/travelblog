import React from "react";
import { BlogContainer, BlogPostsGrid, SkeletonPostContainer } from "./style";

import Post from "./BlogPostCard";

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
    <BlogContainer>
      <BlogPostsGrid>{blogPostElements}</BlogPostsGrid>
    </BlogContainer>
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
