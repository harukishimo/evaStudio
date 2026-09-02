import type { Metadata } from "next";
import { TrialForm } from "@/components/forms/TrialForm";
import { PageHeading } from "@/components/ui/PageHeading";
import { trial } from "@/content/pages";

export const metadata: Metadata = { title: "レッスン体験" };

export default function TrialPage() {
  return (
    <div className="mx-auto max-w-xl">
      <PageHeading title={trial.heading} />
      <p className="text-gold-soft">{trial.intro}</p>
      <p className="mt-3 text-xs leading-6 text-white/55">{trial.lineNote}</p>
      <TrialForm />
    </div>
  );
}
