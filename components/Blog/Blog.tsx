import React, { Suspense, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  BlogContainer,
  BlogPostsGrid,
  Loading,
  SkeletonPostContainer,
} from "./style";
import { blogPostsState } from "../../context/state";
import Post from "./BlogPostCard";
import axios from "axios";
import { browserDB } from "../../cache";
import { BlogPost } from "../../context/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useRecoilState(blogPostsState);
  const [isLoading, setIsLoading] = useState(true);

  const getPostsFromBrowserDB = async () => {
    let postsInBroswerDB = await browserDB.posts.toArray();
    return postsInBroswerDB;
  };

  const getBlogPostFromNotion = async () => {
    let url = `https://notion-api-for-blog.vercel.app/api/blog/travelblog`;
    return await axios.post(url, {});
  };

  const saveBlogPostToBrowserDB = async (post: BlogPost) => {
    const { id, title, date, readTime, intro, imageUrl, category } = post;
    try {
      const dbId = await browserDB.posts.add({
        id,
        title,
        date,
        readTime,
        intro,
        imageUrl,
        category,
      });
      console.log(`Saved data successfully with id: ${dbId}`);
    } catch (error) {
      console.log(`There was an error saving data to dexie db: ${error}`);
    }
  };

  const saveAllPostsToBrowserDB = (posts: BlogPost[]) => {
    posts.forEach((post) => {
      saveBlogPostToBrowserDB(post);
    });
  };

  useEffect(() => {
    getPostsFromBrowserDB()
      .then((resp) => {
        if (!resp.length) {
          console.log("making api call since IDB array is empty");
          getBlogPostFromNotion()
            .then((resp) => {
              setBlogPosts(resp.data);
              // Only time I need to save the data to IndexDB is right after I get it
              // from the api
              saveAllPostsToBrowserDB(resp.data);
              setIsLoading(false);
            })
            .catch((err) => console.log(err));
        } else {
          setBlogPosts(resp);
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const blogPostElements = blogPosts.map((post) => {
    return <Post key={post.id} post={post} />;
  });

  const generateLoadingSkeletons = () => {
    let skeletonArray = [];
    for (let i = 0; i < 3; i++) {
      skeletonArray.push(<PostSkeleton />);
    }

    return skeletonArray;
  };

  return (
    <BlogContainer>
      <BlogPostsGrid>
        {isLoading && !blogPostElements.length
          ? generateLoadingSkeletons()
          : blogPostElements}
      </BlogPostsGrid>
      {/* <LoadingContainer /> */}
    </BlogContainer>
  );
};

const PostSkeleton = () => {
  return (
    <SkeletonPostContainer>
      <div>
        <Skeleton />
      </div>
      <div>
        <Skeleton />
      </div>
      <div>
        <Skeleton height={310} width={"100%"} />
      </div>
      <div>
        <Skeleton count={5} />
      </div>
    </SkeletonPostContainer>
  );
};

export default Blog;
