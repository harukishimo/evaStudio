import type { Metadata } from "next";
import Link from "next/link";
import { bellyDance } from "@/content/belly-dance";

export const metadata: Metadata = { title: "ベリーダンス" };

export default function BellyDancePage() {
  return (
    <div>
      <h1 className="font-serif text-2xl text-gold md:text-3xl">{bellyDance.heading}</h1>
      <div className="mt-8 space-y-5">
        {bellyDance.days.map((day) => (
          <section key={day.day} className="border-b border-[var(--line)] pb-4">
            <h2 className="text-gold">{day.day}</h2>
            {day.slots.map((slot) => (
              <p key={slot.time} className="mt-1 text-sm text-gold-soft">
                {slot.time}　{slot.name}
              </p>
            ))}
          </section>
        ))}
      </div>
      <div className="mt-6 space-y-2 text-sm text-gold-soft">
        {bellyDance.notes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <h2 className="mt-12 text-xl text-gold">{bellyDance.exerciseTitle}</h2>
      <div className="mt-4 space-y-4 text-sm leading-8 text-gold-soft">
        {bellyDance.exercise.map((paragraph) => (
          <p key={paragraph.slice(0, 18)}>{paragraph}</p>
        ))}
      </div>
      <h2 className="mt-12 text-xl text-gold">{bellyDance.danceTitle}</h2>
      <div className="mt-4 space-y-4 text-sm leading-8 text-gold-soft">
        {bellyDance.dance.map((paragraph) => (
          <p key={paragraph.slice(0, 18)}>{paragraph}</p>
        ))}
      </div>
      <Link href="/trial" className="mt-10 inline-block text-sm text-gold underline">
        ◎各クラス随時体験募集中
      </Link>
    </div>
  );
}
