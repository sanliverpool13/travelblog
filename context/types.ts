export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  intro: string;
  imageUrl: string;
  category: string;
  blogId?: string;
}

export interface Block {
  id: string;
  type: string;
  block_object: Image | Paragraph;
}

export type ImageOrParagraph = "image" | "paragraph";

export interface Annotation {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichText {
  annotation: Annotation;
  type: string;
  plain_text: string;
}

export interface Paragraph {
  rich_text: Array<RichText>;
  color: string;
}

export interface Image {
  caption: Array<RichText>;
  type: string;
  file: {
    url: string;
    expiry_time: string;
  };
}
