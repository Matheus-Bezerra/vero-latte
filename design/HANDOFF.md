# Vero Latte Gelato · Home · Handoff para o Claude Code

**Natureza:** redesign conceitual independente, não solicitado, sem vínculo ou aprovação da Vero Latte. Projeto de portfólio de Matheus Bezerra.
**Status:** protótipo de alta fidelidade, versão 3 (26/11/2026), com as definições de conteúdo e de materiais confirmadas por Matheus.

## 1. Decisões confirmadas

| # | Tema | Decisão |
|---|---|---|
| 1 | Frase da abertura | Usar **"Gelato de verdade para momentos de verdade."** |
| 2 | Gran Gelato | Manter a descrição: "Camadas de gelato em formato de sobremesa para fatiar e dividir à mesa." |
| 3 | WhatsApp da loja de Campo Belo | **+55 (11) 95065-7666** (link `https://wa.me/5511950657666`). Também no rodapé. |
| 4 | Horário | **Mesmo horário para todas as unidades:** seg. a sáb., 10h às 20h; dom., 11h às 17h. |
| 5 | Endereço do Cidade Jardim | Manter: quiosque no 1º andar, Av. Magalhães de Castro, 12000. |
| 6 | Redes sociais | Instagram, YouTube, Facebook e Pinterest com os links da seção 2. |
| 7 | Escola em Bolonha | Escrever **"Carpigiani Gelato University"**. |
| 8 | Depoimentos, imprensa e prêmios | Não incluir, por falta de fonte verificada. |
| 9 | Materiais | Usar imagens e elementos visuais do site oficial, do Pinterest e do Instagram (seção 13). O logo vem de um arquivo enviado por Matheus. |
| 10 | Legendas gravadas nas fotos | Resolver por código: recortar a faixa e trocar por etiqueta em texto (seção 13). |
| 11 | Fontes | Somente fontes gratuitas do Google Fonts, parecidas com as do site (ver seção 5). |

**Ainda em aberto:** apenas os links diretos de iFood e Rappi (seção 12). Hoje os botões levam à página oficial `/delivery`. Esse é o único trecho que continua grifado em dourado no protótipo.

## 2. Contatos e links oficiais

| Item | Valor |
|---|---|
| Loja Campo Belo | R. Barão de Jaceguai, 1376, Campo Belo, São Paulo, SP, 04606-003 |
| Telefone fixo | (11) 2506-9295 |
| WhatsApp (Campo Belo e rodapé) | +55 (11) 95065-7666 |
| Shopping Cidade Jardim | Quiosque no 1º andar, Av. Magalhães de Castro, 12000. WhatsApp (11) 91415-7731 (do site oficial) |
| Horário (todas as unidades) | Seg. a sáb., 10h às 20h · Dom., 11h às 17h |
| Instagram | https://www.instagram.com/verolattegelato |
| YouTube | https://www.youtube.com/@VeroLatteGelato-i5z/shorts |
| Facebook | https://www.facebook.com/VeroLatteGelato/ |
| Pinterest | https://br.pinterest.com/VeroLatteGelato/ |
| Delivery (provisório) | https://www.verolattegelato.com.br/delivery |
| Políticas | /entregas-e-reembolsos e /política-de-cookies, no site oficial |

## 3. Arquivos do pacote

| Arquivo | O que é |
|---|---|
| `index.html` | Protótipo navegável e responsivo da home, num único arquivo (HTML, CSS e JS sem dependências). É a fonte de verdade de layout, tokens e interações. |
| `apresentacao.html` | Tela de apresentação com o protótipo em moldura desktop (1440 px) e celular lado a lado. |
| `HANDOFF.md` | Este documento. |
| `assets.md` | Imagens usadas, com URL de origem e uso. |
| `assets/logo.png` | Logotipo em PNG transparente (338×348), enviado por Matheus. Único arquivo local do pacote. |
| `screenshots/` | Capturas de referência da versão anterior. As de ingredientes e de lojas foram retiradas, porque essas seções mudaram na versão 3. |

O logotipo é local (`assets/logo.png`). As fotos são carregadas do CDN do site oficial (static.wixstatic.com) e do Pinterest (i.pinimg.com), por isso o protótipo precisa de internet. Na implementação, baixe e troque por arquivos locais otimizados (seção 10).

