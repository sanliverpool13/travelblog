// I need to have the types received from Notion

interface userObject {
  object: string;
  id: string;
}

interface PageProperty {
  id: string;
  type: string;
}

interface SelectOption {
  id: string;
  name: string;
  color: string;
}

interface MultiSelect extends PageProperty {
  multi_select: Array<SelectOption>;
}

interface Select extends PageProperty {
  select: SelectOption;
}

interface CreatedTime extends PageProperty {
  created_time: string;
}

interface LastEditedTime extends PageProperty {
  last_edited_time: string;
}

interface File {
  name: string;
  type: string;
  file: { url: string; expiry_time: string };
}

interface Thumbnail extends PageProperty {
  files: Array<File>;
}

interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText {
  type: string;
  text: { content: string; link: null };
  annotations: Annotations;
  plain_text: string;
  href: null;
}

interface TextProperty extends PageProperty {
  rich_text: Array<RichText>;
}

interface TitleProperty extends PageProperty {
  title: Array<RichText>;
}

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: userObject;
  last_edited_by: userObject;
  cover: null;
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    Category: MultiSelect;
    Created: CreatedTime;
    Thumbnail: Thumbnail;
    Date: TextProperty;
    Intro: TextProperty;
    ReadTime: TextProperty;
    Name: TitleProperty;
    Slug: TextProperty;
    Status: Select;
    Last_edited_time: LastEditedTime;
  };
  url: string;
}

export interface Post {
  id: string;
  url: string;
  title: string;
  category: Array<string>;
  date: string;
  intro: string;
  readTime: string;
  imageUrl: string;
  slug: string;
  status: string;
  lastEdited: string;
}

export interface Block {
  object: string;
  id: string;
  parent: { type: string; page_id: string };
  created_time: string;
  last_edited_time: string;
  created_by: userObject;
  last_edited_by: userObject;
  has_children: boolean;
  archived: boolean;
  type: string;
}

export interface H3_Block {
  rich_text: Array<RichText>;
  is_toggleable: boolean;
  color: string;
}

export interface P_Block {
  rich_text: Array<RichText>;
  color: string;
}

export interface Img_Block {
  caption: Array<RichText>;
  type: string;
  file: { url: string; expiry_time: string };
}

export interface Heading_3 extends Block {
  heading_3: H3_Block;
}

export interface Paragraph extends Block {
  paragraph: P_Block;
}

export interface Image extends Block {
  image: Img_Block;
}

export interface ColumnList extends Block {
  column_list: {};
}

export interface Column extends Block {
  column: {};
}

// Database Query Response Object
export interface DatabaseQueryResponse {
  object: string;
  results: Array<Page>;
  next_cursor: string;
  has_more: boolean;
  type: string;
  page: {};
}
