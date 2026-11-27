import { ifoodLogo, rappiLogo } from "./images";
import type { DeliveryApp, Link, Social } from "./types";

/** Horário único de todas as unidades (decisão confirmada, HANDOFF §1). */
export const hours = ["Seg. a sáb., 10h às 20h", "Dom., 11h às 17h"] as const;

export const whatsappMain = {
  label: "WhatsApp",
  display: "(11) 95065-7666",
  href: "https://wa.me/5511950657666",
} as const;

export const phoneMain = {
  display: "(11) 2506-9295",
  href: "tel:+551125069295",
} as const;

export const whatsappCidadeJardim = {
  display: "(11) 91415-7731",
  href: "https://wa.me/5511914157731",
} as const;

export const headquarters = {
  lines: ["R. Barão de Jaceguai, 1376", "Campo Belo, São Paulo, SP", "04606-003"],
} as const;

export const socials: Social[] = [
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/verolattegelato" },
  {
    network: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@VeroLatteGelato-i5z/shorts",
  },
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/VeroLatteGelato/" },
  { network: "pinterest", label: "Pinterest", href: "https://br.pinterest.com/VeroLatteGelato/" },
];

export const policies: Link[] = [
  {
    label: "Entregas e reembolsos",
    href: "/entregas-e-reembolsos",
  },
  {
    label: "Política de cookies",
    href: "/politica-de-cookies",
  },
];

export const delivery = {
  title: "Delivery",
  text: "Escolha o app e a unidade mais perto de você.",
  apps: [
    {
      id: "ifood",
      name: "iFood",
      logo: ifoodLogo,
      logoAlt: "iFood",
      options: [
        {
          unit: "Campo Belo",
          href: "https://www.ifood.com.br/delivery/sao-paulo-sp/vero-latte-gelato---campo-belo-campo-belo/38029cc7-842c-4544-bfc4-d9c802b839b0",
        },
        {
          unit: "Cidade Jardim",
          href: "https://www.ifood.com.br/delivery/sao-paulo-sp/vero-lattegelato---cidade-jardim-cidade-jardim/25aa9907-1df9-4b74-b01c-fcaae4b19883",
        },
      ],
    },
    {
      id: "rappi",
      name: "Rappi",
      logo: rappiLogo,
      logoAlt: "Rappi",
      options: [
        { unit: "Campo Belo", href: "https://www.rappi.com.br/restaurantes/900006271-vero-latte" },
      ],
    },
  ] satisfies DeliveryApp[],
  modal: {
    chooseUnit: "Escolha a unidade",
    close: "Fechar",
  },
} as const;
