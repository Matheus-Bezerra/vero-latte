import { marianaImg } from "./images";
import type { Photo } from "./types";

export const story = {
  kicker: "Nossa história",
  title: "Da rigidez das leis à suavidade do gelato",
  paragraphs: [
    "Depois de dez anos como advogada, Mariana fez um julgamento interno: será que essa era a sua verdadeira paixão? Trocou o terninho pelo avental, formou-se chef de cozinha internacional com especialização em confeitaria e foi a Bolonha, na Itália, estudar na Carpigiani Gelato University.",
    "Em 2014 nasceu a Vero Latte, com uma nova forma de viver o gelato: uma sobremesa artesanal no palito, delicada e sofisticada, simples de levar para qualquer celebração.",
  ],
  quote: "Receber. Servir. Encantar.",
  facts: [
    "Desde 2014",
    "Carpigiani Gelato University, em Bolonha",
    "Produção artesanal em São Paulo",
  ],
  person: { name: "Mariana Galvão", role: "Fundadora da Vero Latte" },
  photo: {
    src: marianaImg,
    alt: "Mariana Galvão, fundadora da Vero Latte, sorrindo em sua loja, de dólmã preta",
  } satisfies Photo,
} as const;
