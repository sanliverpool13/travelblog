import Image from "next/image";
import React from "react";

import {
  BsPerson,
  BsCalendar,
  BsClock,
  BsChevronDoubleRight,
} from "react-icons/bs";

import {
  BlogPostActions,
  BlogPostContainer,
  BlogPostExcerpt,
  BlogPostHeader,
  BlogPostImageContainer,
  BlogPostSubHeader,
  ReadMoreButton,
  SubheaderBlock,
} from "./style";
import { BlogPost } from "../../context/types";

interface Props {
  post: BlogPost;
}

const Post: React.FC<Props> = ({ post }) => {
  const { title, author, date, readtime, description, image } = post;
  return (
    <BlogPostContainer>
      <BlogPostHeader>{title}</BlogPostHeader>
      <BlogPostSubHeader>
        <SubheaderBlock>
          <BsPerson />
          <span>{author}</span>
        </SubheaderBlock>
        <SubheaderBlock>
          <BsCalendar />
          <span>{date}</span>
        </SubheaderBlock>
        <SubheaderBlock>
          <BsClock />
          <span>{readtime}</span>
        </SubheaderBlock>
      </BlogPostSubHeader>
      <BlogPostImageContainer>
        <Image src={image} layout="fill" objectFit="cover" />
      </BlogPostImageContainer>
      <BlogPostExcerpt>{description}</BlogPostExcerpt>
      <BlogPostActions>
        <ReadMoreButton>
          Read More <BsChevronDoubleRight />{" "}
        </ReadMoreButton>
      </BlogPostActions>
    </BlogPostContainer>
  );
};

export default Post;
