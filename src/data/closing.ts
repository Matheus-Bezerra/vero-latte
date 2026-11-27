import { hero } from "./hero";

/** Fecho da página: a caixa volta a se fechar. Só reaproveita textos oficiais já confirmados. */
export const closing = {
  sectionLabel: "Fechamento",
  /** Tagline oficial, a mesma do rótulo da abertura. */
  line: hero.title,
  cta: { label: "Encontrar uma loja", href: "#lojas" },
} as const;
