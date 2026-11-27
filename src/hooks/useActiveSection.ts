"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "./useScrollProgress";

/**
 * Id da seção que contém a linha do meio da tela, calculado a cada frame de rolagem
 * (mesmo loop rAF do resto da página). Sem IntersectionObserver: um salto grande por
 * âncora não "pula" a seção de destino, porque o teste olha só a posição final.
 * Seções sem item no menu (ingredientes, manifesto, fecho) devolvem o próprio id ou
 * null, e assim nenhum item fica marcado por engano.
 */
export function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  const sections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
  }, []);

  useScrollProgress(({ vh }) => {
    const mid = vh / 2;
    const hit = sections.current.find((s) => {
      const r = s.getBoundingClientRect();
      return r.top <= mid && r.bottom > mid;
    });
    setActive(hit?.id || null);
  });

  return active;
}
