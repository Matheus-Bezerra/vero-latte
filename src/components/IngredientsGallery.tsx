"use client";

import Image from "next/image";
import { useRef } from "react";
import type { GalleryItem } from "@/data/types";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Galeria com parallax suave (desligado com movimento reduzido). */
export function IngredientsGallery({ items }: { items: GalleryItem[] }) {
  const figs = useRef<(HTMLElement | null)[]>([]);
  const reduce = usePrefersReducedMotion();

  useScrollProgress(({ vh }) => {
    figs.current.forEach((f, i) => {
      const speed = items[i]?.speed ?? 0;
      if (!f) return;
      const r = f.getBoundingClientRect();
      const c = r.top + r.height / 2 - vh / 2;
      f.style.transform = `translateY(${(c * speed).toFixed(1)}px)`;
    });
  }, !reduce);

  return (
    <div className="ingr-photos">
      {items.map((item, i) => (
        <figure
          key={item.caption}
          ref={(el) => {
            figs.current[i] = el;
            if (el && reduce) el.style.transform = "";
          }}
        >
          <div className="ph">
            <Image
              src={item.photo.src}
              alt={item.photo.alt}
              sizes="(max-width: 860px) 46vw, 300px"
              style={item.position ? { objectPosition: item.position } : undefined}
            />
          </div>
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
