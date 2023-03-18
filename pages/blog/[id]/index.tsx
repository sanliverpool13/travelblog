import { GetStaticPaths } from "next";
import React from "react";
import Post from "../../../components/Post/post";
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
import { Post as PostType } from "../../../types/blog.types";

interface Props {
  post: Array<any>;
  clientPage: PostType;
}

const BlogPost: React.FC<Props> = ({ post, clientPage }) => {
  return <Post post={post} clientPage={clientPage} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await queryBlogDatabase();
  console.log("posts inside static paths");
  console.log(posts);

  const paths = posts.map((post) => ({
    params: {
      id: post.id,
    },
  }));

  return {
    paths,
    fallback: false, // other routes will go to 404
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
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
    props: { post: contentObject, clientPage },
  };
};

export default BlogPost;
