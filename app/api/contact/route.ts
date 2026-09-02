import { NextResponse } from "next/server";
import {
  isHoneypot,
  validateContact,
  type ContactInput,
} from "@/lib/validations";
import { appendRow, tabName, tokyoTimestamp } from "@/lib/sheets";

export async function POST(request: Request) {
  let body: ContactInput;
  try {
    body = (await request.json()) as ContactInput;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (isHoneypot(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    await appendRow(tabName("contact"), [
      tokyoTimestamp(),
      body.name.trim(),
      body.email.trim(),
      body.subject?.trim() || "",
      body.message?.trim() || "",
      body.source,
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
