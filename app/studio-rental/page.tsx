import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { studioRental } from "@/content/pages";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "スタジオレンタル" };

export default function StudioRentalPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl text-gold">{studioRental.heading}</h1>
      <div className="mt-6 space-y-2 text-gold-soft">
        {studioRental.facts.map((fact) => (
          <p key={fact}>{fact}</p>
        ))}
      </div>
      <div className="mt-8 space-y-1 text-gold-soft">
        {site.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-8 text-sm text-gold">{studioRental.contactLabel}</p>
      <a href={`tel:${site.phoneTel}`} className="mt-1 block text-gold">
        Tel : 070 3261 0512
      </a>
      <ContactForm source="studio-rental" />
    </div>
  );
}
