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
import Link from "next/link";
import { Post as PostType } from "../../types/blog.types";

interface Props {
  post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
  const { id, title, date, readTime, intro, imageUrl, category } = post;

  return (
    <Link href={`/blog/${id}`}>
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
            fill
            style={{ objectFit: "cover" }}
            alt="img"
            priority
          />
        </BlogPostImageContainer>
        <BlogPostExcerpt>{intro}</BlogPostExcerpt>
        <BlogPostTags>
          <Tag>{category[0]}</Tag>
        </BlogPostTags>
      </BlogPostContainer>
    </Link>
  );
};

export default Post;
