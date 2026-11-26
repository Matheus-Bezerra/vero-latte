"use client";

import { useRef } from "react";
import { manifesto } from "@/data/manifesto";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const lineCount = manifesto.stanzas.reduce((n, s) => n + s.length, 0);

/** Manifesto que acende verso a verso conforme a rolagem. */
export function Manifesto() {
  const trackRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const reduce = usePrefersReducedMotion();

  useScrollProgress(({ vh }) => {
    const track = trackRef.current;
    const text = textRef.current;
    if (!track || !text) return;
    const r = track.getBoundingClientRect();
    const mp = clamp(-r.top / (track.offsetHeight - vh));
    track.style.setProperty("--mp", mp.toFixed(3));
    const n = Math.floor(mp * (lineCount + 1.2));
    text.querySelectorAll(".ln").forEach((l, i) => l.classList.toggle("on", reduce || i < n));
    text.querySelector(".last")?.classList.toggle("on", reduce || n > lineCount);
  });

  return (
    <section className="manifesto" id="manifesto" aria-labelledby="man-t">
      <div
        className="man-track"
        ref={trackRef}
        style={{ "--lines": lineCount + 2 } as React.CSSProperties}
      >
        <div className="man-stage">
          <div className="man-inner">
            <h2 className="man-side" id="man-t">
              {manifesto.title}
            </h2>
            <p className="man-text" ref={textRef}>
              {manifesto.stanzas.map((stanza) => (
                <span className="stanza" key={stanza[0]}>
                  {stanza.map((line, i) => (
                    <span key={line}>
                      {i > 0 && " "}
                      <span className="ln">{line}</span>
                    </span>
                  ))}
                </span>
              ))}
              <span className="last">{manifesto.closing}</span>
            </p>
          </div>
          <div className="man-progress" aria-hidden="true">
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
