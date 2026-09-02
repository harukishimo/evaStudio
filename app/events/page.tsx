import type { Metadata } from "next";
import { EventBlock } from "@/components/events/EventBlock";
import { EventHistory } from "@/components/events/EventHistory";
import {
  currentEvents,
  eventsPage,
  recentPastEvents,
} from "@/content/events";

export const metadata: Metadata = { title: "EVENT" };

export default function EventsPage() {
  return (
    <div>
      <h1 className="font-serif text-4xl tracking-[0.18em] text-white">
        {eventsPage.heading}
      </h1>
      <h2 className="mt-8 text-xl text-gold">{eventsPage.currentHeading}</h2>
      <div>
        {currentEvents.map((event) => (
          <EventBlock key={event.date} event={event} />
        ))}
      </div>
      <h2 id="live" className="mt-12 text-xl text-gold">
        {eventsPage.pastHeading}
      </h2>
      <div>
        {recentPastEvents.map((event) => (
          <EventBlock key={event.date} event={event} />
        ))}
      </div>
      <EventHistory />
    </div>
  );
}
