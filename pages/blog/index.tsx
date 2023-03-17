import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Blog from "../../components/Blog/Blog";
import { queryBlogDatabase } from "../../lib/blog";

interface Props {
  posts: string;
}

const index: React.FC<Props> = ({ posts }) => {
  return <Blog posts={posts} />;
};

export const getStaticProps = async () => {
  const posts = await queryBlogDatabase();

  return {
    props: {
      posts: JSON.stringify(posts),
    },
  };
};

export default index;
