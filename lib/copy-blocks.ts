export function groupLines(lines: string[]) {
  const groups: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (!line) {
      if (current.length) groups.push(current);
      current = [];
      continue;
    }
    current.push(line);
  }
  if (current.length) groups.push(current);
  return groups;
}
