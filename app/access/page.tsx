import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { FactRow } from "@/components/ui/FactRow";
import { MetaChip } from "@/components/ui/MetaChip";
import { PageHeading } from "@/components/ui/PageHeading";
import { SectionCard } from "@/components/ui/SectionCard";
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
          <SectionCard>
            {site.addressLines.map((line) => (
              <FactRow key={line} value={line} />
            ))}
            <div className="mt-5 flex flex-wrap gap-2">
              {access.notes.map((note) => (
                <MetaChip key={note}>{note}</MetaChip>
              ))}
            </div>
            <p className="mt-6 text-sm text-gold">{access.contactLabel}</p>
            <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
              Tel : 070 3261 0512
            </a>
          </SectionCard>
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
