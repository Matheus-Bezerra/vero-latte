import { caixaRosaPanoramicaImg, caixaRosaRetratoImg } from "./images";
import type { Link, Photo } from "./types";

export const hero = {
  sectionLabel: "Abertura",
  /** Tagline oficial no rótulo (h1). */
  title: "Mais que gelato, uma experiência sensorial.",
  ctas: [
    { label: "Conhecer os gelatos", href: "#produtos" },
    { label: "Encontrar uma loja", href: "#lojas" },
  ] satisfies Link[],
  scrollHint: "Role para abrir a caixa",
  /** Frase depois da abertura (bio do Instagram, confirmada). */
  revealTitle: "Gelato de verdade para momentos de verdade.",
  revealText:
    "Receitas artesanais em forma de sobremesa no palito, para quando a vida pedir uma celebração.",
  photo: {
    src: caixaRosaPanoramicaImg,
    alt: "Caixa rosa aberta com quatro gelatos embalados, ao lado da tampa estampada com palitos e de um prato com quatro gelatos no palito",
  } satisfies Photo,
  /** Versão retrato (≈9:20) para celular e tablet em pé. */
  photoPortrait: {
    src: caixaRosaRetratoImg,
    alt: "Caixa rosa aberta com quatro gelatos embalados, ao lado da tampa estampada com palitos e de um prato com quatro gelatos no palito",
  } satisfies Photo,
} as const;
