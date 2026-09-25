import type { CSSProperties } from "react";
import type { MediaItem } from "@/types/media";
import { BookshelfCase } from "@/components/BookshelfCase";

interface BookshelfProps {
  books: MediaItem[];
  films: MediaItem[];
  records: MediaItem[];
}

// Spine sizes in px at full scale; cover width follows the cover image's ratio
const BOOK = { height: 236, widths: [52, 40] };
const FILM = { height: 204, width: 22 };
const POSTER_RATIO = 2 / 3;
// A standard DVD keep case is 135 x 190 mm
const DVD_RATIO = 135 / 190;
const COVER_RATIOS: Record<string, number> = {
  "/media/imitation-game.webp": 500 / 775,
  "/media/network-state.webp": 500 / 664,
};

function caption(item: MediaItem) {
  const by = item.author ? `${item.author}, ${item.year}` : `${item.year}`;
  return `${item.title} · ${by}`;
}

function Spine({
  item,
  kind,
  width,
  height,
}: {
  item: MediaItem;
  kind: "book" | "film";
  width: number;
  height: number;
}) {
  const coverWidth = Math.round(height * (
    COVER_RATIOS[item.src] ?? (kind === "film" ? DVD_RATIO : POSTER_RATIO)
  ));
  const vars = {
    "--w": `${width}px`,
    "--h": `${height}px`,
    "--cw": `${coverWidth}px`,
    "--color": item.color,
    "--ink": item.ink ?? "#fff",
  } as CSSProperties;

  return (
    <li
      className={`bookshelf-item bookshelf-book ${kind === "film" ? "bookshelf-film" : ""}`}
      style={vars}
    >
      <span
        className="bookshelf-box"
        tabIndex={0}
        role="img"
        aria-label={caption(item)}
      >
        <span className="bookshelf-face bookshelf-spine">
          {kind === "film" && <span className="bookshelf-dvd-logo">DVD</span>}
          <span className="bookshelf-spine-title">{item.spineTitle ?? item.title}</span>
          <span className="bookshelf-spine-meta">
            {kind === "book" ? item.author?.split(" ").at(-1) : item.year}
          </span>
        </span>
        <span className="bookshelf-face bookshelf-cover">
          <img src={item.src} alt="" loading="lazy" decoding="async" />
        </span>
        {kind === "film" && <span className="bookshelf-dvd-disc" />}
      </span>
      <span className="bookshelf-caption" aria-hidden="true">
        {item.title} <span>· {item.author ? `${item.author}, ` : ""}{item.year}</span>
      </span>
    </li>
  );
}

function Record({ item }: { item: MediaItem }) {
  return (
    <li
      className="bookshelf-item bookshelf-record"
      style={{ "--color": item.color } as CSSProperties}
    >
      <span
        className="bookshelf-record-inner"
        tabIndex={0}
        role="img"
        aria-label={caption(item)}
      >
        <span className="bookshelf-disc" />
        <span className="bookshelf-sleeve">
          <img src={item.src} alt="" loading="lazy" decoding="async" />
        </span>
      </span>
      <span className="bookshelf-caption" aria-hidden="true">
        {item.title} <span>· {item.author}, {item.year}</span>
      </span>
    </li>
  );
}

export function Bookshelf({ books, films, records }: BookshelfProps) {
  return (
    <BookshelfCase>
      <div className="bookshelf-shelf">
        <h3 className="bookshelf-label">Books & films</h3>
        <ul className="bookshelf-row" role="list">
          <li className="bookshelf-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </li>
          {books.map((item, index) => (
            <Spine
              key={item.src}
              item={item}
              kind="book"
              width={BOOK.widths[index % BOOK.widths.length]!}
              height={BOOK.height - index * 14}
            />
          ))}
          <li className="bookshelf-bookend" aria-hidden="true" />
          {films.map((item) => (
            <Spine
              key={item.src}
              item={item}
              kind="film"
              width={FILM.width}
              height={FILM.height}
            />
          ))}
          <li className="bookshelf-planet" aria-hidden="true">
            <span className="bookshelf-planet-body" />
            <span className="bookshelf-planet-stand" />
          </li>
        </ul>
        <div className="bookshelf-plank" />
        <div className="bookshelf-caption-area">
          <p className="bookshelf-hint">Hover or tap to pull one out</p>
        </div>
      </div>

      <div className="bookshelf-shelf">
        <h3 className="bookshelf-label">Records</h3>
        <ul className="bookshelf-row bookshelf-records" role="list">
          {records.map((item) => (
            <Record key={item.src} item={item} />
          ))}
        </ul>
        <div className="bookshelf-plank" />
        <div className="bookshelf-caption-area">
          <p className="bookshelf-hint">Hover or tap to pull one out</p>
        </div>
      </div>
    </BookshelfCase>
  );
}
