import type { Metadata } from "next";
import Link from "next/link";
import { MetaChip } from "@/components/ui/MetaChip";
import { PageHeading } from "@/components/ui/PageHeading";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionCard } from "@/components/ui/SectionCard";
import { yoga } from "@/content/yoga";
import { splitSentences } from "@/lib/display-split";

export const metadata: Metadata = { title: "ヨガ&ピラティス" };

const bodyworkSentences = splitSentences(yoga.bodywork);

export default function YogaPage() {
  return (
    <div>
      <PageHeading title={yoga.heading} />
      <div className="grid gap-4 md:grid-cols-2">
        {yoga.classes.map((item) => (
          <SectionCard key={item.title}>
            <h2 className="font-serif text-gold">{item.title}</h2>
            <div className="mt-3 max-w-[40rem] space-y-2">
              {item.body.map((line, index) => (
                <p
                  key={line}
                  className={
                    index === 0
                      ? "text-[0.95rem] leading-8 text-gold-soft"
                      : "text-sm leading-8 text-gold-soft/80"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
      <SectionCard className="mt-8">
        <MetaChip>{yoga.bodyworkLead}</MetaChip>
        <h2 className="mt-3 font-serif text-2xl text-white">{yoga.bodyworkTitle}</h2>
        <div className="mt-4 max-w-[40rem] space-y-4">
          {bodyworkSentences[0] ? (
            <p className="text-sm leading-8 text-gold-soft">{bodyworkSentences[0]}</p>
          ) : null}
          {bodyworkSentences[1] ? (
            <QuoteBlock>{bodyworkSentences[1]}</QuoteBlock>
          ) : null}
          {bodyworkSentences.slice(2).map((sentence) => (
            <p key={sentence.slice(0, 18)} className="text-sm leading-8 text-gold-soft">
              {sentence}
            </p>
          ))}
        </div>
      </SectionCard>
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
      <SectionCard className="mt-6 px-5 py-5 md:px-6">
        <QuoteBlock>{yoga.anan}</QuoteBlock>
      </SectionCard>
    </div>
  );
}
