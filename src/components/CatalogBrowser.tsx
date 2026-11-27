"use client";

import Image from "next/image";
import { useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { catalog, catalogCategories, catalogPage } from "@/data/catalog";
import type { CatalogCategoryId, CatalogItem } from "@/data/types";
import { CATALOG_PHOTO_SIZES, ProductModal } from "./ProductModal";

export type CatalogFilter = CatalogCategoryId | "todos";
type Filter = CatalogFilter;

const labelOf = (id: CatalogCategoryId) => catalogCategories.find((c) => c.id === id)?.label;

/** Cards da primeira dobra: carregam na hora, sem esperar o lazy loading. */
const EAGER = 4;

/** Só os primeiros cards escalonam; o resto entra junto, para a grade não demorar. */
const STAGGER_CAP = 8;

/**
 * Troca de estado dentro de uma View Transition, quando o navegador tem e o visitante não
 * pediu menos movimento. Resolve quando a animação termina (ou na hora, sem transição).
 */
function withTransition(update: () => void): Promise<void> {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !document.startViewTransition) {
    update();
    return Promise.resolve();
  }
  return document.startViewTransition(() => flushSync(update)).finished;
}

/**
 * Filtro por categoria + grade de cards. O filtro vai para ?categoria= com replaceState,
 * sem nova navegação, para o link da home abrir a página já filtrada.
 */
export function CatalogBrowser({ initial = "todos" }: { initial?: Filter }) {
  const [filter, setFilter] = useState<Filter>(initial);
  const [open, setOpen] = useState<CatalogItem | null>(null);
  /** Foto do card que abriu o modal: ela "vira" a foto do modal e volta ao fechar. */
  const sourceRef = useRef<HTMLElement | null>(null);

  const openItem = (item: CatalogItem, photo: HTMLElement) => {
    sourceRef.current = photo;
    photo.style.viewTransitionName = "cat-photo";
    void withTransition(() => {
      // no estado novo o nome passa para a foto do modal
      photo.style.viewTransitionName = "";
      setOpen(item);
    });
  };

  const closeItem = () => {
    const photo = sourceRef.current;
    void withTransition(() => {
      setOpen(null);
      if (photo) photo.style.viewTransitionName = "cat-photo";
      // o foco volta ao card que abriu (a transição impede o retorno automático do <dialog>)
      photo?.closest(".cat-card")?.querySelector("button")?.focus({ preventScroll: true });
    }).finally(() => {
      if (photo) photo.style.viewTransitionName = "";
    });
  };

  const items = filter === "todos" ? catalog : catalog.filter((p) => p.category === filter);

  const choose = (next: Filter) => {
    setFilter(next);
    const url = next === "todos" ? location.pathname : `${location.pathname}?categoria=${next}`;
    window.history.replaceState(null, "", url);
  };

  const filters: { id: Filter; label: string }[] = [
    { id: "todos", label: catalogPage.allLabel },
    ...catalogCategories,
  ];

  return (
    <>
      <div className="cat-filter" role="group" aria-label={catalogPage.filterLabel}>
        {filters.map((f, i) => (
          <button
            key={f.id}
            style={{ "--i": i } as CSSProperties}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => choose(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="cat-count" aria-live="polite">
        {catalogPage.count(items.length)}
      </p>

      {/* key no filtro: a grade remonta e as fotos são servidas de novo */}
      <ul className="cat-grid" key={filter}>
        {items.map((p, i) => (
          <li key={p.id} style={{ "--i": Math.min(i, STAGGER_CAP) } as CSSProperties}>
            {/* O nome é o título do card e o botão fica dentro dele; o ::after do botão
                cobre o card inteiro, então a área de clique continua sendo o card todo. */}
            <article className="cat-card">
              <span className="cat-ph">
                <Image
                  src={p.photo.src}
                  alt={p.photo.alt}
                  sizes={CATALOG_PHOTO_SIZES}
                  loading={i < EAGER ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : undefined}
                />
              </span>
              <p className="cat-cat">{labelOf(p.category)}</p>
              <h2 className="cat-name">
                <button
                  type="button"
                  className="cat-open"
                  aria-haspopup="dialog"
                  onClick={(e) => {
                    const ph = e.currentTarget
                      .closest(".cat-card")
                      ?.querySelector<HTMLElement>(".cat-ph");
                    if (ph) openItem(p, ph);
                    else setOpen(p);
                  }}
                >
                  {p.name}
                </button>
              </h2>
              <span className="cat-cta" aria-hidden="true">
                {catalogPage.detailsCta} →
              </span>
            </article>
          </li>
        ))}
      </ul>

      <ProductModal
        item={open}
        categoryLabel={open ? labelOf(open.category) : undefined}
        officialHref={
          open ? catalogCategories.find((c) => c.id === open.category)?.officialHref : undefined
        }
        onRequestClose={closeItem}
      />
    </>
  );
}
