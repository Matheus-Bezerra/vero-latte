import { affogatoImg, cafeImg, cheesecakeImg, chocolateImg, mangaImg, pistacheImg } from "./images";
import type { GalleryItem } from "./types";

export const ingredients = {
  kicker: "Ingredientes selecionados",
  galleryLabel: "Fotos de ingredientes e receitas da Vero Latte",
  controls: {
    prev: "Foto anterior",
    next: "Próxima foto",
    goTo: "Ir para a foto",
  },
  title: "O cuidado começa antes do palito",
  text: "Cacau escolhido entre as melhores regiões do mundo. Frutas frescas e da estação, de produtores locais. E cada receita feita de forma artesanal.",
  list: [
    { term: "Cacau", detail: "de origens selecionadas" },
    { term: "Frutas", detail: "frescas, sazonais e locais" },
    { term: "Receitas", detail: "artesanais, do clássico ao inesperado" },
  ],
} as const;

// Galeria: 3 fotos do site e 3 do Pinterest. Para usar fotos do Instagram,
// coloque os arquivos em public/img/instagram/, importe em images.ts e troque aqui.
export const gallery: GalleryItem[] = [
  {
    photo: { src: chocolateImg, alt: "Chocolate derretido escorrendo sobre gelatos no palito" },
    caption: "Cobertura de chocolate",
  },
  {
    photo: { src: mangaImg, alt: "Sorbet de manga em bolas, ao lado de fatias da fruta" },
    caption: "Sorbet de manga",
  },
  {
    photo: {
      src: cafeImg,
      alt: "Duas mãos servem um palito de chocolate com granulado e outro listrado, ao lado de uma xícara de café",
    },
    caption: "Café ou gelato no palito",
  },
  {
    photo: {
      src: cheesecakeImg,
      alt: "Fatia de cheesecake com calda de goiabada e um gelato no palito por cima",
    },
    caption: "Cheesecake com goiabada",
    position: "50% 72%",
  },
  {
    photo: { src: pistacheImg, alt: "Gelatos de pistache empilhados com pistaches" },
    caption: "Pistache",
  },
  {
    photo: {
      src: affogatoImg,
      alt: "Copo de papel da Vero Latte com affogato e marshmallows, sobre uma base rosa",
    },
    caption: "Affogato Vero Latte",
  },
];
