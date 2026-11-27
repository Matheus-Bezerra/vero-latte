---
name: Vero Latte Gelato · Home (conceito)
description: Redesign conceitual de uma gelateria artesanal premium. Arcos de vitrine, rosa da embalagem, cacau e hot stamping dourado.
colors:
  leite: "#fbf5f1"
  rose-50: "#f4e7e2"
  rose: "#d0ada4"
  rose-box: "#bf8a80"
  choc: "#774d28"
  cacau: "#3b2618"
  gold: "#bfa760"
  gold-soft: "#e3d4a6"
  gold-pattern: "#d9c27e"
  stone: "#68625a"
  erro: "#9a2e1f"
typography:
  display:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(2.1rem, 1.4rem + 3vw, 3.9rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.6vw, 2.4rem)"
    fontWeight: 500
    lineHeight: 1.08
  title:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.6vw, 1.45rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  display-label:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.45rem, 1rem + 1.9vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.08
  display-product:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.35rem)"
    fontWeight: 500
    lineHeight: 1.08
  display-menu:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.9rem, 8vw, 2.6rem)"
    fontWeight: 500
    lineHeight: 1.08
  manifesto:
    fontFamily: "Cinzel, Trajan Pro, Georgia, serif"
    fontSize: "clamp(1.5rem, min(0.8rem + 2vw, 5.2svh), 2.6rem)"
    fontWeight: 500
    lineHeight: 1.08
  label:
    fontFamily: "Nunito Sans, Avenir Next, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
rounded:
  photo: "4px"
  card: "12px"
  card-lg: "14px"
  pill: "999px"
  stick: "4px 4px 2px 2px"
  stick-lg: "6px 6px 3px 3px"
  hair: "1px"
  arch: "999px 999px 4px 4px"
spacing:
  "1": "8px"
  "2": "16px"
  "3": "24px"
  "4": "32px"
  "5": "48px"
  "6": "64px"
  "7": "96px"
  "8": "128px"
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 10vw, 8.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.choc}"
    textColor: "{colors.leite}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.cacau}"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-gold-hover:
    backgroundColor: "{colors.gold-soft}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.cacau}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.cacau}"
    textColor: "{colors.leite}"
  field-pill:
    backgroundColor: "{colors.leite}"
    rounded: "{rounded.pill}"
    padding: "6px"
  photo-arch:
    rounded: "{rounded.arch}"
---

# Design System: Vero Latte Gelato · Home (conceito)

## Overview

**Creative North Star: "A Vitrine da Gelateria"**

A página é organizada como o balcão de uma gelateria italiana. O arco do vidro de vitrine enquadra os produtos, e cada seção expõe uma coisa só, com bastante respiro e luz quente. O tom é acolhedor e sofisticado. A paleta vem da embalagem rosa e do cacau, com o dourado do hot stamping como acento. A tipografia de inscrição clássica (Cinzel) assina os títulos, e uma sans humanista e leve (Nunito Sans) conduz a leitura.

Os componentes têm duas camadas. A camada tátil e macia aparece nos botões em pílula, no picolé que inclina no hover e no leve recuo de escala ao clicar. A camada refinada e contida vem das linhas douradas finas, do kicker com traço e do pouco ornamento. A foto e o texto lideram, e a interface fica em segundo plano.

O movimento é raro e significativo. A caixa da abertura se abre, o manifesto acende verso por verso e a vitrine revela as fotos de baixo para cima. O resto entra com revelações curtas na mesma curva.

**Key Characteristics:**
- Arco de vitrine (topo redondo, base reta) como forma assinatura em fotos, no rótulo e no card de delivery.
- Fundo leite rosado, texto cacau e acento dourado usado com parcimônia.
- Cinzel só em títulos e frases curtas. Nunito Sans em todo o resto.
- Superfícies chapadas. A profundidade vem do tom (leite, rose-50, cacau) e não de sombras.
- Uma curva só para tudo (`cubic-bezier(0.22, 0.8, 0.24, 1)`), animando apenas transform, opacity e clip-path.

## Colors

Uma paleta quente e comestível: rosa de embalagem, chocolate e cacau, com o dourado do hot stamping.

