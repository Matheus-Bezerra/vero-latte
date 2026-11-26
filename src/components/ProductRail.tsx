"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Product } from "@/data/types";

/** Celular (≤ 860 px): carrossel com scroll-snap e indicadores em forma de picolé. */
export function ProductRail({ products, label }: { products: Product[]; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const rail = ref.current;
    const first = rail?.firstElementChild as HTMLElement | null;
    if (!rail || !first) return;
    setActive(Math.round(rail.scrollLeft / (first.offsetWidth + 16)));
  };

  return (
    <>
      <div className="p-rail" ref={ref} onScroll={onScroll} role="region" aria-label={label}>
        {products.map((p) => (
          <a
            key={p.id}
            className="p-card"
            href={p.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ph">
              <Image src={p.photo.src} alt="" sizes="78vw" />
            </div>
            <h3>{p.name}</h3>
            <p>{p.short}</p>
          </a>
        ))}
      </div>
      <div className="rail-dots" aria-hidden="true">
        {products.map((p, i) => (
          <span key={p.id} className={i === active ? "on" : undefined} />
        ))}
      </div>
    </>
  );
}
