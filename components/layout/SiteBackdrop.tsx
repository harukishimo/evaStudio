import { media } from "@/content/media";

export function SiteBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 bg-cover bg-[position:80%_8%]"
      style={{ backgroundImage: `url(${media.siteBackground})` }}
    >
      <div className="absolute inset-0 bg-[#050308]/55" />
    </div>
  );
}
