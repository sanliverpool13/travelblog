import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { browserDB } from "../../cache";
import { currentPostState } from "../../context/state";
import { Block, Image as ImageType, Paragraph } from "../../context/types";
import { isBlockObjectImage } from "../helpers";
import {
  ContentParagraph,
  ImageCaption,
  PostArticle,
  PostImageContainer,
  PostSubHeader,
  PostTitle,
  ReturnButton,
  SubheaderBlock,
  SubHeaderItem,
} from "./post.style";

const Post: React.FC = () => {
  const router = useRouter();

  const { slug, title, date, readtime } = router.query;

  const [blocks, setBlocks] = useState<Block[]>([]);

  const getPostContentFromBrowserDB = async (postId: string) => {
    const DBid = await browserDB.post_content
      .where("id")
      .equalsIgnoreCase(postId)
      .toArray();
    return DBid;
  };

  const savePostContentToBrowserDB = async (
    id,
    title,
    date,
    readTime,
    content_blocks: Block[]
  ) => {
    try {
      const BrowserDBId = await browserDB.post_content.add({
        id,
        title,
        date,
        readTime,
        content_blocks,
      });
      console.log(`Post content with id: ${BrowserDBId} saved successfully`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (slug) {
      // First make call to IndexDB to check if there is already data with that id
      getPostContentFromBrowserDB(slug as string)
        .then((resp) => {
          // We have data saved in cache
          if (resp.length) {
            setBlocks(resp[0].content_blocks);
          } else {
            // We have to make the api call since no data in cache
            const url = `https://notion-api-for-blog.vercel.app/api/blog/post/${slug}`;
            axios
              .get(url)
              .then((resp) => {
                setBlocks(resp.data);
                // And save data to cache
                savePostContentToBrowserDB(
                  slug,
                  title,
                  date,
                  readtime,
                  resp.data
                );
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [slug]);

  const contentElements = blocks.map((block) => {
    if (!isBlockObjectImage(block.type)) {
      return (
        <ContentParagraph key={block.id}>
          {(block.block_object as Paragraph).rich_text[0].plain_text}
        </ContentParagraph>
      );
    }
    if (isBlockObjectImage(block.type)) {
      return (
        <div key={block.id}>
          <PostImageContainer>
            <Image
              src={(block.block_object as ImageType).file.url}
              layout="fill"
              objectFit="cover"
            />
          </PostImageContainer>
          <ImageCaption>
            {(block.block_object as ImageType).caption[0].plain_text}
          </ImageCaption>
        </div>
      );
    }
  });

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
          <SubHeaderItem>{`${readtime} read`}</SubHeaderItem>
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
