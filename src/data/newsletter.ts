// Formulário de demonstração: nada é enviado (sem backend).
export const newsletter = {
  kicker: "Novidades",
  title: "Seja o primeiro a provar os lançamentos",
  text: "Receba novos sabores e promoções por WhatsApp ou e-mail.",
  groupLabel: "Como prefere receber",
  submit: "Cadastrar",
  channels: {
    email: {
      option: "E-mail",
      label: "Seu e-mail",
      type: "email",
      autoComplete: "email",
      placeholder: "seu@email.com",
      error: "Digite um e-mail válido, por exemplo nome@email.com.",
    },
    whats: {
      option: "WhatsApp",
      label: "Seu WhatsApp",
      type: "tel",
      autoComplete: "tel",
      placeholder: "(11) 90000-0000",
      error: "Digite um WhatsApp com DDD, por exemplo (11) 90000-0000.",
    },
  },
  success: "Cadastro feito. (Demonstração: nenhum dado foi enviado.)",
} as const;

export type NewsChannel = keyof typeof newsletter.channels;
