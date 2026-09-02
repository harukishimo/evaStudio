import Image from "next/image";
import Link from "next/link";
import { media } from "@/content/media";
import { site, sns } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-[var(--line)]">
      <Image
        src={media.silkBackground}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#050308]/78" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
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
      <p className="relative z-10 border-t border-white/5 px-4 py-4 text-center text-[11px] text-white/40">
        {site.copyright}
      </p>
    </footer>
  );
}
