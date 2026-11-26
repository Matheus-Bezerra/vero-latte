"use client";

import { useRef } from "react";
import type { EventStep } from "@/data/types";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";

/** Linha do tempo: a linha dourada se preenche conforme a lista entra na tela (--sp). */
export function EventSteps({ steps }: { steps: EventStep[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useScrollProgress(({ vh }) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sp", clamp((vh * 0.75 - r.top) / r.height).toFixed(3));
  });

  return (
    <ol className="steps" ref={ref}>
      {steps.map((s) => (
        <li key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
