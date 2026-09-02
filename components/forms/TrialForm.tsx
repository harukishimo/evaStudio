"use client";

import { useState } from "react";
import { Field, inputClass } from "@/components/forms/field";
import {
  FormSubmitFeedback,
  type SubmitPhase,
} from "@/components/forms/FormSubmitFeedback";

export function TrialForm() {
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

    const response = await fetch("/api/trial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        classType: data.classType,
        preferredSchedule: data.preferredSchedule,
        experience: data.experience,
        message: data.message,
        website: data.website,
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
        <Field label="電話番号" required error={errors.phone}>
          <input name="phone" type="tel" className={inputClass} required />
        </Field>
        <fieldset>
          <legend className="text-sm text-gold">希望クラス *</legend>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <label>
              <input type="radio" name="classType" value="belly-dance" required /> ベリーダンス
            </label>
            <label>
              <input type="radio" name="classType" value="yoga" /> ヨガ&ピラティス
            </label>
            <label>
              <input type="radio" name="classType" value="either" /> どちらでも
            </label>
          </div>
          {errors.classType ? (
            <p className="mt-1 text-xs text-pink">{errors.classType}</p>
          ) : null}
        </fieldset>
        <Field label="希望日時" error={errors.preferredSchedule}>
          <input name="preferredSchedule" className={inputClass} />
        </Field>
        <fieldset>
          <legend className="text-sm text-gold">経験</legend>
          <div className="mt-2 flex flex-col gap-2 text-sm">
            <label>
              <input type="radio" name="experience" value="none" /> 未経験
            </label>
            <label>
              <input type="radio" name="experience" value="some" /> 少しある
            </label>
            <label>
              <input type="radio" name="experience" value="yes" /> 経験あり
            </label>
          </div>
        </fieldset>
        <Field label="ご質問・メモ" error={errors.message}>
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
