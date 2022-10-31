import React from "react";
import { useRecoilState } from "recoil";
import { PostsContainer } from "./style";
import { blogPostsState } from "../../context/state";
import Post from "./BlogPost";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  return <PostsContainer>Coming Soon!</PostsContainer>;
};

export default Blog;
