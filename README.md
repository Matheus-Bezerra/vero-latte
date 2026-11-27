# Vero Latte Gelato · redesign conceitual

> **Redesign conceitual independente, não solicitado, sem vínculo ou aprovação da Vero Latte.**
> Projeto de portfólio de Matheus Bezerra. Marca, logotipo e fotos pertencem à Vero Latte.

Implementação a partir do protótipo em `design/` (`HANDOFF.md` é a fonte de verdade).

## Páginas

| Rota                     | O que tem                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `/`                      | Home: abertura da caixa, produtos, ingredientes, manifesto, história, eventos, lojas, contato |
| `/produtos`              | Todos os produtos: 33 itens do site oficial, filtro por categoria e modal de detalhes         |
| `/entregas-e-reembolsos` | Política reproduzida do site oficial                                                          |
| `/politica-de-cookies`   | Política reproduzida do site oficial                                                          |

- A faixa de aviso de conceito aparece **só na home**. As páginas internas usam um topo em pílula,
  no mesmo desenho do menu da home, com "Voltar ao início".
- As categorias da home levam a `/produtos?categoria=<id>` (`palito`, `bombons`, `gran-gelato`,
  `massa`, `presentes`); o filtro mantém a URL em sincronia.
- Em `/produtos`, a foto do card vira a foto do modal com uma View Transition. Sem suporte do
  navegador, ou com `prefers-reduced-motion`, o modal só aparece.

## Stack

Next.js 16 (App Router, páginas estáticas pré-renderizadas) · React 19 · TypeScript estrito · Tailwind CSS v4 · pnpm.
Sem bibliotecas de animação: um único loop `requestAnimationFrame` (`src/hooks/useScrollProgress.ts`),
CSS e View Transitions nativas. Toda animação respeita `prefers-reduced-motion`.

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
  app/          layout (fontes, metadados, rodapé), page (home + aviso), globals.css (tokens no @theme)
    produtos/, entregas-e-reembolsos/, politica-de-cookies/   páginas internas
  components/   uma seção ou peça por arquivo; ui/ guarda Button, Kicker, PageTop, PopsiclePattern…
  data/         TODO o conteúdo: textos, produtos, lojas, horários, contatos, redes, imagens
  hooks/        useScrollProgress, useActiveSection, usePrefersReducedMotion
  styles/       base.css (base, botões, rodapé) e sections.css (seções e movimento)
public/
  img/          fotos otimizadas + CREDITS.md (origem de cada arquivo)
    produtos/   fotos do catálogo de /produtos (até 1200 px)
  pattern-picoles.svg
scripts/download-images.mjs
design/         protótipo, handoff e capturas de referência
```

## Como trocar o conteúdo

Nada de texto fica nos componentes. Edite só `src/data/`:

| O quê                                                                 | Arquivo          |
| --------------------------------------------------------------------- | ---------------- |
| Aviso, menu, título e descrição do site                               | `site.ts`        |
| Horário, telefones, WhatsApp, redes, políticas, **links de delivery** | `contacts.ts`    |
| Abertura                                                              | `hero.ts`        |
| Produtos da home (categorias)                                         | `products.ts`    |
| Catálogo de `/produtos` (itens, filtros, textos do modal)             | `catalog.ts`     |
| Páginas de política                                                   | `policies.ts`    |
| Formulário de contato                                                 | `contactForm.ts` |
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

**Imagens do site oficial:** ficam listadas em `scripts/download-images.mjs`. `pnpm images` baixa só
o que falta (`--force` baixa tudo de novo), remove os metadados e limita o lado maior a 2400 px
(1200 px para `public/img/produtos/`).

**Cores, fontes, espaços e raios** só mudam em `@theme`, no `src/app/globals.css`.

## Publicar na Vercel

Publicado em **https://verolatte.vercel.app** (projeto `verolatte`, ligado a este repositório no
GitHub). Cada push no `main` gera um deploy de produção; outros branches geram prévias.

- Deploy manual pela CLI: `pnpm dlx vercel` (prévia) e `pnpm dlx vercel --prod`.
- Em _Settings → Environment Variables_, `NEXT_PUBLIC_SITE_URL` define a URL usada no Open Graph.
  Sem ela, a URL do deploy é usada.

## Pendências

- [x] Links diretos de iFood (Campo Belo e Cidade Jardim) e Rappi (Campo Belo) em `src/data/contacts.ts`.
- [x] Publicar na Vercel em `verolatte.vercel.app`.
- [x] Definir `NEXT_PUBLIC_SITE_URL=https://verolatte.vercel.app` na Vercel (produção e prévia).
- [ ] Remover `robots: noindex` em `src/app/layout.tsx` quando deixar de ser protótipo (`TODO`).
- [ ] Logo em vetor, se a marca disponibilizar (hoje é PNG; o padrão de picolés já é SVG).
- [ ] Fotos do Instagram para a galeria de ingredientes (ver `design/assets.md` e `src/data/ingredients.ts`).
