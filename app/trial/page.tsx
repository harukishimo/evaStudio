import type { Metadata } from "next";
import { TrialForm } from "@/components/forms/TrialForm";
import { trial } from "@/content/pages";

export const metadata: Metadata = { title: "レッスン体験" };

export default function TrialPage() {
  return (
    <div className="mx-auto max-w-xl">
      <h1 className="font-serif text-3xl text-gold">{trial.heading}</h1>
      <p className="mt-6 text-gold-soft">{trial.intro}</p>
      <p className="mt-3 text-xs leading-6 text-white/65">{trial.lineNote}</p>
      <TrialForm />
    </div>
  );
}
