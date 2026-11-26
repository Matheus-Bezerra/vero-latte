"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/types";
import { ProductIndex } from "./ProductIndex";

/** Desktop: índice + foto em arco que troca com revelação de baixo para cima. */
export function ProductShowcase({ products }: { products: Product[] }) {
  const [state, setState] = useState({ cur: 0, prev: -1 });

  const select = (i: number) => setState((s) => (i === s.cur ? s : { cur: i, prev: s.cur }));

  const current = products[state.cur];

  return (
    <div className="products-grid">
      <ProductIndex products={products} active={state.cur} onSelect={select} />
      <div className="showcase">
        {products.map((p, i) => (
          <Image
            key={p.id}
            src={p.photo.src}
            alt={i === state.cur ? p.photo.alt : ""}
            aria-hidden={i === state.cur ? undefined : true}
            fill
            sizes="(max-width: 860px) 1px, (max-width: 1280px) 52vw, 680px"
            className={i === state.cur ? "on" : i === state.prev ? "prev" : undefined}
          />
        ))}
        <span className="showcase-cap" aria-live="polite">
          {current?.caption}
        </span>
      </div>
    </div>
  );
}
