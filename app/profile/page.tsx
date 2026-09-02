import type { Metadata } from "next";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "PROFILE" };

export default function ProfilePage() {
  return (
    <div>
      <h1 className="border-b border-gold/40 pb-3 font-serif text-3xl text-gold">
        {profile.heading}
      </h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-sm leading-8 text-gold-soft">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 16)}>{paragraph}</p>
          ))}
          <ul className="space-y-3">
            {profile.timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <MediaSlot
          label={profile.sliderCaption}
          className="min-h-80 md:min-h-full"
        />
      </div>
      <h2 className="mt-14 font-serif text-2xl text-gold">{profile.companyHeading}</h2>
      <MediaSlot label={profile.companyHeading} className="mt-4 min-h-56" />
    </div>
  );
}
