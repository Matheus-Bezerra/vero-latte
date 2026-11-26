# Vero Latte · Home (redesign conceitual independente)

Projeto de portfólio de Matheus Bezerra. Não tem vínculo nem aprovação da Vero Latte. O aviso de conceito deve ficar visível.

## Referências
- `design/HANDOFF.md` é a fonte de verdade. `design/index.html` é a referência visual e de comportamento na primeira vez de implementação.

## Stack
Next.js (App Router) · React · TypeScript estrito · Tailwind CSS (tokens em `@theme`) · pnpm.
Use context 7 para pegar as melhoras práticas e melhores versõess da stack definida acima

## Comandos
- `pnpm dev` · `pnpm build` · `pnpm lint` · `pnpm tsc --noEmit`

## Regras
- Server Components por padrão. `"use client"` só para interação e scroll.
- Todo texto, contato, horário e link vem de `src/data/`. Nada fixo em componente.
- Cores, fontes, espaçamentos e raios só pelos tokens do `@theme`.
- Não invente conteúdo (números, depoimentos, prêmios, endereços). Pendências ficam marcadas com `TODO`.
- Animações só com `transform`, `opacity` e `clip-path`. Sempre respeitar `prefers-reduced-motion`.
- Acessibilidade AA: teclado, foco visível, `alt` descritivo, contraste.
- Imagens com `next/image`, arquivos em `public/img/`, origem registrada em `public/img/CREDITS.md`.
- Commits curtos, em português, no imperativo usando convenional commits (feat: message, fix.... etc).
- Só faça commits com minha aprovação!