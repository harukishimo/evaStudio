"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function PageLoader() {
  const pathname = usePathname();
  const first = useRef(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const hideAfter = first.current ? 900 : 750;
    first.current = false;
    const timer = window.setTimeout(() => setVisible(false), hideAfter);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="page-loader-veil pointer-events-none fixed inset-0 z-50 bg-[#050308]/55">
      <div className="absolute top-0 left-0 h-[2px] w-full overflow-hidden">
        <div className="page-loader-bar h-full w-1/2 bg-gold" />
      </div>
      <div className="flex h-full items-center justify-center">
        <svg viewBox="0 0 120 120" className="h-16 w-16">
          <circle
            className="dash-spin"
            cx="60"
            cy="60"
            r="38"
            fill="none"
            stroke="#c9a24a"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <g className="orbit">
            <circle cx="60" cy="22" r="2.4" fill="#e6d3a3" />
          </g>
          <circle className="breathe" cx="60" cy="60" r="5" fill="#c9a24a" />
        </svg>
      </div>
    </div>
  );
}
