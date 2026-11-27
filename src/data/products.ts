import { bombomImg, granImg, massaImg, palitoImg, presenteImg, todosImg } from "./images";
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
      href: "/produtos?categoria=palito",
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
    link: { label: "Ver bombons", href: "/produtos?categoria=bombons" },
    photo: { src: bombomImg, alt: "Bombom gelado cortado ao meio mostrando recheio de chocolate" },
    caption: "Bombons",
  },
  {
    id: "gran-gelato",
    name: "Gran Gelato",
    description: "Camadas de gelato em formato de sobremesa para fatiar e dividir à mesa.",
    short: "Camadas de gelato para fatiar e dividir.",
    link: { label: "Ver Gran Gelato", href: "/produtos?categoria=gran-gelato" },
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
    link: { label: "Ver gelato massa", href: "/produtos?categoria=massa" },
    photo: { src: massaImg, alt: "Potes de gelato de pistache com pistaches ao redor" },
    caption: "Gelato de pistache",
  },
  {
    id: "presentes",
    name: "Presentes",
    description: "Caixas com 12 gelatos, latas e kit com bolsa térmica, prontos para presentear.",
    short: "Caixas, latas e kit com bolsa térmica.",
    link: { label: "Ver presentes", href: "/produtos?categoria=presentes" },
    photo: {
      src: presenteImg,
      alt: "Caixa de presente rosa com estampa de picolés dourados e gelatos",
    },
    caption: "Caixa de presente",
  },
  {
    id: "todos",
    name: "Todos os produtos",
    description:
      "Os sabores de cada categoria em uma página só, com descrição, ingredientes e avisos de cada produto.",
    short: "Todos os sabores, com os detalhes de cada um.",
    link: { label: "Ver todos os produtos", href: "/produtos" },
    photo: {
      src: todosImg,
      alt: "Gelatos no palito com cobertura branca e goiabada lado a lado",
    },
    caption: "Todos os produtos",
  },
];
