import type { StaticImageData } from "next/image";

/** Tipos do conteúdo da home. Todo texto e link do site vive em src/data/. */

export type Link = {
  label: string;
  href: string;
  /** true abre em nova aba com rel="noopener noreferrer". */
  external?: boolean;
};

/** Import estático de public/img/: o next/image recebe largura e altura sem esforço extra. */
export type Photo = {
  src: StaticImageData;
  alt: string;
};

export type NavItem = {
  id: string;
  label: string;
};

export type SocialNetwork = "instagram" | "youtube" | "facebook" | "pinterest";

export type Social = {
  network: SocialNetwork;
  label: string;
  href: string;
};

export type ContactLine = {
  label: string;
  value: string;
};

export type Store = {
  id: string;
  name: string;
  tag: string;
  photo: Photo;
  address: string;
  /** Linhas do bloco "Telefone" ou "WhatsApp". */
  phone: { label: string; lines: string[] };
  actions: (Link & { variant: "choc" | "line" })[];
};

export type DeliveryOption = {
  /** Nome da unidade, mostrado no botão de escolha. */
  unit: string;
  /** Endereço do cardápio do app para essa unidade. */
  href: string;
};

export type DeliveryApp = {
  id: "ifood" | "rappi";
  name: string;
  logo: StaticImageData;
  logoAlt: string;
  /** Uma opção abre direto; duas ou mais pedem a escolha da unidade. */
  options: DeliveryOption[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Texto curto usado no carrossel mobile. */
  short: string;
  link: Link;
  photo: Photo;
  /** Legenda da foto na vitrine (aria-live). */
  caption: string;
};

export type GalleryItem = {
  photo: Photo;
  caption: string;
  /** object-position opcional para enquadrar a foto. */
  position?: string;
};

export type EventStep = {
  title: string;
  text: string;
};

/** Categorias do catálogo. Os ids batem com os de `products` e com ?categoria= da página /produtos. */
export type CatalogCategoryId = "palito" | "bombons" | "gran-gelato" | "massa" | "presentes";

/** Um produto da página /produtos. Texto reproduzido do site oficial; o que ele não traz fica ausente. */
export type CatalogItem = {
  /** Único no catálogo; usado no id do card e do modal. */
  id: string;
  category: CatalogCategoryId;
  name: string;
  /** Texto curto do card e do topo do modal. */
  description: string;
  /** Parágrafos extras que o site oficial mostra no detalhe. */
  details?: string[];
  ingredients?: string;
  allergens?: string;
  /** Avisos curtos (vegano, sem lactose, peso). */
  notes?: string[];
  photo: Photo;
};
