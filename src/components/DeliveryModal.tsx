"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { delivery } from "@/data/contacts";
import type { DeliveryApp } from "@/data/types";
import { ExternalLink } from "./ui/ExternalLink";

type Props = { apps: readonly DeliveryApp[] };

/**
 * Botões com o logo de cada app. App com uma unidade abre o link em nova aba; com mais de uma,
 * abre um modal para escolher a unidade e então o link abre em nova aba.
 * Foco preso, Esc fecha, scroll do body travado e foco devolvido ao botão de origem.
 */
export function DeliveryApps({ apps }: Props) {
  const [open, setOpen] = useState(false);
  const [app, setApp] = useState<DeliveryApp | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  const openApp = (next: DeliveryApp, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setApp(next);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    document.body.style.setProperty("overflow", "hidden");
    closeRef.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab" || !dialog) return;
      const focusables = dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
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
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", onKey);
      trigger?.focus({ preventScroll: true });
    };
  }, [open, close]);

  const { modal } = delivery;
  const label = app ? `${app.name} · ${modal.chooseUnit}` : modal.chooseUnit;

  return (
    <>
      <div className="apps">
        {apps.map((a) => {
          const content = (
            <>
              <Image src={a.logo} alt={a.logoAlt} height={28} sizes="96px" />
              <small>{a.options.map((o) => o.unit).join(" e ")}</small>
            </>
          );
          const [only] = a.options;
          return a.options.length === 1 && only ? (
            <ExternalLink key={a.id} href={only.href}>
              {content}
            </ExternalLink>
          ) : (
            <button
              key={a.id}
              type="button"
              aria-haspopup="dialog"
              onClick={(e) => openApp(a, e.currentTarget)}
            >
              {content}
            </button>
          );
        })}
      </div>

      <div
        className={`dlv-modal ${open ? "open" : ""}`}
        inert={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div
          ref={dialogRef}
          className="dlv-panel"
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <header className="dlv-head">
            {app ? <Image src={app.logo} alt="" height={26} sizes="96px" /> : null}
            <button ref={closeRef} type="button" className="menu-btn" onClick={close}>
              {modal.close}
            </button>
          </header>

          {app ? (
            <div className="dlv-units">
              <p>{modal.chooseUnit}</p>
              {app.options.map((o) => (
                <ExternalLink key={o.unit} href={o.href} onClick={close}>
                  {o.unit}
                </ExternalLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
