import { bandejaImg, carrinhoImg } from "./images";
import type { EventStep, Link, Photo } from "./types";

export const events = {
  kicker: "Eventos sociais e corporativos",
  title: "Celebre com gelato",
  intro:
    "Levamos nossos carrinhos refrigerados a eventos de todos os portes, de festas em família a ações de empresas.",
  photos: [
    { src: carrinhoImg, alt: "Carrinho refrigerado da Vero Latte, com toldo, em área arborizada" },
    { src: bandejaImg, alt: "Bandeja com gelatos no palito variados sobre gelo seco" },
  ] satisfies Photo[],
  steps: [
    {
      title: "Degustação dos sabores",
      text: "Você prova os bombons gelados, versões reduzidas de todo o cardápio, e escolhe o que vai no carrinho.",
    },
    {
      title: "Entrega e montagem",
      text: "Nosso frete especializado leva e monta o carrinho no local, no horário que você definir.",
    },
    {
      title: "Gelato na temperatura certa",
      text: "Os carrinhos têm autonomia de até 12 horas. Promotoras para servir os convidados são opcionais.",
    },
    {
      title: "Retirada",
      text: "Ao fim do evento, buscamos o carrinho no horário combinado.",
    },
  ] satisfies EventStep[],
  primary: {
    label: "Planejar meu evento",
    href: "#contato",
  } satisfies Link,
} as const;
