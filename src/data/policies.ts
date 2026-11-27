import { OFFICIAL_SITE } from "./site";

/**
 * Páginas de política. Os textos são reproduzidos do site oficial da Vero Latte
 * (entregas-e-reembolsos e política-de-cookies), sem alteração de conteúdo.
 */

export type PolicySection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type PolicyPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  sections: PolicySection[];
  source: { label: string; href: string };
};

export const policyLabels = {
  back: "Voltar ao início",
  backHref: "/",
  sourceIntro: "Texto reproduzido do site oficial:",
  contactTitle: "Fale com a gente",
  phoneLabel: "Telefone",
  addressLabel: "Endereço",
  hoursLabel: "Horário",
} as const;

export const deliveriesPage: PolicyPage = {
  slug: "entregas-e-reembolsos",
  metaTitle: "Entregas e reembolsos · Vero Latte Gelato (protótipo)",
  metaDescription: "Política de entrega, frete e reembolso da Vero Latte Gelato.",
  kicker: "Entregas e frete",
  title: "Entregas e reembolsos",
  sections: [
    {
      id: "entrega",
      title: "Política de Entrega",
      paragraphs: [
        "Na VeroLatte, entregamos nossos gelatos premium em São Paulo e arredores. Oferecemos diferentes opções de entrega para atender às necessidades de nossos clientes, com preços acessíveis e entrega rápida. Temos também a opção de retirada na loja para aqueles que preferem. Para mais informações, entre em contato conosco.",
        "Somos uma empresa que se preocupa com a qualidade do nosso produto e a satisfação de nossos clientes. Por isso, trabalhamos com embalagens de alta qualidade para garantir que nossos gelatos cheguem frescos e deliciosos até você.",
      ],
    },
    {
      id: "reembolso",
      title: "Política de Reembolso",
      paragraphs: [
        "Na VeroLatte, queremos garantir que nossos clientes estejam satisfeitos com nossos produtos. Caso haja algum problema com sua compra, entre em contato conosco imediatamente para que possamos resolver a situação. Oferecemos a opção de troca ou reembolso, desde que o produto esteja em sua embalagem original e não tenha sido utilizado. Estamos sempre disponíveis para ajudá-lo e garantir sua satisfação.",
        "Somos uma empresa que valoriza a confiança e transparência em nossos negócios. Por isso, mantemos uma política de reembolso clara e concisa para garantir que nossos clientes possam comprar com segurança e tranquilidade.",
      ],
    },
  ],
  source: {
    label: "verolattegelato.com.br/entregas-e-reembolsos",
    href: `${OFFICIAL_SITE}/entregas-e-reembolsos`,
  },
};

export const cookiesPage: PolicyPage = {
  slug: "politica-de-cookies",
  metaTitle: "Política de cookies · Vero Latte Gelato (protótipo)",
  metaDescription: "Como a Vero Latte Gelato usa cookies no site.",
  kicker: "Privacidade",
  title: "Política de cookies",
  sections: [
    {
      id: "informacoes",
      title: "Informações sobre cookies",
      paragraphs: [
        "A VeroLatte valoriza a privacidade e segurança dos dados de seus clientes. Por isso, informamos que nosso site utiliza cookies para aprimorar a experiência do usuário e facilitar a navegação. Os cookies são pequenos arquivos de texto enviados ao seu navegador quando você acessa nosso site. Eles não coletam informações pessoais e não são compartilhados com terceiros. Além disso, você pode optar por desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.",
      ],
    },
    {
      id: "o-que-sao",
      title: "O que são cookies?",
      paragraphs: [
        "Cookies são arquivos de texto que contêm pequenas quantidades de informações baixadas para o seu computador ou dispositivo quando você visita um site. Eles são amplamente utilizados para tornar os sites funcionais ou mais eficientes, além de fornecer informações aos proprietários do site. Nós usamos cookies para aprimorar a sua experiência em nosso site, lembrando suas preferências e facilitando a navegação. Os cookies não coletam informações pessoais e não são compartilhados com terceiros. É possível desativar os cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.",
      ],
    },
  ],
  source: {
    label: "verolattegelato.com.br/política-de-cookies",
    href: `${OFFICIAL_SITE}/pol%C3%ADtica-de-cookies`,
  },
};
