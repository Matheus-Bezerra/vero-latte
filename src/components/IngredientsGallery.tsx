"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryItem } from "@/data/types";
import { clamp, useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export type GalleryControls = { prev: string; next: string; goTo: string };

const DESKTOP = "(min-width: 861px)";
const DRAG_THRESHOLD = 60;
/** Pausa no fim do trilho (em vh): a última foto fica inteira antes de a seção subir. Igual ao `+ 40svh` do CSS. */
const HOLD_VH = 0.4;
const pad = (n: number) => String(n).padStart(2, "0");

function Chevron({ flip }: { flip?: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={flip ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Fotos de ingredientes.
 * Desktop: a rolagem guia a galeria (o palco sticky fica no pai, `.ingr-track`).
 * Uma foto por vez, com transição contínua (clip-path + zoom).
 * A rolagem é a única fonte de verdade: setas, pontos e arrasto só rolam a página até o ponto certo.
 * Celular e movimento reduzido: grade escalonada estática, com entrada suave.
 */
export function IngredientsGallery({
  items,
  label,
  controls,
}: {
  items: GalleryItem[];
  label: string;
  controls: GalleryControls;
}) {
  const deckRef = useRef<HTMLDivElement>(null);
  const dragX = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const reduce = usePrefersReducedMotion();
  const last = items.length - 1;

  const track = () => deckRef.current?.closest<HTMLElement>(".ingr-track") ?? null;
  const span = () => {
    const el = track();
    return el ? el.clientHeight - window.innerHeight * (1 + HOLD_VH) : 0;
  };

  // Progresso 0→1 da rolagem vira `--t` (0 a n-1); o CSS calcula cada foto com calc().
  useScrollProgress(() => {
    const deck = deckRef.current;
    const el = track();
    if (!deck || !el || !window.matchMedia(DESKTOP).matches) return;
    const s = span();
    if (s <= 0) return;
    // p chega a 1 antes de o palco soltar; o restante do trilho é a pausa.
    const p = clamp(-el.getBoundingClientRect().top / s);
    const t = p * last;
    deck.style.setProperty("--t", t.toFixed(3));
    setActive(Math.round(t));
  }, !reduce);

  const goTo = (i: number) => {
    const el = track();
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + (clamp(i, 0, last) / last) * span(),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  // Arrastar com o mouse (toque já rola a página nativamente).
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    dragX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.dataset.dragging = "true";
  };
  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    delete e.currentTarget.dataset.dragging;
    if (Math.abs(dx) > DRAG_THRESHOLD) goTo(active + (dx < 0 ? 1 : -1));
  };

  // No desktop as fotos esperam escondidas (clip-path) e o lazy-load do navegador as busca tarde,
  // revelando a imagem pela metade. Ao se aproximar da seção, carrega todas de uma vez.
  useEffect(() => {
    const el = track();
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e?.isIntersecting) return;
        deckRef.current?.querySelectorAll("img").forEach((img) => (img.loading = "eager"));
        io.disconnect();
      },
      { rootMargin: "100% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
        className="ingr-viewport"
        onPointerDown={onPointerDown}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDragStart={(e) => e.preventDefault()}
      >
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
                  sizes="(max-width: 860px) 46vw, 50vw"
                  quality={85}
                  draggable={false}
                  style={item.position ? { objectPosition: item.position } : undefined}
                />
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="ingr-controls">
        <div className="ingr-arrows">
          <button
            type="button"
            className="ingr-btn"
            aria-label={controls.prev}
            disabled={active === 0}
            onClick={() => goTo(active - 1)}
          >
            <Chevron flip />
          </button>
          <button
            type="button"
            className="ingr-btn"
            aria-label={controls.next}
            disabled={active === last}
            onClick={() => goTo(active + 1)}
          >
            <Chevron />
          </button>
        </div>
        <p className="ingr-live" aria-live="polite">
          <span className="ingr-count" aria-hidden="true">
            {pad(active + 1)} / {pad(items.length)}
          </span>
          <span>{items[active]?.caption}</span>
        </p>
        <div className="ingr-dots">
          {items.map((item, i) => (
            <button
              key={item.caption}
              type="button"
              className="ingr-dot"
              aria-label={`${controls.goTo} ${i + 1}: ${item.caption}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
