export type EventLineKind = "section" | "venue" | "time" | "ticket" | "plain";

export type EventBlockPart =
  | { type: "section"; heading: string; items: string[] }
  | { type: "fact"; text: string }
  | { type: "body"; text: string };

export function classifyEventLine(line: string): EventLineKind {
  if (/^【.+】/.test(line)) return "section";
  if (/^(会場|場所|場合|＠|@)/.test(line)) return "venue";
  if (/(Open|Start|開場|開演)/.test(line)) return "time";
  if (/(円|前売|指定席|自由席|絨毯席|立見|当日券)/.test(line)) return "ticket";
  return "plain";
}

export function structureEventLines(lines: string[]) {
  const titles: string[] = [];
  const parts: EventBlockPart[] = [];
  let seenMeta = false;

  for (const line of lines) {
    const kind = classifyEventLine(line);

    if (kind === "plain" && !seenMeta && parts.length === 0) {
      titles.push(line);
      continue;
    }

    if (kind !== "plain") seenMeta = true;

    if (kind === "section") {
      parts.push({ type: "section", heading: line, items: [] });
      continue;
    }

    if (kind === "plain") {
      const last = parts[parts.length - 1];
      if (last?.type === "section") {
        last.items.push(line);
      } else {
        parts.push({ type: "body", text: line });
      }
      continue;
    }

    parts.push({ type: "fact", text: line });
  }

  return { titles, parts };
}

export function isDateLine(line: string) {
  return line.startsWith("・");
}
