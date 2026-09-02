"use client";

import { useEffect, useState } from "react";
import { EventBlock } from "@/components/events/EventBlock";
import { historyYears } from "@/content/events";

export function EventHistory() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    function applyFromLocation() {
      const hash = window.location.hash.replace("#", "");
      const query = new URLSearchParams(window.location.search).get("history");
      const target = hash.startsWith("history-")
        ? hash.replace("history-", "")
        : query;
      if (target && historyYears.some((year) => year.id === target)) {
        setOpenId(target);
        document.getElementById(`history-${target}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    applyFromLocation();
    window.addEventListener("hashchange", applyFromLocation);
    return () => window.removeEventListener("hashchange", applyFromLocation);
  }, []);

  return (
    <section id="history" className="mt-12 border border-gold/35 px-4 py-6 md:px-6">
      <h2 className="font-serif text-3xl tracking-[0.2em] text-gold">History</h2>
      <div className="mt-6 space-y-3">
        {historyYears.map((year) => {
          const open = openId === year.id;
          return (
            <div key={year.id} id={`history-${year.id}`}>
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-[var(--line)] py-3 text-left text-gold"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : year.id)}
              >
                <span>{year.label}</span>
                <span aria-hidden>{open ? "−" : "+"}</span>
              </button>
              {open
                ? year.events.map((event) => (
                    <EventBlock key={event.date} event={event} />
                  ))
                : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
