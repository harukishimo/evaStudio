"use client";

import { useState } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { gallery } from "@/content/gallery";

export default function GalleryPage() {
  const [visible, setVisible] = useState(12);
  const items = gallery.captions.slice(0, visible);

  return (
    <div>
      <h1 className="font-serif text-3xl text-white md:text-4xl">
        {gallery.heading}
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {items.map((caption) => (
          <figure key={caption}>
            <MediaSlot label={caption} className="aspect-[4/3] rounded-lg" />
            <figcaption className="mt-2 text-xs leading-5 text-gold">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {visible < gallery.captions.length ? (
        <button
          type="button"
          className="mt-8 h-11 w-full rounded-full border border-gold/50 text-sm text-gold md:w-auto md:px-8"
          onClick={() => setVisible((count) => count + 8)}
        >
          Show More
        </button>
      ) : null}
    </div>
  );
}
