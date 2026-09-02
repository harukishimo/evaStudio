type TimelineRowProps = {
  mark: string;
  when: string;
  what: string;
};

export function TimelineRow({ mark, when, what }: TimelineRowProps) {
  return (
    <li className="relative grid gap-1 border-l border-gold/45 py-3 pl-5 sm:grid-cols-[10.5rem_1fr] sm:gap-4">
      <span
        aria-hidden
        className="absolute top-5 left-[-3.5px] h-1.5 w-1.5 rounded-full bg-gold"
      />
      {when ? (
        <span className="text-sm text-gold">
          {mark}
          {when}
        </span>
      ) : null}
      <span className="text-sm leading-7 text-gold-soft">{what}</span>
    </li>
  );
}
