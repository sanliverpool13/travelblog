import { atom } from "recoil";
import { BlogPost } from "./types";

const tabsState = atom({
  key: "tabsActive",
  default: 0,
});

const BlogPostsArray: Array<BlogPost> = [];

// Temporary solution to store blog posts data
const blogPostsState = atom({
  key: "blogPosts",
  default: BlogPostsArray,
});

const currentPostState = atom({
  key: "currentPost",
  default: { title: "", date: "", readtime: "" },
});

export { tabsState, blogPostsState, currentPostState };
