"use client";

import { useState } from "react";
import { Field, inputClass } from "@/components/forms/field";
import {
  FormSubmitFeedback,
  type SubmitPhase,
} from "@/components/forms/FormSubmitFeedback";

type ContactFormProps = {
  source: "studio-rental" | "access";
};

export function ContactForm({ source }: ContactFormProps) {
  const [phase, setPhase] = useState<SubmitPhase>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setErrors({});
    setMessage("");
    setPhase("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        website: data.website,
        source,
      }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => ({}))) as {
        errors?: Record<string, string>;
        error?: string;
      };
      setErrors(payload.errors ?? {});
      setMessage(
        payload.error === "not_configured"
          ? "送信先の設定前です。環境変数を入れてから再度お試しください。"
          : "送信に失敗しました。時間をおいて再度お試しください。",
      );
      setPhase("error");
      return;
    }

    setPhase("complete");
    window.setTimeout(() => {
      form.reset();
      setPhase("success");
    }, 750);
  }

  const locked = phase === "sending" || phase === "complete";

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <fieldset disabled={locked} className="space-y-4">
        <Field label="お名前" required error={errors.name}>
          <input name="name" className={inputClass} required />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input name="email" type="email" className={inputClass} required />
        </Field>
        <Field label="件名" error={errors.subject}>
          <input name="subject" className={inputClass} />
        </Field>
        <Field label="本文" error={errors.message}>
          <textarea name="message" rows={5} className={inputClass} />
        </Field>
        <button
          type="submit"
          className="border border-gold px-8 py-2 text-sm tracking-[0.2em] text-gold hover:bg-gold hover:text-black disabled:opacity-50"
        >
          送信
        </button>
      </fieldset>
      <FormSubmitFeedback phase={phase} error={message} />
    </form>
  );
}
