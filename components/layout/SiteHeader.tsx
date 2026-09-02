"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-[var(--line)] bg-black/70 px-4 py-6 md:px-8">
      <p className="text-center text-[11px] tracking-[0.22em] text-gold md:text-xs">
        {site.tagline}
      </p>
      <Link href="/" className="mt-3 block text-center" onClick={() => setOpen(false)}>
        <span className="flex justify-center gap-10 text-[10px] tracking-[0.35em] text-gold">
          <span>{site.logoKanaLeft}</span>
          <span>{site.logoKanaRight}</span>
        </span>
        <span className="mt-1 block font-serif text-4xl tracking-[0.08em] text-white md:text-5xl">
          {site.logo}
        </span>
      </Link>

      <button
        type="button"
        className="mx-auto mt-5 block border border-gold/40 px-4 py-1 text-xs tracking-widest text-gold md:hidden"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        MENU
      </button>

      <nav
        aria-label="サイト"
        className={`${open ? "mt-4 flex" : "hidden"} flex-col items-center gap-3 text-sm tracking-wide md:mt-6 md:flex md:flex-row md:flex-wrap md:justify-center md:gap-x-5 md:gap-y-2`}
      >
        {navItems.map((item, index) => {
          const current =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <span key={item.href} className="contents">
              {index > 0 ? (
                <span className="hidden text-gold/30 md:inline" aria-hidden>
                  |
                </span>
              ) : null}
              <Link
                href={item.href}
                className={current ? "text-purple" : "text-gold-soft hover:text-white"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </span>
          );
        })}
      </nav>
    </header>
  );
}
