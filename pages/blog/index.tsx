import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Blog from "../../components/Blog/Blog";
import axios from "axios";

interface Props {
  posts: any;
}

const index: React.FC<Props> = ({ posts }) => {
  return <Blog />;
};

export const getStaticProps = async () => {
  // Call an external api to get posts
  let url = `https://notion-api-for-blog.vercel.app/api/blog/travelblog`;
  let results = await axios.post(url, {});

  return {
    props: {
      posts: JSON.stringify(results.data),
    },
  };
};

export default index;
