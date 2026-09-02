import type { Metadata } from "next";
import Link from "next/link";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { schedule } from "@/content/pages";

export const metadata: Metadata = { title: "スケジュール" };

export default function SchedulePage() {
  return (
    <div>
      <div className="flex flex-wrap gap-6 text-gold">
        <Link href="/belly-dance">ベリーダンス</Link>
        <Link href="/yoga">ヨガ&ピラティス</Link>
      </div>
      <h1 className="mt-6 font-serif text-3xl text-gold">{schedule.heading}</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {schedule.months.map((month) => (
          <MediaSlot key={month} label={month} className="min-h-96" />
        ))}
      </div>
      <Link href="/trial" className="mt-8 inline-block text-sm text-gold underline">
        {schedule.trialLabel}
      </Link>
    </div>
  );
}
