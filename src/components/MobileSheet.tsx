"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { logo } from "@/data/images";
import { navItems, navLabels, site } from "@/data/site";
import { Button } from "./ui/Button";
import { PopsiclePattern } from "./ui/PopsiclePattern";

type Props = { open: boolean; onClose: () => void };

/** Menu em tela cheia (≤ 980 px): foco preso, Esc fecha, scroll do body travado. */
export function MobileSheet({ open, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const sheet = ref.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !sheet) return;
      const focusables = sheet.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      ref={ref}
      id="sheet"
      className={`sheet ${open ? "open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={navLabels.sheetLabel}
      inert={!open}
    >
      <div className="sheet-top">
        <Image src={logo} alt={site.logoAlt} width={84} height={87} sizes="84px" />
        <button ref={closeRef} type="button" className="menu-btn" onClick={onClose}>
          {navLabels.close}
        </button>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} onClick={onClose}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <PopsiclePattern strip className="sheet-strip" />
      <div className="sheet-cta">
        <Button href="#delivery" onClick={onClose}>
          {navLabels.delivery}
        </Button>
        <Button href="#lojas" variant="line" onClick={onClose}>
          {navLabels.sheetStores}
        </Button>
      </div>
    </div>
  );
}
