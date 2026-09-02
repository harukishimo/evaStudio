import Link from "next/link";
import { EvaMark } from "@/components/brand/EvaMark";
import { home } from "@/content/home";
import { site } from "@/content/site";
import { groupLines } from "@/lib/copy-blocks";

const eventGroups = groupLines(home.events);

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-white/10 bg-black/30 px-5 py-12 md:px-12 md:py-16">
        <p className="text-[11px] tracking-[0.2em] text-gold">{site.tagline}</p>
        <h1 className="mt-4 font-serif text-[1.7rem] leading-snug text-white md:text-4xl">
          {home.catchphrase}
        </h1>
        <p className="mt-4 text-sm text-white/50">{home.caption}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {home.categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-5 hover:border-gold/50"
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
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-gold-soft hover:border-gold/40 hover:text-white"
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
        {eventGroups.map((group) => (
          <article
            key={group[0]}
            className="rounded-xl border border-white/10 bg-black/25 px-4 py-5"
          >
            {group.map((line) => (
              <p key={line} className="text-sm leading-7 text-gold-soft">
                {line}
              </p>
            ))}
          </article>
        ))}
      </section>

      <p className="text-xs text-white/40">{home.credit}</p>
    </div>
  );
}
