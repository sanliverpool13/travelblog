import React from "react";
import Post from "../../../components/Post/post";
import PageLayout from "../../../components/pagelayout";
import {
  convertContentToClient,
  getClientPage,
} from "../../../helpers/blog.helpers";
import {
  queryBlogDatabase,
  retrievePage,
  retrievePageContent,
} from "../../../lib/blog";
import { ContentBlocks } from "../../../types/blog.client_types";

export const generateStaticParams = async () => {
  const posts = await queryBlogDatabase();

  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));

  return paths;
};

const getPost = async (params: { id: string }) => {
  const page = await retrievePage(params.id);
  const clientPage = await getClientPage(page);
  const contentBlocks = await retrievePageContent(params.id);

  // Array to house content blocks
  let contentObject: ContentBlocks = [];

  // We convert each block to client shape
  await contentBlocks.reduce(async (promise, block) => {
    await promise;
    let cBlock = await convertContentToClient(block);
    contentObject.push(cBlock);
  }, Promise.resolve());

  return {
    post: contentObject,
    clientPage,
  };
};

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const { post, clientPage } = await getPost(params);
  return (
    <PageLayout>
      <Post post={post} clientPage={clientPage} />
    </PageLayout>
  );
};

export default BlogPost;
