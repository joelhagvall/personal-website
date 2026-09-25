"use client";

import { useRef, type ReactNode } from "react";

const ITEM = ".bookshelf-box, .bookshelf-record-inner";

// Items are pulled out while focused; a second tap on the same one puts it back
export function BookshelfCase({ children }: { children: ReactNode }) {
  const pulledOut = useRef<HTMLElement | null>(null);

  return (
    <div
      className="bookshelf-case"
      onPointerDown={(event) => {
        const item = (event.target as HTMLElement).closest<HTMLElement>(ITEM);
        pulledOut.current = item && item === document.activeElement ? item : null;
      }}
      onClick={(event) => {
        const item = (event.target as HTMLElement).closest<HTMLElement>(ITEM);
        if (item && item === pulledOut.current) item.blur();
      }}
    >
      {children}
    </div>
  );
}
