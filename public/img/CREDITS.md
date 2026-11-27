# Créditos das imagens

Todas as imagens pertencem à **Vero Latte Gelato**. Foram usadas neste redesign conceitual de portfólio
(sem vínculo ou aprovação da marca) por decisão de Matheus Bezerra (HANDOFF §13). Se a marca pedir a
retirada de algum material, é só trocar o arquivo.

Reproduza o download com `pnpm images` (`scripts/download-images.mjs`). O script redimensiona para no
máximo 2400 px no lado maior, salva em JPEG com qualidade 85 e remove os metadados EXIF.

| Arquivo | Origem | Página | Descrição |
|---|---|---|---|
| `logo.png` | Arquivo enviado por Matheus (extraído do site oficial) | Site oficial | Logotipo, PNG transparente 338×348 |
| `hero-palito-goiabada.jpg` | https://static.wixstatic.com/media/d72874_09cff18fc9e14fef94b9a442b3e85365~mv2.jpg | Home | Palitos com cobertura branca e goiabada. Saiu da abertura; hoje é a foto do item "Todos os produtos" na seção Produtos. |
| `hero-caixa-rosa-panoramica.jpg` | Arquivo enviado por Matheus (imagem própria, 1774×887; PNG original convertido para JPEG q92 em 27/11/2026) | Abertura | Caixa rosa com quatro gelatos embalados e prato com quatro gelatos no palito. Revelada pela rolagem na abertura. |
| `hero-caixa-rosa-retrato.jpg` | Arquivo enviado por Matheus (imagem própria, 1024×1536, estendida para 1024×2304 com fundo bege em cima e embaixo, para não cortar a largura em celulares compridos; PNG convertido para JPEG q92 em 27/11/2026) | Abertura | Versão retrato (≈9:20) da caixa rosa, usada em celular e tablet em pé. |
| `produto-palito-brigadeiro.jpg` | https://static.wixstatic.com/media/d72874_027ceb30c1e24ccea34b6a4a4eb44812~mv2.jpg | /gelatonopalito | Brigadeiro com granulado |
| `produto-bombom.jpg` | https://static.wixstatic.com/media/d72874_eb5cb1972cb0489892d2369d4b59c94f~mv2.jpg | /bombons | Bombom cortado |
| `produto-gran-gelato.jpg` | https://static.wixstatic.com/media/d72874_b007a5feaeaf49abbd02f6b5553de403~mv2.jpg | /grangelato | Gran Gelato fatiado |
| `produto-massa-pistache.jpg` | https://static.wixstatic.com/media/d72874_69d82e9bfc024c3a9623ae3fae983f5b~mv2.jpg | /gelatomassa | Potes de pistache |
| `produto-caixa-presente.jpg` | https://static.wixstatic.com/media/d72874_dab49ca91f194293843b7b41f7441677~mv2.jpeg | /presentes | Caixa de presente com 12 gelatos |
| `ingrediente-cobertura-chocolate.jpg` | https://static.wixstatic.com/media/d72874_3eb1a53d350b4bd3b0e8a544e78b8175~mv2.jpg | Home | Chocolate escorrendo sobre palitos |
| `ingrediente-sorbet-manga.jpg` | https://static.wixstatic.com/media/d72874_44c2fba17fc84e76a2946d0a20ab792f~mv2.jpg | /gelatomassa | Sorbet de manga |
| `ingrediente-pistache.jpg` | https://static.wixstatic.com/media/d72874_7159c9230c9b49b68ecc4f8376488bf9~mv2.jpg | /gelatonopalito | Pistache |
| `pinterest-cafe-ou-gelato.jpg` | https://i.pinimg.com/originals/7d/14/98/7d1498b4f99b9a2970892400215a6ace.jpg | br.pinterest.com/VeroLatteGelato | Palitos servidos ao lado de café |
| `pinterest-cheesecake-goiabada.jpg` | https://i.pinimg.com/originals/40/c1/12/40c112e99c6cd8796465a631bcc19ed7.jpg | br.pinterest.com/VeroLatteGelato | Cheesecake com goiabada |
| `pinterest-affogato.jpg` | https://i.pinimg.com/originals/40/da/ae/40daae82c5914f6f582f10a2060bc000.jpg | br.pinterest.com/VeroLatteGelato | Affogato no copo Vero Latte |
| `historia-mariana-galvao.jpg` | https://static.wixstatic.com/media/d72874_8c20db7632034058b46295a92a0ca80c~mv2.jpeg | Home | Mariana Galvão na loja |
| `eventos-carrinho.jpg` | https://static.wixstatic.com/media/d72874_984c520eb1f3437a89d63aa1c6fe35d8~mv2.jpeg | /eventos | Carrinho refrigerado |
| `eventos-bandeja-gelo-seco.jpg` | https://static.wixstatic.com/media/d72874_61b5b9634f2845f1813928be62fc464c~mv2.jpg | Home | Bandeja sobre gelo seco. Usada em Eventos. |
| `ifood-logo.svg` | https://commons.wikimedia.org/wiki/File:IFood_logo.svg | Wikimedia Commons | Logotipo do iFood. Marca registrada do iFood, usada só para identificar o app de delivery neste conceito. |
| `rappi-logo.svg` | https://commons.wikimedia.org/wiki/File:Rappi_logo.svg | Wikimedia Commons | Logotipo do Rappi. Marca registrada do Rappi, mesmo uso. |
| `loja-campo-belo.jpg` | https://static.wixstatic.com/media/d72874_aa9ac2dd0de94a3ab6f8d06648eb2b2d~mv2.jpg | /lojas | Fachada. A legenda gravada na base é escondida por CSS (quadro 16:9, alinhado ao topo). |
| `loja-cidade-jardim.jpg` | https://static.wixstatic.com/media/d72874_a930852cc9d84a1fbaa9673d0f24fae8~mv2.jpg | /lojas | Quiosque. Mesmo tratamento da legenda. |


## Catálogo (`public/img/produtos/`)

Fotos da página /produtos, baixadas do site oficial em 27/11/2026 pelo mesmo script, com no máximo 1200 px no lado maior. Origem:
`https://static.wixstatic.com/media/d72874_<id>~mv2.jpg` (os ids estão em `scripts/download-images.mjs`).
Os sete produtos que já tinham foto acima (brigadeiro no palito, pistache no palito, bombom brigadeiro,
Gran Gelato leite cremoso, sorbet de manga, pistache em massa e caixa com 12 palitos) reaproveitam o arquivo existente.

| Página de origem | Arquivos |
|---|---|
| /gelatonopalito | `palito-*.jpg` (10) |
| /bombons | `bombom-*.jpg` (8) |
| /grangelato | `gran-*.jpg` (3) |
| /gelatomassa | `massa-*.jpg` (2) |
| /presentes | `presente-*.jpg` (3) |

Ícones de redes sociais (Instagram, YouTube, Facebook, Pinterest): glifos do Simple Icons (https://simpleicons.org, licença CC0), embutidos em `src/components/ui/SocialIcon.tsx`. As marcas pertencem às respectivas empresas.

Instagram: ainda sem imagens. Se forem adicionadas em `public/img/instagram/`, registre a origem aqui.