## 4. Conceito

**A caixa que abre.** A embalagem rosa com picolés dourados é o objeto mais reconhecível da marca, então a abertura é essa tampa. A página começa com a tampa fechada e um rótulo creme em arco, com o logotipo e a frase oficial "Mais que gelato, uma experiência sensorial.". Ao rolar, as duas metades da tampa se afastam e revelam a foto do gelato, como quem abre o presente. Depois da abertura aparece a frase "Gelato de verdade para momentos de verdade.".

O resto da página fica mais contido, com dois momentos de movimento que contam a história:
1. **Manifesto guiado pela rolagem:** o texto "A gente acredita…" do site oficial acende verso por verso.
2. **Vitrine de produtos:** a lista das cinco categorias controla uma foto grande em arco, que troca com uma revelação de baixo para cima.

O **arco** (topo arredondado, base reta) aparece no rótulo, em fotos e no card de delivery. Ele lembra a silhueta do picolé e a vitrine de gelateria, e substitui o card genérico.

## 5. Cores e tipografia

### Cores

Base extraída do CSS do site oficial (`#774D28`, `#D0ADA4`, `#BFA760`, `#756F63`) e da embalagem. Os tons de apoio (leite, rose-50, cacau, rose-box) foram derivados para a interface.

| Token | Hex | Origem | Uso |
|---|---|---|---|
| `--leite` | `#FBF5F1` | derivado | Fundo principal (branco levemente rosado) |
| `--rose-50` | `#F4E7E2` | derivado | Superfícies suaves: ingredientes, novidades, chips |
| `--rose` | `#D0ADA4` | site oficial | Protagonista: manifesto, menu mobile |
| `--rose-box` | `#BF8A80` | embalagem (estimado) | Fundo do padrão de picolés |
| `--choc` | `#774D28` | site oficial e logo | Botões principais, assinatura, links |
| `--cacau` | `#3B2618` | derivado | Texto principal e seção de eventos |
| `--gold` | `#BFA760` | site oficial e hot stamping | Detalhes, linhas, botão sobre fundo escuro |
| `--gold-soft` | `#E3D4A6` | derivado | Hover do botão dourado, texto sobre cacau |
| `--stone` | `#68625A` | site oficial (`#756F63`) escurecido | Texto secundário. O tom original não passa AA sobre `rose-50`. |

**Contraste (WCAG):**
- `cacau` sobre `leite`: cerca de 13:1 (AAA).
- `choc` sobre `leite`: cerca de 6,8:1 (AA).
- `stone` sobre `leite`: cerca de 5,6:1. Sobre `rose-50`: cerca de 5:1 (AA).
- `cacau` sobre `rose`: cerca de 7:1 (AA).
- `gold` sobre `cacau`: cerca de 6:1 (AA).
- `choc` sobre `rose`: cerca de 3,5:1. Use só em texto grande (título lateral do manifesto).

Vermelho e verde ficam reservados para campanhas sazonais, como pede o briefing, e não entram na home.

### Tipografia

Todas as fontes são gratuitas e livres, do Google Fonts. Escolhidas por serem parecidas com as do site oficial.

| Papel | Fonte | Observação |
|---|---|---|
| Títulos e destaques | **Cinzel** 400/500/600 | Parecida com a fonte de títulos usada no site oficial. Só tem maiúsculas e versaletes, o que dá o tom clássico e italiano. Usar apenas em títulos e frases curtas. |
| Texto e interface | **Nunito Sans** 300/400/600/700 | Alternativa gratuita à Avenir LT 35 Light, usada no site oficial. |
| Assinatura | Logotipo (imagem) | O lettering "Vero Latte" não deve ser recriado em fonte. |

**Escala** (fluida, razão ~1,25):

| Token | Tamanho | Uso |
|---|---|---|
| `--t-xs` | 13 px | legendas, aviso |
| `--t-sm` | 15 px | botões, metadados, menu |
| `--t-md` | 17 px | corpo |
| `--t-lg` | 19–23 px | subtítulos e texto de abertura das seções |
| `--t-xl` | 26–38 px | citação e títulos secundários |
| `--t-2xl` | 34–62 px | títulos de seção |
| `--t-3xl` | 42–90 px | reserva |

Entrelinha do corpo: 1,6. Títulos: 1,08. Linhas de texto limitadas a 42–54 caracteres (`max-width` em `ch`).

