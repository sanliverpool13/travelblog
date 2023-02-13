// Will be using IndexDB to store api data in the browser
import Dexie, { Table } from "dexie";
import { Block } from "../context/types";

export interface BlogList {
  IDBid?: number;
  id: string;
  title: string;
  date: string;
  readTime: string;
  intro: string;
  imageUrl: string;
  category: string;
}

export interface PostContent {
  BrowserDBId?: string;
  id: string;
  title: string;
  date: string;
  readTime: string;
  content_blocks: Block[];
}

export class MySubClassedDexie extends Dexie {
  posts!: Table<BlogList>;
  post_content!: Table<PostContent>;

  constructor() {
    super("Blog List");
    this.version(1).stores({
      posts: "++IDBid,id,title,date,readTime,intro,imageUrl,category",
      post_content: "++BrowserDBId,id,title,date,readTime,content_blocks",
    });
  }
}

export const browserDB = new MySubClassedDexie();
