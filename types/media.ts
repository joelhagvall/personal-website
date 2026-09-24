export interface MediaItem {
  src: string;
  alt: string;
  title: string;
  /** Title as printed on the spine; a newline starts a second column */
  spineTitle?: string;
  year?: number;
  author?: string;
  /** Shelf colors: spine background and text for books and films, disc label for records */
  color: string;
  ink?: string;
}

export interface MediaSection {
  title: string;
  items: MediaItem[];
}
