import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeading } from "@/components/ui/PageHeading";
import { studioRental } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "スタジオレンタル" };

export default function StudioRentalPage() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageHeading title={studioRental.heading} />
        <div className="rounded-2xl border border-white/10 px-5 py-6 text-gold-soft">
          {studioRental.facts.map((fact) => (
            <p key={fact} className="leading-8">
              {fact}
            </p>
          ))}
          <div className="mt-6 space-y-1">
            {site.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-gold">{studioRental.contactLabel}</p>
          <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
            Tel : 070 3261 0512
          </a>
        </div>
      </div>
      <div>
        <ContactForm source="studio-rental" />
      </div>
    </div>
  );
}
