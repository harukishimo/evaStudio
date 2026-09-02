"use client";

import { useState } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { gallery } from "@/content/gallery";

export default function GalleryPage() {
  const [visible, setVisible] = useState(12);
  const items = gallery.captions.slice(0, visible);

  return (
    <div>
      <h1 className="font-serif text-4xl tracking-[0.18em] text-white">
        {gallery.heading}
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((caption) => (
          <figure key={caption}>
            <MediaSlot label={caption} className="aspect-[4/3]" />
            <figcaption className="mt-2 text-center text-xs text-gold">
              {caption}
            </figcaption>
          </figure>
        ))}
      </div>
      {visible < gallery.captions.length ? (
        <button
          type="button"
          className="mx-auto mt-8 block border border-gold/50 px-6 py-2 text-sm text-gold"
          onClick={() => setVisible((count) => count + 8)}
        >
          Show More
        </button>
      ) : null}
    </div>
  );
}
