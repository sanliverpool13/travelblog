import { Client } from "@notionhq/client";
import { getClientPage } from "../helpers/blog.helpers";
import { Post, Page} from "../types/blog.types";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN_BLOG,
});

export const queryBlogDatabase = async (): Promise<Post[]> => {
  try {
    let blog_database_query;
    const mappedForClientPages: Post[] = [];
    blog_database_query = await notion.databases.query({
      database_id: process.env.BLOG_DATABASE_ID
        ? process.env.BLOG_DATABASE_ID
        : "",
      filter: {
        property: "Status",
        select: {
          does_not_equal: "Draft",
        },
      },
    });

    // map the results to client page objects - they have only the necessary components
    await blog_database_query.results.reduce(async (promise, page: Page) => {
      await promise;
      const clientPage: Post = await getClientPage(page);
      mappedForClientPages.push(clientPage);
    }, Promise.resolve());

    console.log(mappedForClientPages)

    return mappedForClientPages;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const retrievePage = async (page_id: string) => {
  try {
    const response = await notion.pages.retrieve({ page_id });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/*
 I need to retrieve the page content separatly,
 using the url: 
 https://api.notion.com/v1/blocks/{block_id}/children
 The block id is the page id we receive when we
 query the database for page items.
*/
export const retrievePageContent = async (id: string) => {
  try {
    let response = await notion.blocks.children.list({
      block_id: id,
    });
    return response.results;
  } catch (error) {
    console.log(error);
    return error;
  }
};
