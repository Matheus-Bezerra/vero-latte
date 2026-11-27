# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
O site encena a home de uma gelateria artesanal premium de São Paulo, a Vero Latte Gelato. Dentro da ficção, quem visita é o cliente final, que procura sabores, lojas, delivery e eventos.

O público real é quem avalia o portfólio de Matheus Bezerra, sem um foco único:
- recrutadores e estúdios que medem o nível de design e de front-end;
- a própria Vero Latte, para quem o conceito pode servir de pitch;
- outras marcas de food e varejo premium que podem contratar o trabalho.

## Product Purpose
É um redesign conceitual independente da home da Vero Latte. Não foi solicitado e não tem vínculo nem aprovação da marca. O aviso de conceito precisa ficar sempre visível.

Ele cumpre bem o papel quando reúne, ao mesmo tempo:
- craft de motion e interação;
- fidelidade à marca, ou seja, parecer um site que a Vero Latte poderia lançar;
- qualidade técnica auditável;
- fluxos reais funcionando: delivery, contato, eventos e WhatsApp.

## Positioning
O conceito é "a caixa que abre". A embalagem rosa com picolés dourados, que é o objeto mais reconhecível da marca, vira a abertura da página. Além dela, só dois momentos contam a história com movimento: o manifesto guiado pela rolagem e a vitrine de produtos. O resto da página é contido.

## Operating Context
- Fica publicado na Vercel e é visto tanto no desktop quanto no celular.
- `design/HANDOFF.md` é a fonte de verdade do conteúdo. `design/index.html` é a referência de layout e comportamento.

## Capabilities and Constraints
- **Stack:** Next.js com App Router e página estática, React, TypeScript estrito, Tailwind v4 com tokens no `@theme` e pnpm.
- **Animação:** sem bibliotecas. Há um único loop rAF de scroll.
- **Conteúdo:** todo texto, contato, horário e link vem de `src/data/`.
- **Movimento:**
  - anima só `transform`, `opacity` e `clip-path`;
  - sempre respeita `prefers-reduced-motion`.
- **Imagens:** usam `next/image`, ficam em `public/img/` e têm a origem registrada em `public/img/CREDITS.md`.
- **Em aberto:** os links diretos do iFood e da Rappi. Hoje os botões levam à página `/delivery` oficial.

## Brand Commitments
- **Nome e frases:** o nome é Vero Latte Gelato. A abertura usa a frase oficial "Mais que gelato, uma experiência sensorial." e, em seguida, "Gelato de verdade para momentos de verdade.".
- **Logotipo:** vem do arquivo enviado por Matheus.
- **Fotos:** vêm do site oficial, do Pinterest e do Instagram da marca. As legendas gravadas nas fotos são recortadas por código.
- **Fontes:** só gratuitas do Google Fonts, parecidas com as do site oficial.
- **Grafia:** escreve-se "Carpigiani Gelato University".

## Evidence on Hand
- Contatos, endereços, horários e redes sociais estão confirmados no `HANDOFF.md` §2.
- Não há depoimentos, imprensa, prêmios nem números verificados. Eles não podem ser inventados, e o que estiver pendente fica marcado com `TODO`.

## Product Principles
1. Ser honesto antes de impressionar: o aviso de conceito fica visível e nenhum fato é fabricado.
2. Movimento com propósito: poucos momentos fortes, que contam a história da marca, em vez de efeito em tudo.
3. Parecer real: os fluxos funcionam de verdade, com WhatsApp, formulários e delivery.
4. Mostrar o ofício: o código, a performance e a acessibilidade também fazem parte do portfólio.

## Accessibility & Inclusion
- WCAG AA: navegação por teclado, foco visível, `alt` descritivo e contraste.
- Movimento reduzido sempre respeitado.
