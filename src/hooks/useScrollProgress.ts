"use client";

import { useEffect, useRef } from "react";

/** Informações do frame passadas a cada assinante. */
export type ScrollFrame = { vh: number; y: number };
type Subscriber = (frame: ScrollFrame) => void;

// Um único loop requestAnimationFrame para a página toda, disparado por scroll e
// resize passivos. Cada componente assina e escreve suas custom properties.
const subscribers = new Set<Subscriber>();
let ticking = false;
let listening = false;

function run() {
  ticking = false;
  const frame = { vh: window.innerHeight, y: window.scrollY };
  subscribers.forEach((fn) => fn(frame));
}

function schedule() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(run);
}

function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
}

function unlisten() {
  if (!listening || subscribers.size > 0) return;
  listening = false;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
}

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

/** Assina o loop de rolagem. O callback roda no frame, sem re-render do React. */
export function useScrollProgress(callback: Subscriber, enabled = true) {
  const ref = useRef(callback);
  useEffect(() => {
    ref.current = callback;
  });

  useEffect(() => {
    if (!enabled) return;
    const sub: Subscriber = (f) => ref.current(f);
    subscribers.add(sub);
    listen();
    schedule();
    return () => {
      subscribers.delete(sub);
      unlisten();
    };
  }, [enabled]);
}
