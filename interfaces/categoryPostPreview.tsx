export interface Category {
  name: string;
  slug: string;
}

export interface CategoryPostPrev {
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: Category[]
}

export interface CategoryPostPreviews {
  posts: CategoryPostPrev[]
}