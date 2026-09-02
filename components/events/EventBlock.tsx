import { FactRow } from "@/components/ui/FactRow";
import { SectionCard } from "@/components/ui/SectionCard";
import type { EventItem } from "@/content/events";
import { structureEventLines } from "@/lib/event-lines";

export function EventBlock({ event }: { event: EventItem }) {
  const { titles, parts } = structureEventLines(event.lines);

  return (
    <SectionCard as="article" className="px-4 py-5 md:px-5">
      <h3 className="text-sm text-gold">{event.date}</h3>
      {titles.length ? (
        <div className="mt-2 space-y-1">
          {titles.map((line, index) => (
            <p
              key={`${event.date}-title-${index}`}
              className={
                index === 0
                  ? "font-serif text-white"
                  : "text-sm leading-7 text-gold"
              }
            >
              {line}
            </p>
          ))}
        </div>
      ) : null}
      {parts.length ? (
        <div className="mt-3">
          {parts.map((part, index) => {
            const key = `${event.date}-part-${index}`;
            if (part.type === "fact") {
              return <FactRow key={key} value={part.text} />;
            }
            if (part.type === "section") {
              return (
                <div key={key} className="mt-3 first:mt-0">
                  <p className="text-xs tracking-[0.12em] text-gold">
                    {part.heading}
                  </p>
                  {part.items.length ? (
                    <div className="mt-1 space-y-0.5">
                      {part.items.map((item, itemIndex) => (
                        <p
                          key={`${key}-${itemIndex}`}
                          className="text-sm leading-6 text-gold-soft"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <p key={key} className="text-sm leading-7 text-gold-soft">
                {part.text}
              </p>
            );
          })}
        </div>
      ) : null}
    </SectionCard>
  );
}
