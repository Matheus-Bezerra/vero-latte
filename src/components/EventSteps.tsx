"use client";

import { useRef } from "react";
import type { EventStep } from "@/data/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";

/**
 * Linha do tempo: a linha dourada se preenche conforme a lista entra na tela (--sp)
 * e cada passo "acende" quando a linha chega na bolinha (data-on). Sem JS ou com
 * movimento reduzido, todos os passos ficam acesos.
 */
export function EventSteps({ steps }: { steps: EventStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduced = usePrefersReducedMotion();

  useScrollProgress(({ vh }) => {
    const el = ref.current;
    if (!el) return;
    // Primeiro todas as leituras de layout, depois as escritas: intercalar as duas
    // forçaria um recálculo de layout por passo a cada frame.
    const r = el.getBoundingClientRect();
    const items = Array.from(el.children) as HTMLElement[];
    const bullets = items.map((li) => li.getBoundingClientRect().top + 16);
    const sp = clamp((vh * 0.75 - r.top) / r.height);
    // Ponta da linha, em coordenadas da viewport (a linha vai de top+8 a bottom-8).
    const head = r.top + 8 + sp * (r.height - 16);

    el.style.setProperty("--sp", sp.toFixed(3));
    if (!el.dataset.live) el.dataset.live = "1";
    items.forEach((li, i) => {
      const next = head >= bullets[i]! ? "1" : "0";
      if (li.dataset.on !== next) li.dataset.on = next;
    });
  }, !reduced);

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
