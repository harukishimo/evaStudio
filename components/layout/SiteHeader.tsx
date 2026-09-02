"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[#050308]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-8">
          <Link href="/" className="min-w-0" onClick={() => setOpen(false)}>
            <span className="block truncate font-serif text-xl tracking-[0.06em] text-white md:text-2xl">
              {site.logo}
            </span>
          </Link>

          <nav
            aria-label="サイト"
            className="hidden items-center gap-6 text-[13px] tracking-wide lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isCurrent(pathname, item.href)
                    ? "text-gold"
                    : "text-gold-soft/80 hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center text-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-gold transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute top-1.5 left-0 h-[1.5px] w-full bg-gold transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-full bg-gold transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-14 z-30 overflow-y-auto bg-[#07060c] lg:hidden"
        >
          <div className="px-6 py-8">
            <p className="text-[11px] leading-6 tracking-[0.16em] text-gold">
              {site.tagline}
            </p>
            <p className="mt-2 font-serif text-sm text-gold-soft">
              {site.logoKanaLeft} {site.logoKanaRight}
            </p>
            <nav aria-label="モバイルメニュー" className="mt-8 flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-white/10 py-4 text-lg ${
                    isCurrent(pathname, item.href) ? "text-gold" : "text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-3 text-sm text-gold-soft">
              <a href={`tel:${site.phoneTel}`} className="block text-gold">
                {site.phoneDisplay}
              </a>
              <a href={site.lineUrl} className="block">
                LINE {site.lineId}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
