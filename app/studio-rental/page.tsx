import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { FactRow } from "@/components/ui/FactRow";
import { PageHeading } from "@/components/ui/PageHeading";
import { SectionCard } from "@/components/ui/SectionCard";
import { studioRental } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "スタジオレンタル" };

export default function StudioRentalPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageHeading title={studioRental.heading} />
        <SectionCard>
          {studioRental.facts.map((fact) => (
            <FactRow key={fact} value={fact} />
          ))}
          {site.addressLines.map((line) => (
            <FactRow key={line} value={line} />
          ))}
          <p className="mt-6 text-sm text-gold">{studioRental.contactLabel}</p>
          <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
            Tel : 070 3261 0512
          </a>
        </SectionCard>
      </div>
      <div>
        <ContactForm source="studio-rental" />
      </div>
    </div>
  );
}
