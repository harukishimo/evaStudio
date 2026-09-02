import Link from "next/link";
import { site, sns } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[var(--line)] bg-black/70 px-4 py-10 text-center text-sm text-gold-soft">
      <a href={`tel:${site.phoneTel}`} className="tracking-wider text-gold">
        {site.phoneDisplay}
      </a>
      <p className="mt-3 text-xs text-white/60">{site.copyright}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs tracking-wide">
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
      <div className="mt-5 flex flex-col items-center gap-2 text-xs">
        <Link href="/studio-rental" className="text-gold hover:text-white">
          スタジオレンタル
        </Link>
        <a href={site.lineUrl} className="text-gold">
          LINE {site.lineId}
        </a>
        <p>{site.lineText}</p>
      </div>
    </footer>
  );
}
