"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { catalogPage } from "@/data/catalog";
import type { CatalogItem } from "@/data/types";
import { ExternalLink } from "./ui/ExternalLink";

/** Mesmo `sizes` no card e no modal: a foto do modal já está em cache quando a transição captura. */
export const CATALOG_PHOTO_SIZES = "(max-width: 640px) 50vw, (max-width: 860px) 100vw, 400px";

type Props = {
  item: CatalogItem | null;
  categoryLabel?: string;
  /** Página da categoria no site oficial, mostrada no pé do modal. */
  officialHref?: string;
  /** Pedido de fechar (botão, Esc, clique fora). O pai anima e então zera `item`. */
  onRequestClose: () => void;
};

/**
 * Detalhe do produto em <dialog> nativo: showModal() prende o foco e trava o fundo,
 * e o navegador devolve o foco ao card que abriu. Abrir e fechar seguem `item`, de forma
 * síncrona (layout effect), para caber dentro de uma View Transition do pai.
 */
export function ProductModal({ item, categoryLabel, officialHref, onRequestClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const { modal } = catalogPage;

  useLayoutEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.setProperty("overflow", "hidden");
    }
    if (!item && dialog.open) {
      dialog.close();
      document.documentElement.style.removeProperty("overflow");
    }
  }, [item]);

  // Saindo da página com o modal aberto (voltar do navegador, link), a trava de rolagem
  // não pode ir junto para a próxima página.
  useLayoutEffect(
    () => () => {
      document.documentElement.style.removeProperty("overflow");
    },
    [],
  );

  const titleId = item ? `cat-modal-${item.id}` : undefined;

  return (
    <dialog
      ref={ref}
      className="cat-modal"
      aria-labelledby={titleId}
      onCancel={(e) => {
        e.preventDefault();
        onRequestClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onRequestClose();
      }}
    >
      {item ? (
        <div className="cat-panel">
          <div className="cat-modal-ph" style={{ viewTransitionName: "cat-photo" }}>
            <Image src={item.photo.src} alt={item.photo.alt} fill sizes={CATALOG_PHOTO_SIZES} />
          </div>
          <div className="cat-modal-body">
            <div className="cat-modal-head">
              {categoryLabel ? <p className="cat-modal-cat">{categoryLabel}</p> : null}
              <button type="button" className="menu-btn" onClick={onRequestClose} autoFocus>
                {modal.close}
              </button>
            </div>
            <h2 id={titleId}>{item.name}</h2>
            <p className="cat-modal-lead">{item.description}</p>
            {item.notes?.map((n) => (
              <p key={n} className="cat-modal-note">
                {n}
              </p>
            ))}
            {item.details?.map((d) => (
              <p key={d.slice(0, 24)}>{d}</p>
            ))}
            {item.ingredients ? (
              <section aria-labelledby={`${titleId}-ing`}>
                <h3 id={`${titleId}-ing`}>{modal.ingredients}</h3>
                <p>{item.ingredients}</p>
              </section>
            ) : null}
            {item.allergens ? (
              <section aria-labelledby={`${titleId}-alg`}>
                <h3 id={`${titleId}-alg`}>{modal.allergens}</h3>
                <p>{item.allergens}</p>
              </section>
            ) : null}
            {officialHref && categoryLabel ? (
              <p className="cat-modal-foot">
                <ExternalLink href={officialHref}>
                  {modal.official(categoryLabel)} <span aria-hidden="true">↗</span>
                </ExternalLink>
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