## 6. Espaçamento, grade e forma

- Base de 8 px: `--s-1` 8, `--s-2` 16, `--s-3` 24, `--s-4` 32, `--s-5` 48, `--s-6` 64, `--s-7` 96, `--s-8` 128.
- Largura máxima de conteúdo: 1280 px. Margem lateral fluida: `clamp(20px, 4vw, 56px)`.
- Respiro vertical das seções: `clamp(72px, 10vw, 136px)`.
- Raios: botões e chips em pílula (999 px). Fotos com 4 px. Arco com `999px 999px 4px 4px`. Cards internos com 12–14 px.
- Alinhamento à esquerda em todo o conteúdo. O único bloco centralizado é o rótulo da abertura.

**Padrão de picolés:** SVG em data URI (tile de 88×120 px), picolés dourados e creme alternados sobre `--rose-box`, inspirado na embalagem. Está na classe `.pattern`.

## 7. Estrutura da página

| # | Seção (id) | Conteúdo | Fonte do texto |
|---|---|---|---|
| — | Aviso | Faixa "Protótipo de portfólio… sem vínculo" + link para o site oficial | proposta |
| — | Menu | Início, Produtos, Eventos, Sobre, Lojas, Contato + botão **Pedir delivery** | estrutura atual do site |
| 1 | `#inicio` | Tampa da caixa, rótulo com logo, tagline oficial, CTAs "Conhecer os gelatos" e "Encontrar uma loja". Depois da abertura: "Gelato de verdade para momentos de verdade." | tagline: site · frase final: bio do Instagram (confirmada) |
| 2 | `#produtos` | Palito, Bombons, Gran Gelato, Gelato Massa e Presentes, com link para cada página oficial | sabores tirados dos nomes das fotos do site · Gran Gelato: proposta confirmada |
| 3 | `#experiencia` | Ingredientes: cacau, frutas sazonais, receitas artesanais. Galeria de 6 fotos (3 do site, 3 do Pinterest) | site oficial, resumido |
| 4 | `#manifesto` | "A gente acredita…" na íntegra | site oficial |
| 5 | `#sobre` | Mariana Galvão: Direito, chef, Bolonha (Carpigiani Gelato University). Criada em 2014 | site oficial (home e /lojas) |
| 6 | `#eventos` | Carrinhos refrigerados, autonomia de até 12 h, promotoras opcionais, frete com montagem, degustação de bombons | página /eventos |
| 7 | `#lojas` `#delivery` | Campo Belo e Cidade Jardim com o mesmo horário, WhatsApp, iFood e Rappi. Fotos das lojas com etiqueta em texto (“Loja matriz e fábrica”, “Quiosque, 1º andar”) | páginas /lojas e /delivery |
| 8 | `#contato` | Cadastro de novidades por e-mail ou WhatsApp (demonstração) | barra do site oficial |
| — | Rodapé | Logo, navegação, atendimento, políticas, redes sociais com os links da seção 2, aviso de conceito | site oficial |

O botão no canto inferior direito do protótipo liga e desliga a marcação dourada de texto provisório. Hoje ela só aparece no aviso sobre os links de delivery.

## 8. Interações e animações

Todas usam `transform`, `opacity` ou `clip-path`, com um único loop `requestAnimationFrame` ligado ao scroll (passivo). Curva padrão: `cubic-bezier(.22,.8,.24,1)`.

