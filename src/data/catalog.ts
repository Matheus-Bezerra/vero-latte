import { OFFICIAL_SITE } from "./site";
import * as img from "./images";
import type { CatalogCategoryId, CatalogItem, Link } from "./types";

/**
 * Página /produtos. Nomes, descrições, ingredientes e avisos foram copiados do site oficial
 * (/produtos, /gelatonopalito, /bombons, /grangelato, /gelatomassa e /presentes) em 27/11/2026.
 * O site não publica preços nem a tabela nutricional em texto, então eles não aparecem aqui.
 */
export const catalogPage = {
  metaTitle: "Todos os produtos · Vero Latte Gelato (protótipo)",
  metaDescription:
    "Gelatos no palito, bombons, Gran Gelato, gelato massa e presentes da Vero Latte Gelato.",
  kicker: "Produtos",
  title: "Todos os produtos",
  intro: "Escolha uma categoria ou veja tudo. Toque em um produto para ler os detalhes.",
  filterLabel: "Filtrar por categoria",
  allLabel: "Todos",
  /** Texto do contador, ex.: "12 produtos". */
  count: (n: number) => (n === 1 ? "1 produto" : `${n} produtos`),
  detailsCta: "Ver detalhes",
  modal: {
    close: "Fechar",
    ingredients: "Ingredientes",
    allergens: "Alergênicos",
    /** Rodapé do modal, ex.: "Ver Bombons no site oficial". */
    official: (category: string) => `Ver ${category} no site oficial`,
  },
  source: {
    intro: "Textos e fotos reproduzidos do site oficial:",
    link: {
      label: "verolattegelato.com.br/produtos",
      href: `${OFFICIAL_SITE}/produtos`,
      external: true,
    } satisfies Link,
  },
} as const;

/** Ordem dos filtros. O rótulo segue o nome da categoria na home. */
export const catalogCategories: { id: CatalogCategoryId; label: string; officialHref: string }[] = [
  { id: "palito", label: "Gelato no Palito", officialHref: `${OFFICIAL_SITE}/gelatonopalito` },
  { id: "bombons", label: "Bombons", officialHref: `${OFFICIAL_SITE}/bombons` },
  { id: "gran-gelato", label: "Gran Gelato", officialHref: `${OFFICIAL_SITE}/grangelato` },
  { id: "massa", label: "Gelato Massa", officialHref: `${OFFICIAL_SITE}/gelatomassa` },
  { id: "presentes", label: "Presentes", officialHref: `${OFFICIAL_SITE}/presentes` },
];

export function isCatalogCategory(value: unknown): value is CatalogCategoryId {
  return catalogCategories.some((c) => c.id === value);
}

const granDescription =
  "O nosso Gran Gelato é o nosso bombom gelado, um sucesso consagrado, perfeito para ser compartilhado com familiares e amigos. Com aproximadamente 2kg, rende 20 fatias bem generosas!";

