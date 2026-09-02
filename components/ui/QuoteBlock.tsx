import type { ReactNode } from "react";

type QuoteBlockProps = {
  children: ReactNode;
};

export function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <blockquote className="max-w-[40rem] border-l border-gold pl-4 font-serif text-[1.05rem] leading-8 text-white">
      {children}
    </blockquote>
  );
}
