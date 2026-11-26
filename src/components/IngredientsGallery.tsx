"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/data/types";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const DESKTOP = "(min-width: 861px)";
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Fotos de ingredientes.
 * Desktop: pilha de cartas guiada pela rolagem (o palco sticky fica no pai, `.ingr-track`).
 * Celular e movimento reduzido: grade escalonada estática, com entrada suave.
 */
export function IngredientsGallery({ items, label }: { items: GalleryItem[]; label: string }) {
  const deckRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = usePrefersReducedMotion();
  const last = items.length - 1;

  // Progresso 0→1 do trilho vira `--t` (0 a n-1); o CSS calcula cada carta com calc().
  useScrollProgress(({ vh }) => {
    const deck = deckRef.current;
    const track = deck?.closest(".ingr-track");
    if (!deck || !track || !window.matchMedia(DESKTOP).matches) return;
    const span = track.clientHeight - vh;
    if (span <= 0) return;
    const t = clamp(-track.getBoundingClientRect().top / span) * last;
    deck.style.setProperty("--t", t.toFixed(3));
    setActive(Math.round(t));
  }, !reduce);

  // Grade estática: cada foto entra com um leve deslize ao aparecer na tela.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck || reduce || !("IntersectionObserver" in window)) return;
    const figs = Array.from(deck.querySelectorAll<HTMLElement>("figure"));
    figs.forEach((f) => (f.dataset.reveal = "pending"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          (e.target as HTMLElement).dataset.reveal = "in";
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    figs.forEach((f) => io.observe(f));
    return () => {
      io.disconnect();
      figs.forEach((f) => delete f.dataset.reveal);
    };
  }, [reduce]);

  return (
    <div className="ingr-photos">
      <div
        className="ingr-deck"
        ref={deckRef}
        role="group"
        aria-label={label}
        style={{ "--n": items.length } as React.CSSProperties}
      >
        {items.map((item, i) => (
          <figure key={item.caption} style={{ "--i": i } as React.CSSProperties}>
            <div className="ph">
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                sizes="(max-width: 860px) 46vw, 480px"
                style={item.position ? { objectPosition: item.position } : undefined}
              />
            </div>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="ingr-live" aria-live="polite">
        <span className="ingr-count" aria-hidden="true">
          {pad(active + 1)} / {pad(items.length)}
        </span>
        <span>{items[active]?.caption}</span>
      </p>
    </div>
  );
}
