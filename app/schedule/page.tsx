import type { Metadata } from "next";
import Link from "next/link";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { PageHeading } from "@/components/ui/PageHeading";
import { schedule } from "@/content/pages";

export const metadata: Metadata = { title: "スケジュール" };

export default function SchedulePage() {
  return (
    <div>
      <PageHeading title={schedule.heading} />
      <div className="flex flex-wrap gap-3">
        <Link
          href="/belly-dance"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-gold-soft"
        >
          ベリーダンス
        </Link>
        <Link
          href="/yoga"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-gold-soft"
        >
          ヨガ&ピラティス
        </Link>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {schedule.months.map((month) => (
          <MediaSlot key={month} label={month} className="min-h-80 rounded-2xl" />
        ))}
      </div>
      <Link
        href="/trial"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-gold px-5 text-sm text-black"
      >
        {schedule.trialLabel}
      </Link>
    </div>
  );
}
