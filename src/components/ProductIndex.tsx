import type { Product } from "@/data/types";
import { ExternalLink } from "./ui/ExternalLink";

type Props = {
  products: Product[];
  active: number;
  onSelect: (index: number) => void;
};

/** Lista das categorias. Cada botão abre a descrição e troca a foto da vitrine. */
/**
 * Casquinha de gelato em linha dourada. No item ativo, uma cópia cheia é revelada de
 * baixo para cima (clip-path), como a casquinha sendo servida.
 */
function GelatoCone() {
  // bola com borda "escorrendo" sobre a casquinha, e casquinha com o quadriculado da massa
  const shape = (
    <>
      <path d="M5 11.2a7 7 0 0 1 14 0c0 .9-.7 1.3-1.4 1-.7-.3-1.3.4-1.9.4-.7 0-1-.8-1.8-.8s-1.1.8-1.9.8-1.1-.8-1.9-.8-1.1.8-1.8.8c-.6 0-1.2-.7-1.9-.4-.7.3-1.4-.1-1.4-1Z" />
      <path d="M6.6 13.6 12 22.5l5.4-8.9" />
    </>
  );
  return (
    <span className="p-cone" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="cone-line">
        {shape}
        <path className="cone-grid" d="M8.8 15.2l4.6 4.6M10.6 14.4l4.1 4.1M15.2 15.2l-4.6 4.6M13.4 14.4l-4.1 4.1" />
      </svg>
      <svg viewBox="0 0 24 24" className="cone-fill">
        {shape}
      </svg>
    </span>
  );
}

export function ProductIndex({ products, active, onSelect }: Props) {
  const hoverSelect = (i: number) => {
    if (window.matchMedia("(hover: hover)").matches) onSelect(i);
  };

  return (
    <ul className="p-index">
      {products.map((p, i) => {
        const isActive = i === active;
        const bodyId = `pb-${p.id}`;
        return (
          <li key={p.id} className={`p-item ${isActive ? "active" : ""}`}>
            <button
              type="button"
              aria-expanded={isActive}
              aria-controls={bodyId}
              onClick={() => onSelect(i)}
              onMouseEnter={() => hoverSelect(i)}
            >
              <span className="p-name">{p.name}</span>
              <span className="p-chev" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <GelatoCone />
            </button>
            <div className="p-body" id={bodyId}>
              <div inert={!isActive}>
                <p>{p.description}</p>
                <ExternalLink href={p.link.href}>{p.link.label}</ExternalLink>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
