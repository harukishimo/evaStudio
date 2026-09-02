import type { ReactNode } from "react";

type SectionCardProps = {
  children: ReactNode;
  as?: "section" | "article" | "div";
  className?: string;
  padded?: boolean;
};

export function SectionCard({
  children,
  as: Tag = "section",
  className,
  padded = true,
}: SectionCardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm ${
        padded ? "px-5 py-6 md:px-8" : ""
      } ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
