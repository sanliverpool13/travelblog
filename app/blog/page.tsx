import "server-only";
// import React from "react";
import Blog from "../../components/Blog/Blog";
import { queryBlogDatabase } from "../../lib/blog";
import PageLayout from "../../components/pagelayout";

const BlogPage = async () => {
  const posts = await queryBlogDatabase();
  return (
    <PageLayout>
      <Blog posts={JSON.stringify(posts)} />
    </PageLayout>
  );
};

export default BlogPage;
