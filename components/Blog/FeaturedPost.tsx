import Image from "next/image";
import React from "react";
import {
  ContentDescription,
  ContentHeader,
  ContentSubHeader,
  PostContainer,
  PostContent as Content,
  PostGrid,
  PostImageContainer,
  SubHeaderAuthor,
  SubHeaderDate,
  SubHeaderReadTime,
} from "./style";
import { BlogPost } from "../../context/types";

interface Props {
  post: BlogPost;
}

const Post: React.FC<Props> = ({ post }) => {
  const { title, author, date, readtime, description, image } = post;

  return (
    <PostContainer>
      <PostGrid>
        <PostContent content={{ title, author, date, readtime, description }} />
        <PostImage imageUrl={image} />
      </PostGrid>
    </PostContainer>
  );
};

interface ContentProps {
  content: {
    title: string;
    author: string;
    date: string;
    readtime: string;
    description: string;
  };
}

const PostContent: React.FC<ContentProps> = ({ content }) => {
  const { title, author, date, readtime, description } = content;
  return (
    <Content>
      <ContentHeader>{title}</ContentHeader>
      <ContentSubHeader>
        <SubHeaderAuthor>{author}</SubHeaderAuthor>
        <SubHeaderDate>{date}</SubHeaderDate>
        <SubHeaderReadTime>{readtime}</SubHeaderReadTime>
      </ContentSubHeader>
      <ContentDescription>{description}</ContentDescription>
    </Content>
  );
};

interface imageProps {
  imageUrl: string;
}
const PostImage: React.FC<imageProps> = ({ imageUrl }) => {
  return (
    <PostImageContainer>
      <Image src={imageUrl} alt="Cirque Peak" layout="fill" objectFit="cover" />
    </PostImageContainer>
  );
};

export default Post;
