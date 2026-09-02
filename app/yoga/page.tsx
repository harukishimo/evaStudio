import type { Metadata } from "next";
import Link from "next/link";
import { yoga } from "@/content/yoga";

export const metadata: Metadata = { title: "ヨガ&ピラティス" };

export default function YogaPage() {
  return (
    <div>
      <h1 className="font-serif text-2xl text-gold md:text-3xl">{yoga.heading}</h1>
      <div className="mt-8 space-y-8">
        {yoga.classes.map((item) => (
          <section key={item.title}>
            <h2 className="text-gold">{item.title}</h2>
            <div className="mt-2 space-y-2 text-sm leading-8 text-gold-soft">
              {item.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="mt-12 text-gold">{yoga.bodyworkLead}</p>
      <h2 className="mt-2 text-xl text-gold">{yoga.bodyworkTitle}</h2>
      <p className="mt-4 text-sm leading-8 text-gold-soft">{yoga.bodywork}</p>
      <Link href="/schedule" className="mt-8 block text-sm text-teal underline">
        {yoga.zoomLabel}
      </Link>
      <p className="mt-6 text-sm text-gold-soft">{yoga.anan}</p>
      <Link href="/trial" className="mt-8 inline-block text-sm text-gold underline">
        ◎各クラス随時体験募集中
      </Link>
    </div>
  );
}
