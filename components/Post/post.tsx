import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { browserDB } from "../../cache";
import { currentPostState } from "../../context/state";
import { Block, Image as ImageType } from "../../context/types";
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
                layout="fill"
                objectFit="cover"
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

  // const [blocks, setBlocks] = useState<Block[]>([]);

  // const getPostContentFromBrowserDB = async (postId: string) => {
  //   const DBid = await browserDB.post_content
  //     .where("id")
  //     .equalsIgnoreCase(postId)
  //     .toArray();
  //   return DBid;
  // };

  // const savePostContentToBrowserDB = async (
  //   id,
  //   title,
  //   date,
  //   readTime,
  //   content_blocks: Block[]
  // ) => {
  //   try {
  //     const BrowserDBId = await browserDB.post_content.add({
  //       id,
  //       title,
  //       date,
  //       readTime,
  //       content_blocks,
  //     });
  //     console.log(`Post content with id: ${BrowserDBId} saved successfully`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   if (slug) {
  //     // First make call to IndexDB to check if there is already data with that id
  //     getPostContentFromBrowserDB(slug as string)
  //       .then((resp) => {
  //         // We have data saved in cache
  //         if (resp.length) {
  //           setBlocks(resp[0].content_blocks);
  //         } else {
  //           // We have to make the api call since no data in cache
  //           const url = `https://notion-api-for-blog.vercel.app/api/blog/post/${slug}`;
  //           axios
  //             .get(url)
  //             .then((resp) => {
  //               setBlocks(resp.data);
  //               // And save data to cache
  //               savePostContentToBrowserDB(
  //                 slug,
  //                 title,
  //                 date,
  //                 readtime,
  //                 resp.data
  //               );
  //             })
  //             .catch((err) => console.log(err));
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [slug]);

  // const contentElements = blocks.map((block) => {
  //   if (!isBlockObjectImage(block.type)) {
  //     return (
  //       <ContentParagraph key={block.id}>
  //         {(block.block_object as Paragraph).rich_text[0].plain_text}
  //       </ContentParagraph>
  //     );
  //   }
  //   if (isBlockObjectImage(block.type)) {
  //     return (
  //       <div key={block.id}>
  //         <PostImageContainer>
  //           <Image
  //             src={(block.block_object as ImageType).file.url}
  //             layout="fill"
  //             objectFit="cover"
  //           />
  //         </PostImageContainer>
  //         <ImageCaption>
  //           {(block.block_object as ImageType).caption[0].plain_text}
  //         </ImageCaption>
  //       </div>
  //     );
  //   }
  // });

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
      <Link href="/blog">
        <ReturnButton>Return To Blog</ReturnButton>
      </Link>
    </PostArticle>
  );
};

export default Post;
