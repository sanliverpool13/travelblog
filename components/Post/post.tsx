import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  Column as ColumnType,
  ColumnList as ColumnListType,
  ContentBlock,
  ContentBlocks,
  Heading_3,
  ImageBlock,
  Paragraph,
} from "../../types/blog.client_types";
import { Post as PostType } from "../../types/blog.types";

interface Props {
  post: ContentBlocks;
  clientPage: PostType;
}

const Post: React.FC<Props> = ({ post, clientPage }) => {
  const { date, readTime, title, lastEdited } = clientPage;

  const getElement = (block: ContentBlock): React.ReactNode => {
    let element: React.ReactNode = null;
    switch (block.type) {
      case "heading_3":
        let hBlock = block as Heading_3;
        element = (
          <h3 key={hBlock.id} className="text-gray-800 font-bold text-2xl mt-6">
            {hBlock.heading_3}
          </h3>
        );
        break;
      case "paragraph":
        let pBlock = block as Paragraph;
        element = (
          <p key={pBlock.id} className="text-gray-800 text-lg leading-8">
            {pBlock.paragraph}
          </p>
        );
        break;
      case "image":
        let imageBlock = block as ImageBlock;
        let imageType = imageBlock.image.imageType
          ? imageBlock.image.imageType
          : null;
        element = (
          <div key={imageBlock.id} className="">
            <div
              className={`relative w-full ${
                imageBlock.image.imageType === "h"
                  ? "h-80"
                  : imageBlock.image.column
                    ? "h-64"
                    : "h-[800px]"
              } ${imageBlock.image.caption ? "mb-0" : "mb-0"}`}
            >
              <Image
                src={imageBlock.image.imageUrl}
                fill
                style={{ objectFit: "cover" }}
                alt="post img"
                priority
                className="rounded-lg"
              />
            </div>
            {imageBlock.image.caption && (
              <p className="text-center text-gray-800 text-sm py-4 mb-0">
                {imageBlock.image.caption}
              </p>
            )}
          </div>
        );
        break;
      case "empty_block":
        element = <div key={block.id} className="w-full h-8"></div>;
        break;
      case "column_list":
        let columnList = block as ColumnListType;
        let columnListElements = columnList.column_list.map((col) =>
          getElement(col),
        );
        element = (
          <div key={columnList.id} className="grid grid-cols-2 gap-4">
            {columnList.column_list.map((col) => getElement(col))}
          </div>
        );
        break;
      case "column":
        let column = block as ColumnType;
        let columnElements = column.column.map((col) => getElement(col));
        element = (
          <div key={column.id} className="w-full h-full text-left">
            {column.column.map((col) => getElement(col))}
          </div>
        );
        break;
      default:
        element = null;
    }

    return element;
  };

  const contentElements = post.length && post.map((block) => getElement(block));

  return (
    <div className="w-[90%] max-w-2xl mx-auto pt-20">
      {/* Back to All Posts */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="text-gray-500 text-sm flex items-center gap-2"
        >
          <span>&larr;</span> Back to All Posts
        </Link>
      </div>

      <header className="flex flex-col gap-4 mb-16">
        <h2 className="text-gray-800 text-5xl">{title}</h2>
        <p className="text-gray-800 text-sm">
          {`Published ${date} • Last Updated ${lastEdited} • ${readTime} read`}
        </p>
      </header>

      <article className=" flex flex-col gap-6 mb-8">{contentElements}</article>

      {/* <Link
        href="/blog"
        className="text-gray-800 cursor-pointer text-lg flex items-center gap-2"
      >
        <span>&larr;</span> Back to All Posts
      </Link> */}
    </div>
  );
};

export default Post;
