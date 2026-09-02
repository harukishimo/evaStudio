import Link from "next/link";
import { EvaMark } from "@/components/brand/EvaMark";
import { home } from "@/content/home";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border border-[var(--line)] px-4 py-16 text-center md:py-24">
        <div className="pointer-events-none absolute right-8 top-6 h-24 w-24 rounded-full bg-gold/20 blur-sm" />
        <h1 className="font-serif text-2xl text-gold-soft md:text-3xl">
          {home.catchphrase}
        </h1>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {home.categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="flex flex-col items-center gap-3"
            >
              <EvaMark tone={category.tone} className="h-32 w-32" />
              <span
                className={
                  category.tone === "pink" ? "text-lg text-pink" : "text-lg text-teal"
                }
              >
                {category.label}
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs text-white/55">{home.caption}</p>
      </section>

      <section className="mt-10 border border-white/10 bg-black/45 p-5 md:p-7">
        <p className="text-sm text-white/80">{home.whatsNewTitle}</p>
        <h2 className="mt-1 font-serif text-2xl text-gold">{home.upcomingTitle}</h2>
        <ul className="mt-5 space-y-3 text-sm">
          {home.notices.map((notice) => (
            <li key={notice.text}>
              <Link href={notice.href} className="text-gold-soft hover:text-white">
                {notice.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs leading-6 text-white/65">{home.lineNote}</p>
        <a
          href={site.reservaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-gold underline"
        >
          {home.reservaLabel}
        </a>
        <div className="mt-8 space-y-2 text-sm leading-7 text-gold-soft">
          {home.events.map((line, index) =>
            line ? <p key={`${index}-${line}`}>{line}</p> : <div key={index} className="h-2" />,
          )}
        </div>
        <p className="mt-8 text-xs text-white/50">{home.credit}</p>
      </section>
    </div>
  );
}
