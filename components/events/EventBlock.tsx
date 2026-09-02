import type { EventItem } from "@/content/events";

export function EventBlock({ event }: { event: EventItem }) {
  return (
    <article className="rounded-xl border border-white/10 bg-black/20 px-4 py-5">
      <h3 className="text-sm text-gold">{event.date}</h3>
      <div className="mt-2 space-y-1 text-sm leading-7 text-gold-soft">
        {event.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}
