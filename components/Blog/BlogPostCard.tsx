import React, { Suspense, useEffect } from "react";
import Image from "next/image";
import {
  BlogPostContainer,
  BlogPostExcerpt,
  BlogPostHeader,
  BlogPostImageContainer,
  BlogPostSubHeader,
  BlogPostTags,
  SubheaderBlock,
  Tag,
} from "./style";
import { BlogPost } from "../../context/types";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

interface Props {
  post: BlogPost;
}

const Post: React.FC<Props> = ({ post }) => {
  const { id, title, date, readTime, intro, imageUrl, category } = post;

  return (
    <Link
      href={`/blog/${id}?title=${encodeURIComponent(
        title
      )}&date=${encodeURIComponent(date)}&readtime=${encodeURIComponent(
        readTime
      )}`}
    >
      <BlogPostContainer>
        <BlogPostHeader>{title}</BlogPostHeader>
        <BlogPostSubHeader>
          <SubheaderBlock>
            <span>{date}</span>
          </SubheaderBlock>
          <SubheaderBlock>&#9679;</SubheaderBlock>
          <SubheaderBlock>
            <span>{readTime}</span>
          </SubheaderBlock>
        </BlogPostSubHeader>
        <BlogPostImageContainer>
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            onLoad={() => console.log("Next js on load")}
            onLoadingComplete={() => console.log("Next js image loaded")}
            // placeholder="blur"
          />
        </BlogPostImageContainer>
        <BlogPostExcerpt>{intro}</BlogPostExcerpt>
        <BlogPostTags>
          <Tag>{category}</Tag>
        </BlogPostTags>
      </BlogPostContainer>
    </Link>
  );
};

export default Post;
