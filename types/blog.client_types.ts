export enum BlockType {
  paragraph = "paragraph",
  heading_3 = "heading_3",
  column = "column",
  column_list = "column_list",
  empty = "empty_block",
  image = "image",
}

export interface PostBlock {
  id: string;
  lastEdited: string;
  type: BlockType;
}

export interface Paragraph extends PostBlock {
  paragraph: string;
}

export interface Heading_3 extends PostBlock {
  heading_3: string;
}

interface ImageProperty {
  imageUrl: string;
  caption?: string;
  column?: boolean;
  imageType?: string;
}

export interface ImageBlock extends PostBlock {
  image: ImageProperty;
}

export interface Column extends PostBlock {
  column: Array<Paragraph> | Array<ImageBlock>;
}

export interface ColumnList extends PostBlock {
  column_list: Array<Column>;
}

export type ContentBlock =
  | Heading_3
  | Paragraph
  | PostBlock
  | ImageBlock
  | ColumnList;

export type ContentBlocks = Array<ContentBlock>;
