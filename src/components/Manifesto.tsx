"use client";

import { useRef } from "react";
import { manifesto } from "@/data/manifesto";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const lineCount = manifesto.stanzas.reduce((n, s) => n + s.length, 0);

/** Manifesto preenchido verso a verso (máscara) conforme a rolagem. */
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
    const v = mp * (lineCount + 1.2);
    text.querySelectorAll<HTMLElement>(".ln").forEach((l, i) => {
      // preenchimento contínuo do verso, lido pelo clip-path
      l.style.setProperty("--p", reduce ? "1" : clamp(v - i).toFixed(3));
    });
    const last = text.querySelector<HTMLElement>(".last");
    last?.style.setProperty("--p", reduce ? "1" : clamp(v - lineCount).toFixed(3));
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
                      <span className="ln" data-text={line}>
                        {line}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
              <span className="last" data-text={manifesto.closing}>
                {manifesto.closing}
              </span>
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
