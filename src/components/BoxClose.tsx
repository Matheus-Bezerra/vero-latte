"use client";

import Image from "next/image";
import { useRef } from "react";
import { closing } from "@/data/closing";
import { logo } from "@/data/images";
import { site } from "@/data/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "./ui/Button";

/**
 * Fecho da página, espelho da abertura: as duas metades da tampa rosa deslizam
 * conforme a seção entra na tela (--c, 0→1) e se encontram atrás do rótulo creme.
 * Sem JS ou com movimento reduzido, a caixa já aparece fechada.
 */
export function BoxClose() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  useScrollProgress(({ vh }) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    // Começa quando o topo entra pela base; fecha por completo com a seção a 15% do topo.
    const c = clamp((vh - r.top) / (vh * 0.85));
    el.style.setProperty("--c", c.toFixed(3));
  }, !reduced);

  return (
    <section className="box-close" aria-label={closing.sectionLabel} ref={ref}>
      <div className="lid-half pattern l" aria-hidden="true" />
      <div className="lid-half pattern r" aria-hidden="true" />
      <div className="close-label">
        <Image className="logo" src={logo} alt={site.logoAlt} sizes="200px" />
        <p>{closing.line}</p>
        <Button href={closing.cta.href} variant="choc">
          {closing.cta.label}
        </Button>
      </div>
    </section>
  );
}
