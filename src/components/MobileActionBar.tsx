"use client";

import { useRef } from "react";
import { navLabels } from "@/data/site";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "./ui/Button";

/** Barra fixa (≤ 860 px) com "Pedir delivery" e "Lojas", visível depois da abertura. */
export function MobileActionBar() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollProgress(({ vh }) => {
    const hero = document.getElementById("inicio");
    if (!hero || !ref.current) return;
    const show = hero.getBoundingClientRect().bottom < vh * 0.6;
    ref.current.classList.toggle("show", show);
    ref.current.inert = !show;
  });

  return (
    <div className="mbar on-dark" ref={ref} inert>
      <Button href="#delivery" variant="gold">
        {navLabels.delivery}
      </Button>
      <Button href="#lojas" variant="line">
        {navLabels.barStores}
      </Button>
    </div>
  );
}
