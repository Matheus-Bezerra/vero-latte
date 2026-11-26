import { campoBeloImg, cidadeJardimImg } from "./images";
import { phoneMain, whatsappCidadeJardim, whatsappMain } from "./contacts";
import type { Store } from "./types";

export const storesSection = {
  kicker: "Lojas e delivery",
  title: "Venha provar ou peça em casa",
  labels: { address: "Endereço", hours: "Horário" },
} as const;

export const stores: Store[] = [
  {
    id: "campo-belo",
    name: "Loja Campo Belo",
    tag: "Loja matriz e fábrica",
    photo: {
      src: campoBeloImg,
      alt: "Fachada da loja Vero Latte em Campo Belo, com mesas na calçada",
    },
    address: "R. Barão de Jaceguai, 1376, Campo Belo, São Paulo, SP",
    phone: {
      label: "Telefone",
      lines: [phoneMain.display, `${whatsappMain.label} ${whatsappMain.display}`],
    },
    actions: [
      {
        label: "Como chegar",
        href: "https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+de+Jaceguai+1376+S%C3%A3o+Paulo",
        external: true,
        variant: "choc",
      },
      { label: "Ligar", href: phoneMain.href, variant: "line" },
      { label: "WhatsApp", href: whatsappMain.href, external: true, variant: "line" },
    ],
  },
  {
    id: "cidade-jardim",
    name: "Shopping Cidade Jardim",
    tag: "Quiosque, 1º andar",
    photo: { src: cidadeJardimImg, alt: "Quiosque da Vero Latte no Shopping Cidade Jardim" },
    address: "Quiosque no 1º andar. Av. Magalhães de Castro, 12000, São Paulo, SP",
    phone: { label: "WhatsApp", lines: [whatsappCidadeJardim.display] },
    actions: [
      {
        label: "Como chegar",
        href: "https://www.google.com/maps/search/?api=1&query=Shopping+Cidade+Jardim+S%C3%A3o+Paulo",
        external: true,
        variant: "choc",
      },
      { label: "WhatsApp", href: whatsappCidadeJardim.href, external: true, variant: "line" },
    ],
  },
];
