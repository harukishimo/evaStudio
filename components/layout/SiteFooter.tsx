import Link from "next/link";
import { site, sns } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-black/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-xl text-white">{site.logo}</p>
          <p className="mt-2 text-xs leading-6 text-gold-soft">{site.tagline}</p>
          <a href={`tel:${site.phoneTel}`} className="mt-4 block text-sm text-gold">
            {site.phoneDisplay}
          </a>
        </div>
        <div className="space-y-2 text-sm">
          <Link href="/trial" className="block text-gold hover:text-white">
            レッスン体験
          </Link>
          <Link href="/studio-rental" className="block text-gold-soft hover:text-white">
            スタジオレンタル
          </Link>
          <Link href="/schedule" className="block text-gold-soft hover:text-white">
            レッスンスケジュール
          </Link>
          <a href={site.lineUrl} className="block text-gold-soft hover:text-white">
            LINE {site.lineId}
          </a>
          <p className="pt-1 text-xs leading-6 text-white/55">{site.lineText}</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gold-soft">
          {sns.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.associationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {site.associationName}
          </a>
        </div>
      </div>
      <p className="border-t border-white/5 px-4 py-4 text-center text-[11px] text-white/40">
        {site.copyright}
      </p>
    </footer>
  );
}
