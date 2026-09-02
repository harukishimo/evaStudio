"use client";

import { useState } from "react";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { gallery } from "@/content/gallery";
import { groupGalleryCaptions } from "@/lib/display-split";

export default function GalleryPage() {
  const [visible, setVisible] = useState(12);
  const items = gallery.captions.slice(0, visible);
  const groups = groupGalleryCaptions(items);

  return (
    <div>
      <h1 className="font-serif text-3xl text-white md:text-4xl">
        {gallery.heading}
      </h1>
      <div className="mt-8 space-y-10">
        {groups.map((group) => (
          <section key={`${group.heading}-${group.items[0]}`}>
            <h2 className="sticky top-14 z-20 bg-[#050308]/80 py-2 font-serif text-sm tracking-[0.08em] text-gold backdrop-blur-sm md:top-16">
              {group.heading}
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {group.items.map((caption) => (
                <figure key={caption}>
                  <MediaSlot label={caption} className="aspect-[4/3] rounded-lg" />
                  <figcaption className="mt-2 text-xs leading-5 text-gold">
                    {caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
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
