"use client";

import { successMessage } from "@/content/pages";

export type SubmitPhase = "idle" | "sending" | "complete" | "success" | "error";

type FormSubmitFeedbackProps = {
  phase: SubmitPhase;
  error?: string;
};

export function FormSubmitFeedback({ phase, error }: FormSubmitFeedbackProps) {
  if (phase === "idle") return null;

  if (phase === "error") {
    return (
      <p className="mt-4 text-sm text-pink" role="alert">
        {error || "送信に失敗しました。時間をおいて再度お試しください。"}
        <span className="mt-1 block text-gold-soft">
          Call : 070 3261 0512
        </span>
      </p>
    );
  }

  if (phase === "success") {
    return (
      <p className="mt-6 text-center font-serif text-xl text-gold" role="status">
        {successMessage}
      </p>
    );
  }

  const fading = phase === "complete";

  return (
    <div
      className={`mt-6 flex flex-col items-center gap-3 ${fading ? "fade-away" : ""}`}
      aria-live="polite"
    >
      {phase === "sending" ? (
        <div
          className="spin-ring h-12 w-12 rounded-full border-2 border-gold/25 border-t-gold"
          aria-label="送信しています"
        />
      ) : (
        <svg viewBox="0 0 48 48" className="h-12 w-12" aria-label="送信完了">
          <circle cx="24" cy="24" r="20" fill="none" stroke="#c9a24a" strokeWidth="1.5" />
          <path
            className="check-draw"
            d="M15 24.5l6.2 6.2L33.5 18"
            fill="none"
            stroke="#c9a24a"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <span className="text-xs tracking-widest text-gold-soft">
        {phase === "sending" ? "SENDING" : "COMPLETE"}
      </span>
    </div>
  );
}
