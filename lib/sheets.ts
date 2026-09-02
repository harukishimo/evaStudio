import { google } from "googleapis";

function required(name: string) {
  const value = process.env[name];
  if (!value) {
    const error = new Error("SHEETS_NOT_CONFIGURED");
    error.name = "SHEETS_NOT_CONFIGURED";
    throw error;
  }
  return value;
}

function getAuth() {
  const email = required("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const key = required("GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY").replace(
    /\\n/g,
    "\n",
  );
  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function appendRow(tabName: string, values: string[]) {
  const spreadsheetId = required("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheets = google.sheets({ version: "v4", auth: getAuth() });
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${tabName}'!A:Z`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [values] },
  });
}

export function tokyoTimestamp() {
  return new Date().toLocaleString("sv-SE", { timeZone: "Asia/Tokyo" });
}

export function tabName(kind: "trial" | "contact") {
  if (kind === "trial") {
    return process.env.GOOGLE_SHEETS_TAB_TRIAL || "レッスン体験";
  }
  return process.env.GOOGLE_SHEETS_TAB_CONTACT || "お問い合わせ";
}
