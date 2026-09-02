import { NextResponse } from "next/server";
import {
  classTypeLabel,
  experienceLabel,
  isHoneypot,
  validateTrial,
  type TrialInput,
} from "@/lib/validations";
import { appendRow, tabName, tokyoTimestamp } from "@/lib/sheets";

export async function POST(request: Request) {
  let body: TrialInput;
  try {
    body = (await request.json()) as TrialInput;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (isHoneypot(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateTrial(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    await appendRow(tabName("trial"), [
      tokyoTimestamp(),
      body.name.trim(),
      body.email.trim(),
      body.phone.trim(),
      classTypeLabel[body.classType],
      body.preferredSchedule?.trim() || "",
      body.experience ? experienceLabel[body.experience] : "",
      body.message?.trim() || "",
    ]);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const configured =
      error instanceof Error && error.name === "SHEETS_NOT_CONFIGURED";
    return NextResponse.json(
      { error: configured ? "not_configured" : "server_error" },
      { status: 500 },
    );
  }
}
