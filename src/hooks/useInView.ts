"use client";

import { useEffect, type RefObject } from "react";

/**
 * Marca o elemento com data-rv="in" quando ele entra na tela (uma vez).
 * Sem JS, ou com movimento reduzido, o conteúdo já nasce visível.
 */
export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.15) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = () => {
      el.dataset.rv = "in";
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return show();
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.85 && r.bottom > 0) return show();
    el.dataset.rv = "pending";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
}