| Elemento | Comportamento | Detalhes técnicos |
|---|---|---|
| **Abertura: a caixa** | A seção tem 230 vh com um palco `sticky` de 100 vh. O progresso `--p` (0→1) é calculado pelo scroll. As tampas fazem `translateX(∓101% × p)`. O rótulo esmaece (`1 − 2,6p`) e encolhe até 75%. A foto vai de `scale(1,14)` a `1`. O texto final aparece a partir de p ≈ 0,55. | `--p` é aplicado no `#inicio` e o CSS faz as contas com `calc()`. A dica "Role para abrir a caixa" tem um gotejar em loop. |
| Entrada do rótulo | Logo desce com leve rotação, depois título e botões sobem (0,15 s, 0,45 s, 0,65 s, 0,9 s). | Só uma vez, no carregamento. |
| Menu flutuante | Pílula translúcida (`backdrop-filter`) que sobe para 12 px do topo ao rolar. A seção ativa ganha fundo rosa e um ponto dourado. | `IntersectionObserver` com `rootMargin: -45% 0 -50% 0`. |
| Botões | Ícone de picolé que inclina −14° no hover. Escala 0,97 ao pressionar. | |
| **Vitrine de produtos** | Hover (só com mouse), clique ou teclado na lista trocam a foto em arco. A nova foto entra com `clip-path: inset(100% 0 0 0 → 0)` e `scale(1,08 → 1)`. A descrição do item abre por `grid-template-rows: 0fr → 1fr`. O nome desliza 0,6 rem. | Botões com `aria-expanded`. A legenda da foto usa `aria-live`. |
| Produtos no celular | Carrossel horizontal com `scroll-snap`, cards de 78% de largura e indicadores em forma de picolé. | |
| Ingredientes | Parallax suave em 6 fotos, com velocidades entre −0,06 e 0,07. Zoom de 1,05 no hover. | Desligado com movimento reduzido. |
| **Manifesto** | Palco `sticky` com altura de (nº de versos + 2) × 26 vh. Cada verso passa de 20% para 100% de opacidade de cor conforme o progresso. A frase final acende por último em marrom. Barra de progresso vertical à direita. | |
| Eventos | Linha do tempo de 4 passos (a sequência real do serviço). A linha dourada se preenche conforme a seção entra na tela. | `--sp` calculado no loop. |
| Lojas | Zoom de 1,04 na foto no hover. | |
| Menu mobile | Tela cheia em rosa que abre com `clip-path: circle()` a partir do botão. Esc fecha, o foco vai para "Fechar" e o scroll do body trava. | |
| Barra fixa mobile | "Pedir delivery" e "Lojas" sobem da base depois da abertura. | Respeita `safe-area-inset-bottom`. |
| Novidades | A alternância e-mail/WhatsApp troca tipo, autocomplete, placeholder e rótulo do campo. Validação com mensagens que dizem como corrigir. | Demonstração, nada é enviado. |

**Movimento reduzido** (`prefers-reduced-motion: reduce`): a abertura vira estática (foto com o rótulo por cima, sem tampa), o manifesto aparece inteiro, não há parallax e as transições ficam instantâneas.

## 9. Responsivo

| Faixa | Mudanças |
|---|---|
| ≥ 1021 px | Layout completo. Lojas em 3 colunas (2 lojas + delivery). |
| ≤ 1020 px | Delivery ocupa a linha inteira abaixo das lojas. |
| ≤ 980 px | Links do menu dão lugar ao botão "Menu" (tela cheia). |
| ≤ 860 px | Produtos viram carrossel. Ingredientes, história e eventos passam a 1 coluna. Aparece a barra fixa de ações. Rodapé em 2 colunas. |
| ≤ 640 px | Lojas em 1 coluna. O título do manifesto fica na horizontal. |

Áreas de toque têm no mínimo 44 px (botões principais com 48 px). Use `100svh` para o palco da abertura no celular.

## 10. Acessibilidade, performance e implementação

- Link "Pular para o conteúdo", foco visível (marrom, ou dourado em fundo escuro), `aria-current` no menu, `aria-expanded` nos controles, `role="dialog"` no menu mobile.
- Todas as fotos têm texto alternativo descritivo. As do carrossel mobile têm `alt=""` porque o nome está logo abaixo.
- A foto da abertura usa `fetchpriority="high"` e as demais `loading="lazy"`.
- **Na implementação:**
  - Exportar imagens em AVIF/WebP com `srcset` (640, 960, 1440, 1920).
  - Hospedar as fontes localmente (Cinzel e Nunito Sans, licença OFL) com `font-display: swap` e subset latin.
  - Pré-carregar a foto da abertura e o logo.
  - Fixar width/height das imagens para evitar mudança de layout.
- **Stack sugerida:**  Next.js (export estático), CSS com custom properties (os tokens acima) e JS vanilla para o loop de scroll. Não é preciso GSAP.
- **Componentes:** `Notice`, `NavPill`, `MobileSheet`, `HeroBox`, `ProductIndex` + `ProductShowcase`, `ProductRail`, `Ingredients`, `Manifesto`, `FounderStory`, `EventSteps`, `StoreCard`, `DeliveryCard`, `NewsletterForm`, `Footer`, `MobileActionBar`.
- **Conteúdo:** manter textos, lojas, horários e links em um arquivo de dados (JSON ou MD), como `src/data/`, para facilitar ajustes.

