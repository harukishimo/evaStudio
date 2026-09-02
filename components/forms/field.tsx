export function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="text-gold">
        {label}
        {required ? " *" : ""}
      </span>
      <div className="mt-1">{children}</div>
      {error ? <span className="mt-1 block text-xs text-pink">{error}</span> : null}
    </label>
  );
}

export const inputClass =
  "w-full border border-gold/35 bg-black/40 px-3 py-2 text-foreground outline-none focus:border-gold";
