import type { Metadata } from "next";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { PageHeading } from "@/components/ui/PageHeading";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "PROFILE" };

export default function ProfilePage() {
  return (
    <div>
      <PageHeading title={profile.heading} />
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5 text-sm leading-8 text-gold-soft">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 16)}>{paragraph}</p>
          ))}
        </div>
        <MediaSlot
          label={profile.sliderCaption}
          className="min-h-64 rounded-2xl lg:min-h-full"
        />
      </div>
      <ol className="mt-10 space-y-3">
        {profile.timeline.map((item) => (
          <li
            key={item}
            className="rounded-xl border border-white/10 px-4 py-3 text-sm leading-7 text-gold-soft"
          >
            {item}
          </li>
        ))}
      </ol>
      <h2 className="mt-12 font-serif text-2xl text-white">{profile.companyHeading}</h2>
      <MediaSlot label={profile.companyHeading} className="mt-4 min-h-56 rounded-2xl" />
    </div>
  );
}
