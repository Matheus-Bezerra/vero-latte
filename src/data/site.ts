import type { NavItem, Link } from "./types";

export const OFFICIAL_SITE = "https://www.verolattegelato.com.br";

export const site = {
  name: "Vero Latte Gelato",
  title: "Vero Latte Gelato · redesign conceitual (protótipo)",
  description:
    "Protótipo conceitual independente da página inicial da Vero Latte Gelato. Sem vínculo com a marca.",
  locale: "pt_BR",
  logoAlt: "Vero Latte Gelato",
  skipLink: "Pular para o conteúdo",
} as const;

export const notice = {
  text: "Protótipo de portfólio: redesign conceitual independente, sem vínculo ou aprovação da Vero Latte.",
  link: { label: "Ir ao site oficial", href: `${OFFICIAL_SITE}/`, external: true } satisfies Link,
} as const;

/** Menu principal. O id é a âncora da seção. */
export const navItems: NavItem[] = [
  { id: "inicio", label: "Início" },
  { id: "produtos", label: "Produtos" },
  { id: "eventos", label: "Eventos" },
  { id: "sobre", label: "Sobre" },
  { id: "lojas", label: "Lojas" },
  { id: "contato", label: "Contato" },
];

export const navLabels = {
  ariaNav: "Principal",
  logoHome: "Vero Latte, voltar ao início",
  brand: "Vero Latte",
  delivery: "Pedir delivery",
  menu: "Menu",
  close: "Fechar",
  sheetLabel: "Menu",
  sheetStores: "Ver lojas",
  barStores: "Lojas",
} as const;

export const footer = {
  tagline: "Gelato artesanal no palito, feito em São Paulo desde 2014.",
  navTitle: "Navegue",
  nav: [
    { label: "Produtos", href: "#produtos" },
    { label: "Eventos", href: "#eventos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Lojas", href: "#lojas" },
    { label: "Delivery", href: "#delivery" },
  ] satisfies Link[],
  serviceTitle: "Atendimento",
  infoTitle: "Informações",
  disclaimer:
    "Redesign conceitual independente, não solicitado, sem vínculo ou aprovação da Vero Latte.",
  rights: "Marca, logotipo e fotos pertencem à Vero Latte.",
  credit: "Conceito e protótipo: Matheus Bezerra, 2026",
} as const;
