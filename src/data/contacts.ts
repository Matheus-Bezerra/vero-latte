import { OFFICIAL_SITE } from "./site";
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

// TODO: pendência aberta (HANDOFF §12). Trocar pelos links diretos de iFood e Rappi
// de cada unidade. Hoje os dois apontam para a página oficial /delivery.
const DELIVERY_PLACEHOLDER = `${OFFICIAL_SITE}/delivery`;

export const delivery = {
  title: "Delivery",
  text: "Escolha o app e a unidade mais perto de você.",
  apps: [
    { name: "iFood", units: "Campo Belo e Cidade Jardim", href: DELIVERY_PLACEHOLDER },
    { name: "Rappi", units: "Campo Belo", href: DELIVERY_PLACEHOLDER },
  ] satisfies DeliveryApp[],
  /** Aviso mostrado com a marcação dourada de texto provisório. */
  pending: {
    text: "Links diretos para cada app a confirmar.",
    title:
      "Os links apontam para a página oficial de delivery; trocar pelos links diretos de cada app",
  },
} as const;
