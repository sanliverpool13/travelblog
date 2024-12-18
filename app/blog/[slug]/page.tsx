import React from "react";
import Post from "../../../components/Post/post";
import PageLayout from "../../../components/pagelayout";
import {
  convertContentToClient,
  getClientPage,
  getSlugIdMapFromRedis,
} from "../../../helpers/blog.helpers";
import {
  queryBlogDatabase,
  retrievePage,
  retrievePageContent,
} from "../../../lib/blog";
import { ContentBlocks } from "../../../types/blog.client_types";

export const generateStaticParams = async () => {
  // Pre-populated static data from Redis
  const slugIdMap = await getSlugIdMapFromRedis();

  if (!slugIdMap) {
    throw new Error("Redis is not pre-populated with slug data.");
  }
  return Object.keys(slugIdMap).map((slug) => ({
    slug,
  }));
};

const getPost = async (params: { slug: string }) => {
  console.log("get post with params", params);
  const SlugIdMap = await getSlugIdMapFromRedis();
  console.log("slug id map", SlugIdMap);
  const pageObject = SlugIdMap[params.slug];
  const id = pageObject["id"];
  // const page = await retrievePage(id);
  // console.log("page", page);
  // const clientPage = await getClientPage(page);
  // console.log("client page", clientPage);
  const contentBlocks = await retrievePageContent(id);

  // Array to house content blocks
  let contentObject: ContentBlocks = [];
  console.log("before error get post");

  // We convert each block to client shape
  await contentBlocks.reduce(async (promise, block) => {
    await promise;
    let cBlock = await convertContentToClient(block);
    contentObject.push(cBlock);
  }, Promise.resolve());

  console.log("after error");

  return {
    post: contentObject,
    clientPage: pageObject,
  };
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  console.log("post params", params);
  const { post, clientPage } = await getPost(params);
  return (
    <PageLayout>
      <Post post={post} clientPage={clientPage} />
    </PageLayout>
  );
};

export default BlogPost;
