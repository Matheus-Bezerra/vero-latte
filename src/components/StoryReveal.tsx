"use client";

import { useEffect, useRef } from "react";

/** Marca a história com data-in quando entra na tela (uma vez). Sem JS, fica visível. */
export function StoryReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => {
      el.dataset.in = "in";
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return show();
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.8 && r.bottom > 0) return show();
    el.dataset.in = "pending";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="wrap story-grid" ref={ref}>
      {children}
    </div>
  );
}
