import { retrievePageContent } from "../lib/blog";
import { ContentBlock } from "../types/blog.client_types";
import { Page, Post, RichText } from "../types/blog.types";
import { v2 as cloudinary } from "cloudinary";
import redis from "../lib/redis";
import { REDIS_TRAVEL_IMAGES_MAP, TRAVEL_SLUG_ID_MAP } from "../constants";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Map property objects of notion blog page items for client side
export const getClientPage = async (page: Page): Promise<Post> => {
  const thumbnailUrl = page.properties.Thumbnail.files[0]?.file?.url ?? null;
  const cloudinaryImgUrl = await getCloudinaryThumbnail(thumbnailUrl);

  const lastEditedDate = new Date(
    page.properties["Last edited time"].last_edited_time,
  );
  const formattedLastEditedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(lastEditedDate);

  return {
    id: page.id,
    url: page.url,
    title: page.properties.Name.title[0].plain_text,
    category: page.properties.Category.multi_select.map((tag) => tag.name),
    date: page.properties.Date.rich_text[0].plain_text,
    intro: page.properties.Intro.rich_text[0].plain_text,
    readTime: page.properties.ReadTime.rich_text[0].plain_text,
    imageUrl: cloudinaryImgUrl,
    slug: page.properties.Slug.rich_text[0].plain_text,
    status: page.properties.Status.select.name,
    lastEdited: formattedLastEditedDate,
  };
};

export const convertContentToClient = async (
  content: any,
  column?: boolean,
): Promise<ContentBlock> => {
  // create empty object first based on content
  let mappedObject: any = {
    id: content.id,
    lastEdited: content.last_edited_time,
    type: content.type,
  };

  // Now we check the type
  // If it is not a column list or a column
  switch (content.type) {
    case "paragraph":
      let richText = content.paragraph.rich_text;
      if (richText.length) {
        mappedObject["paragraph"] = getParagraphText(richText);
      } else {
        // We set the type of block and block property differently
        mappedObject.type = "empty_block";
        // No need to set property actually. The type is enough
      }
      break;
    case "image":
      // console.log("image here");
      // // Testing fetching image and its readable stream
      // const img64 = await downloadImageToBase64(content.image.file.url);
      // const cldUrl = await uploadToCloudinary(img64);

      const thumbnailUrl = content.image.file
        ? content.image.file.url
        : content.image.external.url;
      let cloudinaryImgUrl = await getCloudinaryThumbnail(thumbnailUrl);

      let imgObject: any = {
        imageUrl:
          process.env.NODE_ENV === "development"
            ? content.image.file.url
            : cloudinaryImgUrl,
      };
      if (column) {
        imgObject["column"] = true;
      }
      if (content.image.caption.length) {
        let imageType = content.image.caption[0].plain_text.substring(0, 1);
        imgObject["caption"] = column
          ? content.image.caption[0].plain_text
          : content.image.caption[0].plain_text.substring(2);
        imgObject["imageType"] = imageType;
      }
      mappedObject["image"] = imgObject;
      break;
    case "heading_3":
      mappedObject["heading_3"] = content.heading_3.rich_text[0].plain_text;
      break;
    case "column_list":
      // make another block retrieval
      let columnListContent = await retrievePageContent(content.id);
      let columnListObject: ContentBlock[] = [];

      await columnListContent.reduce(async (promise, column) => {
        await promise;
        let convertedColumn = await convertContentToClient(column);
        columnListObject.push(convertedColumn);
      }, Promise.resolve());
      mappedObject["column_list"] = columnListObject;
      break;
    case "column":
      // make another block retrieval
      let columnContent = await retrievePageContent(content.id);
      let columnObject: ContentBlock[] = [];

      await columnContent.reduce(async (promise, block) => {
        await promise;
        let convertedblock = await convertContentToClient(block, true);
        columnObject.push(convertedblock);
      }, Promise.resolve());

      mappedObject["column"] = columnObject;
      break;
  }

  return mappedObject;
};

