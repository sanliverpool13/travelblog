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
import {
  Column,
  ColumnList,
  ContentParagraph,
  EmptyBlock,
  Heading3,
  ImageCaption,
  PostArticle,
  PostImageContainer,
  PostSubHeader,
  PostTitle,
  ReturnButton,
  SubheaderBlock,
  SubHeaderItem,
} from "./post.style";

interface Props {
  post: ContentBlocks;
  clientPage: PostType;
}

const Post: React.FC<Props> = ({ post, clientPage }) => {
  const { date, readTime, title } = clientPage;

  const getElement = (block: ContentBlock): React.ReactNode => {
    let element = null;
    switch (block.type) {
      case "heading_3":
        let hBlock = block as Heading_3;
        element = <Heading3 key={hBlock.id}>{hBlock.heading_3}</Heading3>;
        break;
      case "paragraph":
        let pBlock = block as Paragraph;
        element = (
          <ContentParagraph key={pBlock.id}>
            {pBlock.paragraph}
          </ContentParagraph>
        );
        break;
      case "image":
        let imageBlock = block as ImageBlock;
        let imageType = imageBlock.image.imageType
          ? imageBlock.image.imageType
          : null;

        element = (
          <div key={imageBlock.id}>
            <PostImageContainer
              columnImage={imageBlock.image.column}
              imageType={imageType}
              hasCaption={!!imageBlock.image.caption}
            >
              <Image
                src={imageBlock.image.imageUrl}
                fill
                style={{ objectFit: "cover" }}
                alt="post img"
                priority
              />
            </PostImageContainer>
            {imageBlock.image.caption && (
              <ImageCaption>{imageBlock.image.caption}</ImageCaption>
            )}
          </div>
        );
        break;
      case "empty_block":
        element = <EmptyBlock key={block.id} />;
        break;
      case "column_list":
        // Let's test column width

        let columnList = block as ColumnListType;
        let columnListElements = columnList.column_list.map((col) =>
          getElement(col)
        );
        element = (
          <ColumnList key={columnList.id}>{columnListElements}</ColumnList>
        );
        break;
      case "column":
        let column = block as ColumnType;
        let columnElements = column.column.map((col) => getElement(col));
        element = (
          <Column key={column.id} id="test">
            {columnElements}
          </Column>
        );
        break;
      default:
        element = null;
    }

    return element;
  };

  const contentElements = post.length && post.map((block) => getElement(block));

  return (
    <PostArticle>
      <PostTitle>{title}</PostTitle>
      <PostSubHeader>
        <SubheaderBlock>
          <SubHeaderItem>{date}</SubHeaderItem>
        </SubheaderBlock>
        <SubheaderBlock>
          <SubHeaderItem>&#9679;</SubHeaderItem>
        </SubheaderBlock>
        <SubheaderBlock>
          <SubHeaderItem>{`${readTime} read`}</SubHeaderItem>
        </SubheaderBlock>
      </PostSubHeader>
      {contentElements}
      <Link href="/blog" style={{ textDecoration: "none" }}>
        <ReturnButton>Return To Blog</ReturnButton>
      </Link>
    </PostArticle>
  );
};

export default Post;
