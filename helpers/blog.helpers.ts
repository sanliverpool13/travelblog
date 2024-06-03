import { retrievePageContent } from "../lib/blog";
import { ContentBlock } from "../types/blog.client_types";
import { Page, Post, RichText } from "../types/blog.types";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

// Map property objects of notion blog page items for client side
export const getClientPage = async (page: Page): Promise<Post> => {
  // Have to download image to base64, upload to cloudinary and update
  // data here.
  const imgBase64 = await downloadImageToBase64(
    page.properties.Thumbnail.files[0].file.url
  );
  const cldImgUrl = await uploadToCloudinary(imgBase64);

  return {
    id: page.id,
    url: page.url,
    title: page.properties.Name.title[0].plain_text,
    category: page.properties.Category.multi_select.map((tag) => tag.name),
    date: page.properties.Date.rich_text[0].plain_text,
    intro: page.properties.Intro.rich_text[0].plain_text,
    readTime: page.properties.ReadTime.rich_text[0].plain_text,
    imageUrl: cldImgUrl,
    slug: page.properties.Slug.rich_text[0].plain_text,
    status: page.properties.Status.select.name,
  };
};

export const convertContentToClient = async (
  content: any,
  column?: boolean
): Promise<ContentBlock> => {
  // create empty object first based on content
  let mappedObject = {
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
      // Testing fetching image and its readable stream
      const img64 = await downloadImageToBase64(content.image.file.url);
      const cldUrl = await uploadToCloudinary(img64);

      let imgObject = {
        imageUrl:
          process.env.NODE_ENV === "development"
            ? content.image.file.url
            : cldUrl,
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
      let columnListObject = [];

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
      let columnObject = [];

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
  console.log("right here before window error");
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
  imgBase64: string
): Promise<string> => {
  const { secure_url: imageExternalUrl } = await cloudinary.uploader.upload(
    `data:image/jpeg;base64,${imgBase64}`
  );

  return imageExternalUrl ? imageExternalUrl : "";
};
