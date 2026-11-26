# Vero Latte Gelato · Home (redesign conceitual)

> **Redesign conceitual independente, não solicitado, sem vínculo ou aprovação da Vero Latte.**
> Projeto de portfólio de Matheus Bezerra. Marca, logotipo e fotos pertencem à Vero Latte.

Implementação da home a partir do protótipo em `design/` (`HANDOFF.md` é a fonte de verdade).

## Stack

Next.js 16 (App Router, página estática pré-renderizada) · React 19 · TypeScript estrito · Tailwind CSS v4 · pnpm.
Sem bibliotecas de animação: um único loop `requestAnimationFrame` (`src/hooks/useScrollProgress.ts`).

## Como rodar

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
pnpm lint
pnpm typecheck    # tsc --noEmit
pnpm format       # Prettier
pnpm images       # baixa de novo as imagens (scripts/download-images.mjs)
```

## Estrutura

```
src/
  app/          layout (fontes, metadados, aviso, rodapé), page, globals.css (tokens no @theme)
  components/   uma seção ou peça por arquivo; ui/ guarda Button, Kicker, PopsiclePattern…
  data/         TODO o conteúdo: textos, produtos, lojas, horários, contatos, redes, imagens
  hooks/        useScrollProgress, useActiveSection, usePrefersReducedMotion
  styles/       base.css (base, botões, rodapé) e sections.css (seções e movimento)
public/
  img/          fotos otimizadas + CREDITS.md (origem de cada arquivo)
  pattern-picoles.svg
scripts/download-images.mjs
design/         protótipo, handoff e capturas de referência
```

## Como trocar o conteúdo

Nada de texto fica nos componentes. Edite só `src/data/`:

| O quê                                                                 | Arquivo          |
| --------------------------------------------------------------------- | ---------------- |
| Aviso, menu, rodapé, título e descrição da página                     | `site.ts`        |
| Horário, telefones, WhatsApp, redes, políticas, **links de delivery** | `contacts.ts`    |
| Abertura                                                              | `hero.ts`        |
| Produtos                                                              | `products.ts`    |
| Ingredientes e galeria                                                | `ingredients.ts` |
| Manifesto                                                             | `manifesto.ts`   |
| História                                                              | `story.ts`       |
| Eventos                                                               | `events.ts`      |
| Lojas                                                                 | `stores.ts`      |
| Formulário de novidades                                               | `newsletter.ts`  |
| Imagens (imports)                                                     | `images.ts`      |

**Trocar uma foto:** coloque o arquivo em `public/img/`, importe-o em `src/data/images.ts`, use no
arquivo de dados certo e registre a origem em `public/img/CREDITS.md`. Para fotos do Instagram, use
`public/img/instagram/`.

**Cores, fontes, espaços e raios** só mudam em `@theme`, no `src/app/globals.css`.

## Publicar na Vercel

1. Suba o repositório para o GitHub e importe em https://vercel.com/new (o Next é detectado sozinho).
2. Em _Settings → Environment Variables_, defina `NEXT_PUBLIC_SITE_URL` com o domínio final
   (usado no Open Graph). Sem ela, a URL da Vercel é usada.
3. Ou pela CLI: `pnpm dlx vercel` (prévia) e `pnpm dlx vercel --prod`.

## Pendências

- [ ] Links diretos de iFood e Rappi por unidade (`src/data/contacts.ts`, `TODO`). Hoje levam a `/delivery`
      do site oficial e o aviso aparece grifado em dourado.
- [ ] Remover `robots: noindex` em `src/app/layout.tsx` quando deixar de ser protótipo (`TODO`).
- [ ] Definir o domínio em `NEXT_PUBLIC_SITE_URL`.
- [ ] Logo e padrão de picolés em vetor, se a marca disponibilizar.
- [ ] Fotos do Instagram para a galeria de ingredientes (ver `design/assets.md`).
