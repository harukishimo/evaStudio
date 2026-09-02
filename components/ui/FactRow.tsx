type FactRowProps = {
  label?: string;
  value: string;
};

export function FactRow({ label, value }: FactRowProps) {
  return (
    <div className="border-b border-white/8 py-2 last:border-b-0">
      {label ? (
        <dl className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:items-baseline">
          <dt className="text-[11px] tracking-[0.16em] text-gold">{label}</dt>
          <dd className="text-sm text-gold-soft">{value}</dd>
        </dl>
      ) : (
        <p className="text-sm text-gold-soft">{value}</p>
      )}
    </div>
  );
}
