export function splitSentences(text: string) {
  return text
    .split("。")
    .filter((part) => part.length > 0)
    .map((part) => `${part}。`);
}

export function splitTimelineItem(item: string) {
  const mark = item.startsWith("＊") ? "＊" : "";
  const rest = mark ? item.slice(1).replace(/^\s+/, "") : item;
  const matched = rest.match(
    /^((?:\d{4}年(?:\d{1,2}月(?:\d{1,2}日)?)?)(?:\s+\d{4}年(?:\d{1,2}月(?:\d{1,2}日)?)?)*)\s+(.*)$/,
  );

  if (!matched) {
    return { mark: "", when: "", what: item };
  }

  return { mark, when: matched[1], what: matched[2] };
}

export function galleryGroupKey(caption: string) {
  return caption.replace(/[①-⑳]$/, "").replace(/ゲストダンサー$/, "");
}

export function groupGalleryCaptions(captions: string[]) {
  const groups: { heading: string; items: string[] }[] = [];

  for (const caption of captions) {
    const heading = galleryGroupKey(caption);
    const last = groups[groups.length - 1];
    if (last && last.heading === heading) {
      last.items.push(caption);
    } else {
      groups.push({ heading, items: [caption] });
    }
  }

  return groups;
}
