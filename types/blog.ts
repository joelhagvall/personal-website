export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}
