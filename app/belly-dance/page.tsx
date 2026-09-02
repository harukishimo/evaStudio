import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/ui/PageHeading";
import { bellyDance } from "@/content/belly-dance";

export const metadata: Metadata = { title: "ベリーダンス" };

export default function BellyDancePage() {
  return (
    <div>
      <PageHeading title={bellyDance.heading} />

      <div className="overflow-hidden rounded-2xl border border-white/10">
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
      </div>

      <div className="mt-4 space-y-1 text-sm text-white/50">
        {bellyDance.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>

      <section className="mt-10 rounded-2xl border border-white/10 bg-black/20 px-5 py-6 md:px-8">
        <h2 className="font-serif text-2xl text-white">{bellyDance.exerciseTitle}</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-gold-soft">
          {bellyDance.exercise.map((paragraph) => (
            <p key={paragraph.slice(0, 18)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-white/10 px-5 py-6 md:px-8">
        <h2 className="font-serif text-2xl text-white">{bellyDance.danceTitle}</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-gold-soft">
          {bellyDance.dance.map((paragraph) => (
            <p key={paragraph.slice(0, 18)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <Link
        href="/trial"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm text-black"
      >
        ◎各クラス随時体験募集中
      </Link>
    </div>
  );
}
