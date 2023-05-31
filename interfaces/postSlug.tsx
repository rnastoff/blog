export interface PostSlug {
  createdAt: string;
  slug: string;
  title: string;
  content: Content;
  categories?: (null)[] | null;
}
export interface Content {
  html: string;
}
