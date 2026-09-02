import type { Metadata } from "next";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { PageHeading } from "@/components/ui/PageHeading";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { SectionCard } from "@/components/ui/SectionCard";
import { TimelineRow } from "@/components/ui/TimelineRow";
import { profile } from "@/content/profile";
import { splitSentences, splitTimelineItem } from "@/lib/display-split";

export const metadata: Metadata = { title: "PROFILE" };

const bioSentences = splitSentences(profile.bio[0]);
const bioLead = bioSentences[0];
const bioRest = [...bioSentences.slice(1), profile.bio[1]].filter(Boolean);

export default function ProfilePage() {
  return (
    <div>
      <PageHeading title={profile.heading} />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <SectionCard>
          <div className="max-w-[40rem] space-y-5">
            {bioLead ? <QuoteBlock>{bioLead}</QuoteBlock> : null}
            {bioRest.map((paragraph) => (
              <p
                key={paragraph.slice(0, 16)}
                className="text-sm leading-8 text-gold-soft"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </SectionCard>
        <MediaSlot
          label={profile.sliderCaption}
          className="min-h-64 rounded-2xl lg:min-h-full"
        />
      </div>
      <ol className="mt-10">
        {profile.timeline.map((item) => {
          const { mark, when, what } = splitTimelineItem(item);
          return <TimelineRow key={item} mark={mark} when={when} what={what} />;
        })}
      </ol>
      <h2 className="mt-12 font-serif text-2xl text-white">{profile.companyHeading}</h2>
      <MediaSlot label={profile.companyHeading} className="mt-4 min-h-56 rounded-2xl" />
    </div>
  );
}
