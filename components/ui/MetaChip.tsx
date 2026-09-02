type MetaChipProps = {
  children: string;
};

export function MetaChip({ children }: MetaChipProps) {
  return (
    <span className="inline-block rounded-full border border-gold/40 bg-black/40 px-3 py-1 text-xs text-gold-soft">
      {children}
    </span>
  );
}
