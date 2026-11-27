"use client";

import { useEffect, useRef } from "react";

/** Raio de influência do cursor (px) e inclinação máxima (graus). */
const REACH = 140;
const MAX_TILT = 16;
const STEP = 22;

/**
 * Faixa de picolés do rodapé, desenhada em elementos (não em background) para que
 * os picolés perto do cursor se inclinem, como o ícone do botão.
 * Só reage com ponteiro fino e sem movimento reduzido; no resto, é uma faixa estática.
 */
export function PopsicleStrip({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const build = () => {
      const n = Math.ceil(el.clientWidth / STEP) + 1;
      if (el.childElementCount === n) return;
      el.replaceChildren(
        ...Array.from({ length: n }, (_, i) => {
          const s = document.createElement("i");
          s.className = i % 2 ? "alt" : "";
          return s;
        }),
      );
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(el);

    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!fine.matches) return () => ro.disconnect();

    let frame = 0;
    let x: number | null = null;
    const paint = () => {
      frame = 0;
      const items = el.children;
      const left = el.getBoundingClientRect().left;
      for (let i = 0; i < items.length; i++) {
        const s = items[i] as HTMLElement;
        let tilt = 0;
        if (x !== null) {
          const dx = left + i * STEP + STEP / 2 - x;
          const k = Math.max(0, 1 - Math.abs(dx) / REACH);
          tilt = -Math.sign(dx) * k * MAX_TILT;
        }
        s.style.setProperty("--tilt", `${tilt.toFixed(1)}deg`);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const move = (e: PointerEvent) => {
      x = e.clientX;
      schedule();
    };
    const leave = () => {
      x = null;
      schedule();
    };
    el.addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(frame);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <div ref={ref} className={`popsicle-strip ${className}`.trim()} aria-hidden="true" />;
}