export const catalog: CatalogItem[] = [
  // Gelato no Palito
  {
    id: "palito-brigadeiro",
    category: "palito",
    name: "Brigadeiro",
    description:
      "Gelato de chocolate com recheio de brigadeiro de colher e cobertura de chocolate ao leite.",
    photo: {
      src: img.palitoImg,
      alt: "Gelato de brigadeiro no palito coberto de chocolate e granulado",
    },
  },
  {
    id: "palito-capim-limao",
    category: "palito",
    name: "Capim Limão com Brigadeiro de Tangerina",
    description:
      "Gelato de capim limão com recheio de brigadeiro de tangerina e cobertura de chocolate branco.",
    ingredients:
      "Água, creme de leite fresco, leite condensado, cobertura de chocolate branco, suco de limão, pasta de tangerina (açúcar, xarope de glicose, água, aroma natural, espessante: INS 407, INS 102, INS 110 FCF e INS 129), capim limão seco e manteiga.",
    allergens:
      "Não contém glúten. Contém lactose. Alérgicos: contém leite e derivados e soja e derivados. Pode conter trigo, ovo, amendoim, avelãs e pistache.",
    photo: {
      src: img.palitoCapimLimaoImg,
      alt: "Gelato de capim limão no palito com cobertura de chocolate branco",
    },
  },
  {
    id: "palito-baunilha",
    category: "palito",
    name: "Baunilha com Brigadeiro de Colher",
    description:
      "Gelato de baunilha feito a partir das favas, com recheio de brigadeiro de colher e cobertura de chocolate ao leite.",
    details: [
      "O Gelato Gourmet de Baunilha da VeroLatte é uma ode à elegância clássica, uma experiência atemporal que cativa os paladares mais refinados. A baunilha cuidadosamente selecionada é a estrela desta sobremesa, revelando-se em cada mordida com uma profundidade de sabor que é ao mesmo tempo suave e envolvente. Sua textura sedosa e cremosa desliza suavemente pela língua, enquanto a essência perfumada preenche o paladar com uma doçura delicada e irresistível. Cada porção é uma homenagem à simplicidade sofisticada, destacando a qualidade excepcional dos ingredientes. O Gelato Gourmet de Baunilha da VeroLatte transcende as expectativas, proporcionando uma experiência clássica que nunca sai de moda, sendo a escolha perfeita para quem busca a perfeição.",
    ],
    photo: {
      src: img.palitoBaunilhaImg,
      alt: "Gelato de baunilha no palito com cobertura de chocolate ao leite",
    },
  },
  {
    id: "palito-pacoca",
    category: "palito",
    name: "Paçoca com Brigadeiro de Colher",
    description:
      "Gelato de amendoim com recheio de brigadeiro de colher e cobertura de chocolate ao leite com farofa de paçoca.",
    details: [
      "O Gelato Gourmet de Paçoca da VeroLatte é uma celebração autêntica dos sabores brasileiros, uma indulgência irresistível que homenageia a tradição e a nostalgia. Cada mordida é uma viagem sensorial ao sabor inconfundível da paçoca, com sua combinação única de amendoim torrado e cobertura de chocolate. A textura cremosa do gelato envolve o paladar, enquanto o sabor generoso de paçoca proporcionam uma experiência deliciosamente surpreendente. A doçura equilibrada e a riqueza do amendoim se fundem perfeitamente, criando uma sinfonia de sabores que evoca memórias afetivas. O Gelato Gourmet de Paçoca da VeroLatte é mais do que uma sobremesa; é uma viagem ao coração da culinária brasileira, conquistando os amantes de doces com sua autenticidade e sabor irresistível.",
    ],
    photo: {
      src: img.palitoPacocaImg,
      alt: "Gelato de paçoca no palito com cobertura de chocolate ao leite e farofa de paçoca",
    },
  },
  {
    id: "palito-coco-cocada",
    category: "palito",
    name: "Coco com Cocada",
    description:
      "Gelato de coco com recheio de cocada cremosa e cobertura de chocolate branco com flocos de coco.",
    photo: {
      src: img.palitoCocoCocadaImg,
      alt: "Gelato de coco no palito com cobertura de chocolate branco e flocos de coco",
    },
  },
  {
    id: "palito-cheesecake-goiabada",
    category: "palito",
    name: "Cheesecake de Goiabada",
    description:
      "Gelato sabor cheesecake com pedaços de biscoito e goiabada, com cobertura de chocolate branco e farofa de biscoitos.",
    photo: {
      src: img.palitoCheesecakeGoiabadaImg,
      alt: "Gelato de cheesecake com goiabada no palito, coberto de chocolate branco e farofa de biscoito",
    },
  },
  {
    id: "palito-gianduia",
    category: "palito",
    name: "Gianduia",
    description:
      "Gelato de chocolate com suave toque de avelã e cobertura de chocolate meio amargo.",
    photo: {
      src: img.palitoGianduiaImg,
      alt: "Gelato de gianduia no palito com cobertura de chocolate meio amargo",
    },
  },
  {
    id: "palito-torta-limao",
    category: "palito",
    name: "Torta de Limão",
    description:
      "Gelato de mousse de limão com cobertura de chocolate branco e farofa de biscoito.",
    photo: {
      src: img.palitoTortaLimaoImg,
      alt: "Gelato de torta de limão no palito com chocolate branco e farofa de biscoito",
    },
  },
  {
    id: "palito-pistache",
    category: "palito",
    name: "Pistache",
    description: "Gelato de pistache com cobertura de chocolate branco e grânulos de pistache.",
    photo: {
      src: img.pistacheImg,
      alt: "Gelato de pistache no palito com chocolate branco e grânulos de pistache",
    },
  },
  {
    id: "palito-morango",
    category: "palito",
    name: "Morango com Brigadeiro Rosa",
    description:
      "Gelato de morango com recheio de brigadeiro rosa e cobertura de chocolate branco.",
    photo: {
      src: img.palitoMorangoImg,
      alt: "Gelato de morango no palito com cobertura de chocolate branco",
    },
  },
  {
    id: "palito-doce-de-leite",
    category: "palito",
    name: "Doce de Leite",
    description:
      "Gelato de doce de leite com recheio de doce de leite cremoso e cobertura de mix de chocolate branco e ao leite.",
    photo: {
      src: img.palitoDoceDeLeiteImg,
      alt: "Gelato de doce de leite no palito com cobertura de chocolate branco e ao leite",
    },
  },
  {
    id: "palito-banana-caramelizada",
    category: "palito",
    name: "Banana Caramelizada",
    description:
      "Gelato de banana com recheio de brigadeiro de caramelo e canela e cobertura de chocolate branco.",
    photo: {
      src: img.palitoBananaCaramelizadaImg,
      alt: "Gelato de banana caramelizada no palito com cobertura de chocolate branco",
    },
  },

  // Bombons
  {
    id: "bombom-brigadeiro",
    category: "bombons",
    name: "Bombom Brigadeiro",
    description:
      "Bombom de chocolate com recheio de brigadeiro de colher e cobertura de chocolate ao leite.",
    photo: {
      src: img.bombomImg,
      alt: "Bombom gelado cortado ao meio mostrando recheio de chocolate",
    },
  },
  {
    id: "bombom-pacoca",
    category: "bombons",
    name: "Bombom Paçoca",
    description:
      "Bombom de amendoim com recheio de brigadeiro de colher e cobertura de chocolate ao leite com farofa de paçoca.",
    photo: {
      src: img.bombomPacocaImg,
      alt: "Bombom gelado de paçoca com chocolate ao leite e farofa de paçoca",
    },
  },
  {
    id: "bombom-baunilha",
    category: "bombons",
    name: "Bombom Baunilha",
    description:
      "Bombom de baunilha feito a partir das favas, com recheio de brigadeiro de colher e cobertura de chocolate ao leite.",
    photo: {
      src: img.bombomBaunilhaImg,
      alt: "Bombom gelado de baunilha com cobertura de chocolate ao leite",
    },
  },
  {
    id: "bombom-banana-caramelizada",
    category: "bombons",
    name: "Bombom Banana Caramelizada",
    description:
      "Bombom de banana com recheio de brigadeiro de caramelo e canela e cobertura de chocolate branco.",
    photo: {
      src: img.bombomBananaCaramelizadaImg,
      alt: "Bombom gelado de banana caramelizada com cobertura de chocolate branco",
    },
  },
  {
    id: "bombom-coco-cocada",
    category: "bombons",
    name: "Bombom Coco com Cocada",
    description:
      "Bombom de coco com recheio de cocada cremosa e cobertura de chocolate branco com flocos de coco.",
    photo: {
      src: img.bombomCocoCocadaImg,
      alt: "Bombom gelado de coco com chocolate branco e flocos de coco",
    },
  },
  {
    id: "bombom-capim-limao",
    category: "bombons",
    name: "Bombom Capim Limão",
    description:
      "Bombom de capim limão com recheio de brigadeiro de tangerina e cobertura de chocolate branco.",
    photo: {
      src: img.bombomCapimLimaoImg,
      alt: "Bombom gelado de capim limão com cobertura de chocolate branco",
    },
  },
  {
    id: "bombom-pistache",
    category: "bombons",
    name: "Bombom Pistache",
    description: "Bombom de pistache com cobertura de chocolate branco e grânulos de pistache.",
    photo: {
      src: img.bombomPistacheImg,
      alt: "Bombom gelado de pistache com chocolate branco e grânulos de pistache",
    },
  },
  {
    id: "bombom-morango",
    category: "bombons",
    name: "Bombom Morango",
    description:
      "Bombom de morango com recheio de brigadeiro rosa e cobertura de chocolate branco.",
    photo: {
      src: img.bombomMorangoImg,
      alt: "Bombom gelado de morango com cobertura de chocolate branco",
    },
  },
  {
    id: "bombom-zero-lactose",
    category: "bombons",
    name: "Bombom Zero Lactose Chocolate",
    description:
      "Bombom de base vegana sabor chocolate meio amargo com cobertura de chocolate amargo.",
    photo: {
      src: img.bombomZeroLactoseImg,
      alt: "Bombom gelado vegano de chocolate com cobertura de chocolate amargo",
    },
  },

  // Gran Gelato
  {
    id: "gran-leite-cremoso",
    category: "gran-gelato",
    name: "Gran Gelato Leite Cremoso",
    description: granDescription,
    photo: {
      src: img.granImg,
      alt: "Gran Gelato em camadas, fatiado e servido em pratos de cerâmica",
    },
  },
  {
    id: "gran-cheesecake",
    category: "gran-gelato",
    name: "Gran Gelato Cheesecake",
    description: granDescription,
    photo: { src: img.granCheesecakeImg, alt: "Gran Gelato sabor cheesecake" },
  },
  {
    id: "gran-nocciola",
    category: "gran-gelato",
    name: "Gran Gelato Nocciola",
    description: granDescription,
    photo: { src: img.granNocciolaImg, alt: "Gran Gelato sabor nocciola" },
  },
  {
    id: "gran-pistache",
    category: "gran-gelato",
    name: "Gran Gelato Pistache",
    description: granDescription,
    photo: { src: img.granPistacheImg, alt: "Gran Gelato sabor pistache" },
  },

  // Gelato Massa
  {
    id: "massa-chocolate-noir",
    category: "massa",
    name: "Gelato Chocolate Noir",
    description: "Gelato de massa de chocolate amargo com pedacinhos de creme de avelã.",
    notes: ["Produto vegano, sem lactose."],
    photo: {
      src: img.massaChocolateNoirImg,
      alt: "Pote de gelato de chocolate amargo com pedacinhos de creme de avelã",
    },
  },
  {
    id: "massa-sorbet-manga",
    category: "massa",
    name: "Sorbet Manga",
    description: "Sorbet cremoso feito de manga natural, sem adição de açúcares.",
    notes: [
      "Produto vegano, sem leite.",
      "Atenção diabéticos: o produto contém açúcares provenientes da fruta.",
    ],
    photo: { src: img.mangaImg, alt: "Pote de sorbet de manga" },
  },
  {
    id: "massa-doce-de-leite",
    category: "massa",
    name: "Gelato Doce de Leite",
    description:
      "Gelato de massa de doce de leite com recheio de brigadeiro de doce de leite com pedaços de biscoito de maizena.",
    photo: {
      src: img.massaDoceDeLeiteImg,
      alt: "Pote de gelato de doce de leite com pedaços de biscoito",
    },
  },
  {
    id: "massa-pistache",
    category: "massa",
    name: "Gelato Pistache",
    description: "Gelato de massa de pistache puro, com recheio cremoso de brigadeiro de pistache.",
    photo: { src: img.massaImg, alt: "Potes de gelato de pistache com pistaches ao redor" },
  },

  // Presentes
  {
    id: "presente-4-latas-pequenas",
    category: "presentes",
    name: "Caixa de presente · 4 latas pequenas de bombons",
    description:
      "Caixa de presente especial com paredes duplas e fechamento por elástico contendo 4 latas de bombons de gelato com 4 bombons em cada, com sabores a serem definidos.",
    photo: {
      src: img.presente4LatasPequenasImg,
      alt: "Caixa de presente com quatro latas pequenas de bombons de gelato",
    },
  },
  {
    id: "presente-kit-bolsa-termica",
    category: "presentes",
    name: "Bolsa Térmica + Kit Experiência",
    description:
      "Kit contendo nossa bolsa térmica personalizada + 12 gelatos no palito, 2 gelatos em massa e 2 latas de bombons com 8 unidades cada.",
    photo: {
      src: img.presenteKitBolsaTermicaImg,
      alt: "Bolsa térmica personalizada com gelatos no palito, potes de gelato e latas de bombons",
    },
  },
  {
    id: "presente-4-latas-grandes",
    category: "presentes",
    name: "Caixa de presente · 4 latas grandes de bombons",
    description:
      "Caixa de presente especial com paredes duplas e fechamento por elástico contendo 4 latas de bombons de gelato com 8 bombons em cada, com sabores a serem definidos.",
    photo: {
      src: img.presente4LatasGrandesImg,
      alt: "Caixa de presente com quatro latas grandes de bombons de gelato",
    },
  },
  {
    id: "presente-12-palitos",
    category: "presentes",
    name: "Caixa de presente · 12 gelatos no palito",
    description:
      "Caixa de presente especial com paredes duplas e fechamento por elástico contendo 12 gelatos no palito embalados individualmente com sabores a serem definidos.",
    notes: ["Contém aproximadamente 549g."],
    photo: {
      src: img.presenteImg,
      alt: "Caixa de presente rosa com estampa de picolés dourados e gelatos",
    },
  },
];
