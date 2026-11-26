import { OFFICIAL_SITE } from "./site";
import { bombomImg, granImg, massaImg, palitoImg, presenteImg } from "./images";
import type { Product } from "./types";

export const productsSection = {
  kicker: "Produtos",
  title: "Um gelato para cada momento",
  intro: "Do palito para comer andando à caixa que vira presente. Escolha por onde começar.",
  railLabel: "Categorias de produtos",
} as const;

export const products: Product[] = [
  {
    id: "palito",
    name: "Gelato no Palito",
    description:
      "Nossa sobremesa no palito, em sabores como brigadeiro, pistache, capim-santo, paçoca e torta de limão.",
    short: "Sobremesa no palito em sabores como brigadeiro e pistache.",
    link: {
      label: "Ver todos os sabores",
      href: `${OFFICIAL_SITE}/gelatonopalito`,
      external: true,
    },
    photo: {
      src: palitoImg,
      alt: "Gelato de brigadeiro no palito coberto de chocolate e granulado",
    },
    caption: "Gelato de brigadeiro",
  },
  {
    id: "bombons",
    name: "Bombons",
    description:
      "Versões pequenas das nossas sobremesas no palito, com casquinha de chocolate. Para provar vários de uma vez.",
    short: "Versões pequenas das sobremesas no palito.",
    link: { label: "Ver bombons", href: `${OFFICIAL_SITE}/bombons`, external: true },
    photo: { src: bombomImg, alt: "Bombom gelado cortado ao meio mostrando recheio de chocolate" },
    caption: "Bombons",
  },
  {
    id: "gran-gelato",
    name: "Gran Gelato",
    description: "Camadas de gelato em formato de sobremesa para fatiar e dividir à mesa.",
    short: "Camadas de gelato para fatiar e dividir.",
    link: { label: "Ver Gran Gelato", href: `${OFFICIAL_SITE}/grangelato`, external: true },
    photo: {
      src: granImg,
      alt: "Gran Gelato em camadas, fatiado e servido em pratos de cerâmica",
    },
    caption: "Gran Gelato",
  },
  {
    id: "massa",
    name: "Gelato Massa",
    description: "Gelatos e sorbets para servir na colher, como pistache, doce de leite e manga.",
    short: "Gelatos e sorbets para servir na colher.",
    link: { label: "Ver gelato massa", href: `${OFFICIAL_SITE}/gelatomassa`, external: true },
    photo: { src: massaImg, alt: "Potes de gelato de pistache com pistaches ao redor" },
    caption: "Gelato de pistache",
  },
  {
    id: "presentes",
    name: "Presentes",
    description: "Caixas com 12 gelatos, latas e kit com bolsa térmica, prontos para presentear.",
    short: "Caixas, latas e kit com bolsa térmica.",
    link: { label: "Ver presentes", href: `${OFFICIAL_SITE}/presentes`, external: true },
    photo: {
      src: presenteImg,
      alt: "Caixa de presente rosa com estampa de picolés dourados e gelatos",
    },
    caption: "Caixa de presente",
  },
];