### Primary
- **Chocolate da Assinatura** (choc): botões principais, links, kicker sobre fundo claro. É a cor do logotipo.

### Secondary
- **Dourado Hot Stamping** (gold): linhas, traço do kicker, trilha dos passos e botão sobre fundo escuro. A versão **Dourado Suave** (gold-soft) é usada no hover do botão dourado e no texto sobre cacau.

### Tertiary
- **Rosa da Embalagem** (rose): é a protagonista no manifesto e no menu mobile. O **Rosa Caixa** (rose-box) é o fundo do padrão de picolés, e o **Dourado do Padrão** (gold-pattern) aparece só dentro desse padrão.

### Neutral
- **Leite Rosado** (leite): fundo principal.
- **Rosa Névoa** (rose-50): superfícies suaves, como ingredientes, novidades e chips.
- **Cacau** (cacau): texto principal e fundo das seções escuras (eventos, aviso).
- **Pedra** (stone): texto secundário. É o tom oficial escurecido para passar AA sobre o rose-50.
- **Erro** (erro): só para mensagens de validação.

### Named Rules
**The Hot Stamping Rule.** O dourado é um detalhe, nunca uma superfície grande. Fica em linhas, bolinhas e no botão sobre cacau.

**The No Red-Green Rule.** Vermelho e verde ficam reservados a campanhas sazonais e não entram na home. A única exceção é o tom de erro dos formulários.

**The Choc-on-Rose Rule.** Chocolate sobre rosa tem contraste de cerca de 3,5:1, por isso só aparece em texto grande.

## Typography

**Display Font:** Cinzel (com Trajan Pro, Georgia)
**Body Font:** Nunito Sans (com Avenir Next, system-ui)

**Character:** inscrições romanas em versalete trazem o tom clássico e italiano. Uma sans leve e arredondada mantém o calor e a legibilidade.

### Hierarchy
- **Display** (500, clamp 34 a 62px, 1.08): títulos de seção, limitados a 20ch.
- **Headline** (500, clamp 26 a 38px, 1.08): títulos secundários e citações.
- **Title** (Nunito 600, clamp 19 a 23px): títulos de passos e de cards, e o texto de abertura das seções (este em peso 300).
- **Body** (400, 17px, 1.6): corpo, com linhas de 42 a 54ch.
- **Label** (600, 15px, 0.02em): botões, menu e kicker.
- **Papéis de display específicos** (Cinzel, fluidos): rótulo da abertura (display-label), nomes da vitrine de produtos (display-product), links do menu mobile (display-menu) e versos do manifesto (manifesto, mínimo de 24px para contar como texto grande).

### Named Rules
**The Inscription Rule.** Cinzel só em títulos e frases curtas, nunca em parágrafos nem na interface.

**The Logo Is an Image Rule.** O lettering "Vero Latte" nunca é recriado com fonte. Usa-se sempre o arquivo do logotipo.

## Layout

- O conteúdo tem no máximo 1280px, com margem lateral fluida `clamp(20px, 4vw, 56px)`.
- O respiro vertical das seções é `clamp(72px, 10vw, 136px)`, e o ritmo segue uma base de 8px.
- Tudo é alinhado à esquerda. O único bloco centralizado é o rótulo da abertura.
- As grades são assimétricas, como 6fr/5fr em Eventos e 5fr/6fr em Produtos, e viram uma coluna abaixo de 861px.
- Os breakpoints são 641, 861, 981 (menu) e 1021px.
- Seções guiadas por scroll usam um palco sticky dentro de um trilho alto: a abertura, o manifesto e os ingredientes.

## Elevation & Depth

O sistema é plano. A profundidade vem da alternância de tons de fundo (leite, rose-50, rose, cacau) e não de sombras. Há sombras pontuais, sempre difusas e tingidas de cacau, nunca cinza: no menu em pílula flutuante, que também tem backdrop blur, e no rótulo da abertura.

### Named Rules
**The Tinted Shadow Rule.** Quando há sombra, ela é cacau a 45–55% com espalhamento negativo, nunca preta.

## Shapes

