import { atom } from "recoil";
import { BlogPost } from "./types";
import cirquepeak from "../public/images/HorViewCirquePeak.jpg";
import calgaryLibrary from "../public/images/CalgaryLibrary.jpg";
import lakeLouiseSanjar from "../public/images/CalgaryLibrary.jpg";

const tabsState = atom({
  key: "tabsActive",
  default: 0,
});

const image1Url: string = cirquepeak.src;
const image2Url: string = calgaryLibrary.src;
const image3Url: string = lakeLouiseSanjar.src;

const FirstPost: BlogPost = {
  id: 1,
  title: "Visiting Banff For The First Time Changed Our Lives",
  author: "The JeletSetters",
  date: "September 5th, 2022",
  readtime: "4 min read",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image: image1Url,
};
const SecondPost: BlogPost = {
  id: 2,
  title: "The Calgary Central Library is an astounding feat of Architecture.",
  author: "The JeletSetters",
  date: "September 10th, 2022",
  readtime: "5 min read",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image: image2Url,
};

const ThirdPost: BlogPost = {
  id: 3,
  title: "Lake Louise is beautiful, but disappointing.",
  author: "The JeletSetters",
  date: "September 13th, 2022",
  readtime: "6 min read",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image: image3Url,
};

const BlogPostsArray: Array<BlogPost> = [FirstPost, SecondPost, ThirdPost];

// Temporary solution to store blog posts data
const blogPostsState = atom({
  key: "blogPosts",
  default: BlogPostsArray,
});

export { tabsState, blogPostsState };
