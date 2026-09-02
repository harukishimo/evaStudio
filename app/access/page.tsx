import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { access } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "アクセス" };

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&hl=ja&output=embed`;

export default function AccessPage() {
  return (
    <div>
      <div className="space-y-1 text-gold-soft">
        {site.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-6 space-y-1 text-sm text-gold-soft">
        {access.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <iframe
        title="Google マップ"
        src={mapSrc}
        className="mt-8 h-72 w-full border border-[var(--line)]"
        loading="lazy"
      />
      <p className="mt-8 text-sm text-gold">{access.contactLabel}</p>
      <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
        Tel : 070 3261 0512
      </a>
      <ContactForm source="access" />
    </div>
  );
}