- **Arco de vitrine** (`999px 999px 4px 4px`): é a silhueta do picolé e do vidro de balcão. Vale para a foto principal de cada seção, o rótulo e o card de delivery.
- **Fotos comuns:** quase retas (4px).
- **Cards internos:** 12–14px.
- **Picolé em miniatura** (stick `4px 4px 2px 2px`, stick-lg `6px 6px 3px 3px`): ícone do botão e pontos da vitrine. A haste usa o raio hair (1px).
- **Botões, campos de newsletter, chips e menu:** pílula.
- **Padrão de picolés** (SVG, tile 88×120): aparece em faixas e no rodapé como material de embalagem.

## Components

### Buttons
- **Feel:** tátil e macio.
- **Shape:** pílula, com altura mínima de 48px e padding de 12×24px.
- **Primary (choc):** fundo chocolate e texto leite. No hover vira cacau.
- **Gold:** para fundos escuros. Fundo dourado e texto cacau. No hover vira dourado suave.
- **Line:** contorno na cor do texto. No hover fica preenchido de cacau, ou de leite quando está sobre fundo escuro.
- **Estados:** transições de 0.3s na curva vero e `scale(.97)` ao clicar. O ícone de picolé inclina −14° no hover.

### Inputs / Fields
- **Pílula da newsletter:** o campo e o botão ficam dentro de uma pílula leite, com borda chocolate a 25%. Com foco, a borda vira chocolate cheio.
- **Formulário de contato:** campos com borda fina e foco visível em chocolate. Erro em `erro`, com `aria-invalid`.

### Navigation
- Pílula flutuante leite a 82%, com blur. Ao rolar, sobe para 12px do topo.
- O item ativo, marcado por IntersectionObserver, ganha fundo.
- No mobile, a navegação abre numa folha rosa que se expande em `clip-path: circle()` a partir do botão.

### Kicker
- Rótulo de seção com um traço dourado de 22px à esquerda. É chocolate no fundo claro e dourado no escuro.

### Timeline de Passos (assinatura)
- Lista numerada com trilho dourado a 30% e uma linha dourada que preenche com o scroll (`scaleY`).
- Cada bolinha acende quando a linha chega: fica dourada cheia, dá um pop de escala e solta um anel que se expande.

### Photo Arch Reveal (assinatura)
- A foto em arco entra com `clip-path: inset(100% 0 0 0)` até 0 e um zoom que assenta de 1.18 para 1, de 1.1 a 1.4s, com atraso escalonado.

### Caixa que se Fecha (assinatura)
- É o fecho da página e espelha a abertura: as duas metades da tampa rosa (padrão de picolés) deslizam conforme a seção entra na tela.
- Elas se encontram atrás de um rótulo creme em arco, com o logo, a tagline oficial e um CTA.
- Sem JS ou com movimento reduzido, a caixa já aparece fechada.

### Selo Dourado (assinatura)
- Confirma os envios de formulário. É um círculo dourado (hot stamping) com aro pontilhado, um picolé creme e um check gravado, inclinado −8°.
- Entra como um carimbo: desce em escala 1.7, prensa a 0.9 e assenta em 1.

### Faixa de Picolés Viva
- É a faixa do rodapé, desenhada em elementos e não em background.
- Os picolés perto do cursor se inclinam para longe dele, até 16° num raio de 140px. Só reage com ponteiro fino.
- O pontinho de picolé da vitrine de produtos se enche de dourado de baixo para cima quando o item fica ativo.

## Do's and Don'ts

### Do:
- **Do** use o arco (`999px 999px 4px 4px`) na foto principal de uma seção nova.
- **Do** anime só transform, opacity e clip-path, com `--ease-vero` e os tokens `--duration-fast/base/slow` (0.3/0.7/1.1s). Sempre com uma alternativa para `prefers-reduced-motion`.
- **Do** alterne os fundos (leite, rose-50, cacau) para separar as seções, em vez de usar bordas ou sombras.
- **Do** mantenha títulos em Cinzel com no máximo 20ch e corpo com 42 a 54ch.

### Don't:
- **Don't** use dourado como fundo de seção ou em blocos grandes de texto.
- **Don't** use vermelho ou verde na home.
- **Don't** recrie o logotipo com fonte.
- **Don't** use sombras pretas ou cinza, nem cards genéricos com sombra. O arco substitui o card.
- **Don't** centralize conteúdo além do rótulo da abertura.
