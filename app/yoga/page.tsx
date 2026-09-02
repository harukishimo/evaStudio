import type { Metadata } from "next";
import Link from "next/link";
import { PageHeading } from "@/components/ui/PageHeading";
import { yoga } from "@/content/yoga";

export const metadata: Metadata = { title: "ヨガ&ピラティス" };

export default function YogaPage() {
  return (
    <div>
      <PageHeading title={yoga.heading} />
      <div className="grid gap-4 md:grid-cols-2">
        {yoga.classes.map((item) => (
          <section
            key={item.title}
            className="rounded-2xl border border-white/10 bg-black/20 px-5 py-6"
          >
            <h2 className="text-gold">{item.title}</h2>
            <div className="mt-3 space-y-2 text-sm leading-8 text-gold-soft">
              {item.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-8 rounded-2xl border border-white/10 px-5 py-6 md:px-8">
        <p className="text-sm text-gold">{yoga.bodyworkLead}</p>
        <h2 className="mt-2 font-serif text-2xl text-white">{yoga.bodyworkTitle}</h2>
        <p className="mt-4 text-sm leading-8 text-gold-soft">{yoga.bodywork}</p>
      </section>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/schedule"
          className="inline-flex h-11 items-center justify-center rounded-full border border-teal px-5 text-sm text-teal"
        >
          {yoga.zoomLabel}
        </Link>
        <Link
          href="/trial"
          className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-5 text-sm text-black"
        >
          ◎各クラス随時体験募集中
        </Link>
      </div>
      <p className="mt-6 text-sm leading-7 text-white/50">{yoga.anan}</p>
    </div>
  );
}
