import "server-only";
// import React from "react";
import Blog from "../../components/Blog/Blog";
import { queryBlogDatabase } from "../../lib/blog";
import PageLayout from "../../components/pagelayout";
import { saveSlugToRedis } from "../../helpers/blog.helpers";

const BlogPage = async () => {
  const posts = await queryBlogDatabase();
  saveSlugToRedis(posts);
  return (
    <PageLayout>
      <Blog posts={JSON.stringify(posts)} />
    </PageLayout>
  );
};

export default BlogPage;
