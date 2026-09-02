import type { Metadata } from "next";
import { EventBlock } from "@/components/events/EventBlock";
import { EventHistory } from "@/components/events/EventHistory";
import { PageHeading } from "@/components/ui/PageHeading";
import {
  currentEvents,
  eventsPage,
  recentPastEvents,
} from "@/content/events";

export const metadata: Metadata = { title: "EVENT" };

export default function EventsPage() {
  return (
    <div>
      <PageHeading title={eventsPage.heading} />
      <h2 className="mb-4 text-sm tracking-[0.16em] text-gold">
        {eventsPage.currentHeading}
      </h2>
      <div className="grid gap-4">
        {currentEvents.map((event) => (
          <EventBlock key={event.date} event={event} />
        ))}
      </div>
      <h2 id="live" className="mt-12 mb-4 text-sm tracking-[0.16em] text-gold">
        {eventsPage.pastHeading}
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {recentPastEvents.map((event) => (
          <EventBlock key={event.date} event={event} />
        ))}
      </div>
      <EventHistory />
    </div>
  );
}
