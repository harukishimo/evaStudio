type EvaMarkProps = {
  tone: "pink" | "teal" | "gold";
  className?: string;
};

const colors = {
  pink: "#e48aa8",
  teal: "#5ec4c0",
  gold: "#c9a24a",
};

export function EvaMark({ tone, className }: EvaMarkProps) {
  const color = colors[tone];
  return (
    <svg
      viewBox="0 0 160 160"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <circle cx="80" cy="80" r="74" stroke={color} strokeWidth="1.2" />
      <circle cx="80" cy="80" r="62" stroke={color} strokeWidth="0.7" />
      <path
        d="M80 18c8 18 10 32 0 46-10-14-8-28 0-46Zm0 124c-8-18-10-32 0-46 10 14 8 28 0 46ZM18 80c18-8 32-10 46 0-14 10-28 8-46 0Zm124 0c-18 8-32 10-46 0 14-10 28-8 46 0Z"
        stroke={color}
        strokeWidth="1"
      />
      <path
        d="M48 48c14 6 22 14 32 32-18-10-26-18-32-32Zm64 0c-14 6-22 14-32 32 18-10 26-18 32-32ZM48 112c14-6 22-14 32-32-18 10-26 18-32 32Zm64 0c-14-6-22-14-32-32 18 10 26 18 32 32Z"
        stroke={color}
        strokeWidth="0.9"
      />
      <text
        x="80"
        y="86"
        textAnchor="middle"
        fill={color}
        fontFamily="serif"
        fontSize="22"
        letterSpacing="2"
      >
        EVA
      </text>
    </svg>
  );
}