export const getParagraphText = (richTextArray: Array<RichText>) => {
  let text = "";
  // parse the array and combine the different plain texts together.
  richTextArray.forEach((richText) => {
    text = text.concat("", richText.plain_text);
  });

  return text;
};

export const downloadImage = async (imageUrl: string) => {
  const imageAsset = await fetch(imageUrl);
  const imageBlob = await imageAsset.blob();
  let urlCreator = window.URL || window.webkitURL;
  let imgUrlFromBlob = urlCreator.createObjectURL(imageBlob);
};

export const downloadImageToBase64 = async (url: string): Promise<string> => {
  const res = await fetch(url);
  const result = await res.arrayBuffer();
  const img = Buffer.from(result).toString("base64");
  return img;
};

export const uploadToCloudinary = async (
  imgBase64: string,
): Promise<string> => {
  const { secure_url: imageExternalUrl } = await cloudinary.uploader.upload(
    `data:image/jpeg;base64,${imgBase64}`,
  );

  return imageExternalUrl ? imageExternalUrl : "";
};

export const readRedisCache = async () => {
  const cache = await redis.get(REDIS_TRAVEL_IMAGES_MAP);
  return cache || {};
};

export const updateRedisCache = async (key: string, value: string) => {
  // Update the Redis cache with a new Cloudinary URL
  await redis.hset(REDIS_TRAVEL_IMAGES_MAP, { [key]: value });
};

export const extractS3Key = (awsUrl: any): string => {
  let url;
  if (typeof awsUrl === "string") {
    url = new URL(awsUrl);
  } else {
    url = new URL(awsUrl.url);
  }
  // Extract the path portion of the URL (everything after the bucket name)
  return url.pathname;
};

export const getCloudinaryThumbnail = async (
  thumbnailUrl: string | null,
): Promise<string> => {
  if (!thumbnailUrl) return "";

  // Step 1: Extract the S3 Object key
  const cacheKey = extractS3Key(thumbnailUrl);

  let cloudinaryImgUrl = await redis.hget(REDIS_TRAVEL_IMAGES_MAP, cacheKey);

  if (!cloudinaryImgUrl) {
    // Step 3: Download the image from AWS
    const imageBuffer = await downloadImageFromAWS(thumbnailUrl);

    // Step 4: Upload the buffer to Cloudinary
    cloudinaryImgUrl = await uploadBufferToCloudinary(
      imageBuffer,
      "travelblog",
    );

    // Step 5: Update the Redis cache
    await redis.hset(REDIS_TRAVEL_IMAGES_MAP, { [cacheKey]: cloudinaryImgUrl });
  }
  return `${cloudinaryImgUrl}`;
};

export const downloadImageFromAWS = async (awsUrl: string): Promise<Buffer> => {
  const response = await fetch(awsUrl, {
    cache: "no-store", // Disable caching
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch resource ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export const uploadBufferToCloudinary = async (
  imageBuffer: Buffer,
  folderName: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folderName },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result?.secure_url || "");
      },
    );
    uploadStream.end(imageBuffer);
  });
};

export const saveSlugToRedis = async (mappedContent: Post[]) => {
  try {
    // transform mapped content Post array to slug id map
    const slugIdMap = mappedContent.reduce<Record<string, Post>>(
      (acc, page) => {
        acc[page.slug] = page;
        return acc;
      },
      {},
    );
    // Save the map to Redis
    await redis.set(TRAVEL_SLUG_ID_MAP, JSON.stringify(slugIdMap));
  } catch (error) {
    console.log(error);
  }
};

export const getSlugIdMapFromRedis = async () => {
  try {
    const slugIdMap = await redis.get(TRAVEL_SLUG_ID_MAP);

    return slugIdMap ? JSON.parse(JSON.stringify(slugIdMap) as string) : {};
  } catch (error) {
    console.log(error);
  }
};
