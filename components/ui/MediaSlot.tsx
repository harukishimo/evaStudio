type MediaSlotProps = {
  label: string;
  className?: string;
};

export function MediaSlot({ label, className }: MediaSlotProps) {
  return (
    <div
      className={`flex items-center justify-center border border-[var(--line)] bg-black/35 text-center text-xs tracking-wide text-gold-soft/70 ${className ?? ""}`}
    >
      {label}
    </div>
  );
}
