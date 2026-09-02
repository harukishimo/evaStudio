import Image from "next/image";
import Link from "next/link";
import { EvaMark } from "@/components/brand/EvaMark";
import { FactRow } from "@/components/ui/FactRow";
import { SectionCard } from "@/components/ui/SectionCard";
import { home } from "@/content/home";
import { media } from "@/content/media";
import { site } from "@/content/site";
import { groupLines } from "@/lib/copy-blocks";
import { isDateLine } from "@/lib/event-lines";

const reservationNote = "ご予約はLINE公式アカウントにメッセージお願いします。";
const eventGroups = groupLines(home.events);
const lastGroup = eventGroups[eventGroups.length - 1];
const isReservationNote =
  lastGroup?.length === 1 && lastGroup[0] === reservationNote;
const upcomingGroups = isReservationNote
  ? eventGroups.slice(0, -1)
  : eventGroups;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="relative min-h-[28rem] overflow-hidden rounded-2xl border border-white/10 md:min-h-[32rem]">
        <Image
          src={media.homeHero}
          alt=""
          fill
          preload
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/20" />
        <div className="relative z-10 px-5 py-12 md:px-12 md:py-20">
          <p className="text-[11px] tracking-[0.2em] text-gold">{site.tagline}</p>
          <h1 className="mt-4 max-w-xl font-serif text-[1.7rem] leading-snug text-white md:text-4xl">
            {home.catchphrase}
          </h1>
          <p className="mt-4 text-sm text-white/60">{home.caption}</p>
          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
            {home.categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-black/35 px-4 py-5 backdrop-blur-sm hover:border-gold/50"
              >
                <EvaMark tone={category.tone} className="h-16 w-16 shrink-0" />
                <span
                  className={`text-lg ${category.tone === "pink" ? "text-pink" : "text-teal"}`}
                >
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-gold">{home.whatsNewTitle}</p>
            <h2 className="mt-1 font-serif text-2xl text-white">{home.upcomingTitle}</h2>
          </div>
          <Link
            href="/trial"
            className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-5 text-sm text-black"
          >
            ◎各クラス随時体験募集中
          </Link>
        </div>

        <div className="mt-6 grid gap-3">
          {home.notices.map((notice) => (
            <Link
              key={notice.text}
              href={notice.href}
              className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-gold-soft backdrop-blur-sm hover:border-gold/40 hover:text-white"
            >
              {notice.text}
            </Link>
          ))}
        </div>

        <p className="mt-4 text-xs leading-6 text-white/55">{home.lineNote}</p>
        <a
          href={site.reservaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-gold underline underline-offset-4"
        >
          {home.reservaLabel}
        </a>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {upcomingGroups.map((group) => {
          const titles = group.filter((line) => !isDateLine(line));
          const dates = group.filter(isDateLine);
          return (
            <SectionCard
              key={group[0]}
              as="article"
              className="px-4 py-5 md:px-5"
            >
              {titles.map((line, index) => (
                <p
                  key={`${group[0]}-title-${index}`}
                  className={
                    index === 0
                      ? "font-serif text-white"
                      : "text-sm leading-7 text-gold-soft"
                  }
                >
                  {line}
                </p>
              ))}
              {dates.length ? (
                <div className="mt-3">
                  {dates.map((line, index) => (
                    <FactRow key={`${group[0]}-date-${index}`} value={line} />
                  ))}
                </div>
              ) : null}
            </SectionCard>
          );
        })}
      </section>

      {isReservationNote ? (
        <p className="text-sm text-white/50">{reservationNote}</p>
      ) : null}

      <p className="text-xs text-white/40">{home.credit}</p>
    </div>
  );
}
