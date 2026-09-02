import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeading } from "@/components/ui/PageHeading";
import { access } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "アクセス" };

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&z=16&hl=ja&output=embed`;

export default function AccessPage() {
  return (
    <div>
      <PageHeading title="アクセス" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-white/10 px-5 py-6">
            {site.addressLines.map((line) => (
              <p key={line} className="text-gold-soft">
                {line}
              </p>
            ))}
            <div className="mt-5 space-y-1 text-sm text-gold-soft">
              {access.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-gold">{access.contactLabel}</p>
            <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
              Tel : 070 3261 0512
            </a>
          </div>
          <iframe
            title="Google マップ"
            src={mapSrc}
            className="mt-4 h-64 w-full rounded-2xl border border-white/10"
            loading="lazy"
          />
        </div>
        <ContactForm source="access" />
      </div>
    </div>
  );
}
