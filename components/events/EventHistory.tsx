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
    <section id="history" className="mt-12">
      <h2 className="font-serif text-3xl text-white">History</h2>
      <div className="mt-6 space-y-3">
        {historyYears.map((year) => {
          const open = openId === year.id;
          return (
            <div
              key={year.id}
              id={`history-${year.id}`}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-4 text-left text-gold"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : year.id)}
              >
                <span>{year.label}</span>
                <span aria-hidden>{open ? "−" : "+"}</span>
              </button>
              {open ? (
                <div className="space-y-3 border-t border-white/10 px-4 py-4">
                  {year.events.map((event) => (
                    <EventBlock key={event.date} event={event} />
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