**Prompt sugerido para o Claude Code:**
> Implemente a home da Vero Latte a partir de `index.html` e `HANDOFF.md`, em Astro com CSS e JS vanilla, preservando tokens, estrutura, interações e o comportamento com movimento reduzido. Separe em componentes conforme a seção 10, mova textos, contatos, horários e links (seção 2) para `src/data/`, baixe e otimize as imagens listadas em `assets.md` para `public/img/` (AVIF/WebP com srcset) e hospede as fontes localmente. Mantenha o aviso de projeto conceitual visível.

## 11. Textos finais usados no protótipo

- **Abertura (rótulo):** "Mais que gelato, uma experiência sensorial."
- **Abertura (revelada):** "Gelato de verdade para momentos de verdade." / "Receitas artesanais em forma de sobremesa no palito, para quando a vida pedir uma celebração."
- **Produtos:** "Um gelato para cada momento".
- **Gran Gelato:** "Camadas de gelato em formato de sobremesa para fatiar e dividir à mesa."
- **História:** "Da rigidez das leis à suavidade do gelato". Mariana fez dez anos de Direito, virou chef de cozinha internacional com especialização em confeitaria e estudou na **Carpigiani Gelato University**, em Bolonha. A Vero Latte nasceu em 2014.
- **Eventos:** "Celebre com gelato".
- **Lojas:** "Venha provar ou peça em casa".
- **Novidades:** "Seja o primeiro a provar os lançamentos".

## 12. Pendências

- [ ] **Links diretos de delivery:** trocar os botões iFood e Rappi pelos links de cada unidade. Hoje levam à página oficial `/delivery`.
- [ ] **Baixar as imagens** para `public/img/` na implementação (site e Pinterest), em resolução maior quando houver. As do Pinterest no protótipo vêm em 736 px de largura.
- [ ] **Logo e estampa em vetor:** se houver o logo em SVG e a estampa vetorial da embalagem, trocar o PNG e o desenho do padrão de picolés.
- [ ] **Fotos do Instagram:** baixar as candidatas listadas em `assets.md` (o Pinterest da marca só tem 5 pins públicos) e colocar em `assets/img/`. Depois é só trocar as fotos da galeria de ingredientes e, se quiser, ampliá-la.

## 13. Materiais, fontes e direitos

- **Decisão de Matheus:** aproveitar imagens e elementos visuais do site oficial, do Pinterest e do Instagram da marca neste protótipo de portfólio.
- **Logotipo:** arquivo enviado por Matheus, extraído do site oficial (`assets/logo.png`, PNG transparente).
- **Imagens do site oficial:** ver `assets.md`.
- **Imagens do Pinterest:** 3 pins do perfil `br.pinterest.com/VeroLatteGelato/` (cheesecake com goiabada, palito com café, affogato). O pin com texto gravado na imagem foi descartado.
- **Instagram:** ainda sem imagens no protótipo. As URLs de imagem do Instagram vencem em poucos dias, então é preciso baixar os arquivos. As melhores candidatas estão em `assets.md`.
- **Legendas gravadas nas fotos das lojas:** as duas fotos de /lojas trazem uma faixa de legenda na base (a partir de ~77% da altura). O protótipo corta essa faixa por código (quadro `aspect-ratio: 16/9`, com a imagem alinhada ao topo e a base escondida) e a substitui por uma etiqueta em texto sobre a foto (`.store .tag`). Assim a informação fica acessível e acompanha a tipografia da página. Ao baixar as imagens, recorte os 24% inferiores no arquivo ou mantenha o mesmo recorte em CSS.
- **Fontes:** Cinzel e Nunito Sans são gratuitas e livres (SIL Open Font License) e podem ser baixadas do Google Fonts sem restrição de licença.
- **Aviso mantido:** logotipo, fotos e estampa da embalagem continuam sendo da Vero Latte. O aviso de projeto conceitual fica visível na faixa do topo e no rodapé. Se a marca pedir a retirada de algum material, é só trocar.
- **Fotos de eventos com marcas de terceiros** (ações corporativas) foram evitadas de propósito.
