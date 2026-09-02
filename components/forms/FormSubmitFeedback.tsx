"use client";

import { successMessage } from "@/content/pages";

export type SubmitPhase = "idle" | "sending" | "complete" | "success" | "error";

type FormSubmitFeedbackProps = {
  phase: SubmitPhase;
  error?: string;
};

function SendingMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28" aria-label="送信しています">
      <circle
        className="dash-spin"
        cx="60"
        cy="60"
        r="46"
        fill="none"
        stroke="#c9a24a"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <g className="orbit-reverse">
        <circle
          cx="60"
          cy="60"
          r="34"
          fill="none"
          stroke="#e6d3a3"
          strokeOpacity="0.45"
          strokeWidth="0.8"
        />
        <circle cx="94" cy="60" r="2.2" fill="#c9a24a" />
      </g>
      <g className="orbit">
        <path
          d="M60 22c10 14 12 24 0 36-12-12-10-22 0-36Z"
          fill="none"
          stroke="#c9a24a"
          strokeWidth="1"
        />
        <circle cx="60" cy="18" r="2" fill="#e6d3a3" />
      </g>
      <circle className="breathe" cx="60" cy="60" r="7" fill="#c9a24a" />
    </svg>
  );
}

function CompleteMark() {
  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 bloom" aria-label="送信完了">
      <circle className="glow-pulse" cx="60" cy="60" r="48" fill="#c9a24a" />
      <circle
        cx="60"
        cy="60"
        r="40"
        fill="none"
        stroke="#c9a24a"
        strokeWidth="1.2"
      />
      <circle
        cx="60"
        cy="60"
        r="32"
        fill="none"
        stroke="#e6d3a3"
        strokeOpacity="0.55"
        strokeWidth="0.7"
      />
      <path
        className="check-draw"
        d="M42 61.5l12 12 24-26"
        fill="none"
        stroke="#f4e6b5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FormSubmitFeedback({ phase, error }: FormSubmitFeedbackProps) {
  if (phase === "idle") return null;

  if (phase === "error") {
    return (
      <p className="mt-4 text-sm text-pink" role="alert">
        {error || "送信に失敗しました。時間をおいて再度お試しください。"}
        <span className="mt-1 block text-gold-soft">Call : 070 3261 0512</span>
      </p>
    );
  }

  if (phase === "success") {
    return (
      <p className="rise-in mt-8 text-center text-xl text-gold" role="status">
        {successMessage}
      </p>
    );
  }

  return (
    <div
      className={`mt-8 flex flex-col items-center gap-4 ${phase === "complete" ? "fade-away" : ""}`}
      aria-live="polite"
    >
      {phase === "sending" ? <SendingMark /> : <CompleteMark />}
      <span className="text-sm tracking-[0.28em] text-gold-soft">
        {phase === "sending" ? "送信中" : "完了"}
      </span>
    </div>
  );
}
