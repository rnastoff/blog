export interface Category {
  name: string;
  slug: string;
}

export interface PostPrev {
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: Category[]
}

export interface PostPreviews {
  posts: PostPrev[]
}