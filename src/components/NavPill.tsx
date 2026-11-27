"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { logo } from "@/data/images";
import { navItems, navLabels } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "./ui/Button";
import { MobileSheet } from "./MobileSheet";

export function NavPill() {
  const navRef = useRef<HTMLElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  // A altura da faixa de aviso define o topo do menu (--notice-h).
  useEffect(() => {
    const notice = document.getElementById("notice");
    if (!notice) return;
    const set = () =>
      document.documentElement.style.setProperty("--notice-h", `${notice.offsetHeight}px`);
    const ro = new ResizeObserver(set);
    ro.observe(notice);
    set();
    return () => ro.disconnect();
  }, []);

  useScrollProgress(({ y }) => {
    navRef.current?.classList.toggle("stuck", y > 40);
  });

  return (
    <>
      <header className="nav" ref={navRef}>
        <a className="nav-logo" href="#inicio" aria-label={navLabels.logoHome}>
          <Image src={logo} alt="" width={46} height={47} sizes="46px" />
          <span>{navLabels.brand}</span>
        </a>
        <nav aria-label={navLabels.ariaNav}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button href="#delivery" stick className="nav-cta">
          {navLabels.delivery}
        </Button>
        <button
          ref={menuBtnRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="sheet"
          onClick={() => setOpen(true)}
        >
          {navLabels.menu}
        </button>
      </header>
      <MobileSheet
        open={open}
        onClose={() => {
          setOpen(false);
          menuBtnRef.current?.focus({ preventScroll: true });
        }}
      />
    </>
  );
}
