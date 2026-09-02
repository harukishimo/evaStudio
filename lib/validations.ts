const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[0-9+\-() 　]{8,20}$/;

export type ContactInput = {
  name: string;
  email: string;
  subject?: string;
  message?: string;
  source: string;
  website?: string;
};

export type TrialInput = {
  name: string;
  email: string;
  phone: string;
  classType: string;
  preferredSchedule?: string;
  experience?: string;
  message?: string;
  website?: string;
};

export function isHoneypot(value?: string) {
  return Boolean(value && value.trim());
}

export function validateContact(body: ContactInput) {
  const errors: Record<string, string> = {};
  if (!body.name?.trim()) errors.name = "お名前を入力してください";
  else if (body.name.length > 200) errors.name = "お名前が長すぎます";
  if (!body.email?.trim() || !EMAIL.test(body.email)) {
    errors.email = "メールアドレスを入力してください";
  }
  if (body.subject && body.subject.length > 200) errors.subject = "件名が長すぎます";
  if (body.message && body.message.length > 5000) errors.message = "本文が長すぎます";
  if (body.source !== "studio-rental" && body.source !== "access") {
    errors.source = "送信元が不正です";
  }
  return errors;
}

export function validateTrial(body: TrialInput) {
  const errors: Record<string, string> = {};
  if (!body.name?.trim()) errors.name = "お名前を入力してください";
  else if (body.name.length > 200) errors.name = "お名前が長すぎます";
  if (!body.email?.trim() || !EMAIL.test(body.email)) {
    errors.email = "メールアドレスを入力してください";
  }
  if (!body.phone?.trim() || !PHONE.test(body.phone)) {
    errors.phone = "電話番号を入力してください";
  }
  if (!["belly-dance", "yoga", "either"].includes(body.classType)) {
    errors.classType = "希望クラスを選んでください";
  }
  if (body.preferredSchedule && body.preferredSchedule.length > 500) {
    errors.preferredSchedule = "希望日時が長すぎます";
  }
  if (body.experience && !["none", "some", "yes"].includes(body.experience)) {
    errors.experience = "経験の選択が不正です";
  }
  if (body.message && body.message.length > 5000) errors.message = "メモが長すぎます";
  return errors;
}

export const classTypeLabel: Record<string, string> = {
  "belly-dance": "ベリーダンス",
  yoga: "ヨガ&ピラティス",
  either: "どちらでも",
};

export const experienceLabel: Record<string, string> = {
  none: "未経験",
  some: "少しある",
  yes: "経験あり",
};
