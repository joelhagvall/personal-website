export interface MediaItem {
  src: string;
  alt: string;
  title: string;
  year?: number;
  author?: string;
}

export interface MediaSection {
  title: string;
  items: MediaItem[];
}
