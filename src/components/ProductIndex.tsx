import type { Product } from "@/data/types";
import { ExternalLink } from "./ui/ExternalLink";

type Props = {
  products: Product[];
  active: number;
  onSelect: (index: number) => void;
};

/** Lista das categorias. Cada botão abre a descrição e troca a foto da vitrine. */
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
              <span className="p-dot" aria-hidden="true" />
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
