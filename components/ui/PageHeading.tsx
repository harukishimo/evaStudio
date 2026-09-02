type PageHeadingProps = {
  eyebrow?: string;
  title: string;
};

export function PageHeading({ eyebrow, title }: PageHeadingProps) {
  return (
    <header className="mb-8 md:mb-10">
      {eyebrow ? (
        <p className="text-[11px] tracking-[0.22em] text-gold/80">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 font-serif text-3xl leading-tight text-white md:text-4xl">
        {title}
      </h1>
    </header>
  );
}
