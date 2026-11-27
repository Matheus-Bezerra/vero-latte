import { phoneMain, whatsappMain } from "./contacts";

// Formulário de demonstração: o envio é simulado (sem backend).
export const contactSection = {
  kicker: "Contato",
  title: "Fale com a equipe",
  text: "Dúvidas, pedidos especiais ou orçamento para eventos. Responda pelo formulário ou chame direto.",
  directTitle: "Canais diretos",
  socialsTitle: "Siga a Vero Latte",
  direct: [
    { label: whatsappMain.label, display: whatsappMain.display, href: whatsappMain.href, external: true },
    { label: "Telefone", display: phoneMain.display, href: phoneMain.href, external: false },
  ],
} as const;

export const MESSAGE_MAX = 2000;

export const contactForm = {
  requiredLabel: "obrigatório",
  optionalLabel: "opcional",
  fields: {
    name: { label: "Nome", autoComplete: "name", error: "Digite seu nome." },
    email: {
      label: "E-mail",
      autoComplete: "email",
      placeholder: "seu@email.com",
      error: "Digite um e-mail válido, por exemplo nome@email.com.",
    },
    phone: {
      label: "Celular",
      autoComplete: "tel",
      placeholder: "(11) 90000-0000",
      error: "Digite um celular com DDD, por exemplo (11) 90000-0000.",
    },
    subject: {
      label: "Assunto",
      error: "Escolha um assunto.",
      options: [
        { value: "eventos", label: "Eventos" },
        { value: "duvida", label: "Dúvida" },
        { value: "pedido", label: "Pedido especial" },
        { value: "outro", label: "Outro" },
      ],
    },
    message: {
      label: "Mensagem",
      error: "Escreva sua mensagem.",
      tooLong: `Use no máximo ${MESSAGE_MAX} caracteres.`,
      counter: (n: number) => `${n} de ${MESSAGE_MAX} caracteres`,
    },
  },
  submit: "Enviar mensagem",
  sending: "Enviando…",
  success: {
    title: "Mensagem enviada!",
    text: "Obrigado pelo contato. A equipe da Vero Latte retorna em breve.",
    detailLabels: { name: "Nome", email: "Retorno por e-mail", subject: "Assunto" },
    again: "Enviar outra mensagem",
  },
} as const;
