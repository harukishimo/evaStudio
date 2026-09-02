import type { Metadata } from "next";
import Link from "next/link";
import { MetaChip } from "@/components/ui/MetaChip";
import { PageHeading } from "@/components/ui/PageHeading";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionCard } from "@/components/ui/SectionCard";
import { bellyDance } from "@/content/belly-dance";

export const metadata: Metadata = { title: "ベリーダンス" };

export default function BellyDancePage() {
  return (
    <div>
      <PageHeading title={bellyDance.heading} />

      <SectionCard padded={false} className="overflow-hidden">
        {bellyDance.days.map((day) => (
          <section
            key={day.day}
            className="grid gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 sm:grid-cols-[7rem_1fr] sm:items-start"
          >
            <h2 className="text-sm text-gold">{day.day}</h2>
            <div className="space-y-2">
              {day.slots.map((slot) => (
                <p key={slot.time} className="text-sm leading-7 text-gold-soft">
                  <span className="mr-3 text-white/80">{slot.time}</span>
                  {slot.name}
                </p>
              ))}
            </div>
          </section>
        ))}
      </SectionCard>

      <div className="mt-4 flex flex-wrap gap-2">
        {bellyDance.notes.map((note) => (
          <MetaChip key={note}>{note}</MetaChip>
        ))}
      </div>

      <SectionCard className="mt-10">
        <h2 className="font-serif text-2xl text-white">{bellyDance.exerciseTitle}</h2>
        <div className="mt-4 max-w-[40rem] space-y-4">
          <p className="text-sm leading-8 text-gold">{bellyDance.exercise[0]}</p>
          {bellyDance.exercise.slice(1, 5).map((paragraph) => (
            <p key={paragraph.slice(0, 18)} className="text-sm leading-8 text-gold-soft">
              {paragraph}
            </p>
          ))}
          <QuoteBlock>{bellyDance.exercise[5]}</QuoteBlock>
          {bellyDance.exercise.slice(6).map((paragraph) => (
            <p key={paragraph.slice(0, 18)} className="text-sm leading-8 text-gold-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </SectionCard>

      <SectionCard className="mt-6">
        <h2 className="font-serif text-2xl text-white">{bellyDance.danceTitle}</h2>
        <div className="mt-4 max-w-[40rem] space-y-4">
          <p className="text-sm leading-8 text-gold-soft">{bellyDance.dance[0]}</p>
          <h3 className="text-gold">{bellyDance.dance[1]}</h3>
          <p className="text-sm leading-8 text-gold-soft">{bellyDance.dance[2]}</p>
        </div>
      </SectionCard>

      <Link
        href="/trial"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm text-black"
      >
        ◎各クラス随時体験募集中
      </Link>
    </div>
  );
}
