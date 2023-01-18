import React from "react";
import { useRecoilState } from "recoil";
import { PostsContainer, ComingSoonContainer } from "./style";
import { blogPostsState } from "../../context/state";
import Post from "./BlogPost";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return (
    <ComingSoonContainer>
      <p>Work In Progress. Excited to share some blog posts with you soon!</p>
    </ComingSoonContainer>
  );
};

export default Blog;
