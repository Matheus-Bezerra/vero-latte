// Baixa as imagens do protótipo (design/assets.md) para public/img/.
// Wix: URL original, sem os parâmetros /v1/fill/... · Pinterest: /originals/.
// Uso: pnpm images   (pula arquivos que já existem; --force para baixar de novo)
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Lado maior máximo e qualidade do JPEG salvo. O next/image gera AVIF/WebP a partir daqui.
const MAX = 2400;
// Fotos do catálogo aparecem com no máximo ~440 px; 1200 px cobre telas 2x com folga.
const MAX_CATALOG = 1200;
const QUALITY = 85;

const WIX = "https://static.wixstatic.com/media/";
const PIN = "https://i.pinimg.com/originals/";

export const images = [
  ["hero-palito-goiabada.jpg", WIX + "d72874_09cff18fc9e14fef94b9a442b3e85365~mv2.jpg"],
  ["produto-palito-brigadeiro.jpg", WIX + "d72874_027ceb30c1e24ccea34b6a4a4eb44812~mv2.jpg"],
  ["produto-bombom.jpg", WIX + "d72874_eb5cb1972cb0489892d2369d4b59c94f~mv2.jpg"],
  ["produto-gran-gelato.jpg", WIX + "d72874_b007a5feaeaf49abbd02f6b5553de403~mv2.jpg"],
  ["produto-massa-pistache.jpg", WIX + "d72874_69d82e9bfc024c3a9623ae3fae983f5b~mv2.jpg"],
  ["produto-caixa-presente.jpg", WIX + "d72874_dab49ca91f194293843b7b41f7441677~mv2.jpeg"],
  ["ingrediente-cobertura-chocolate.jpg", WIX + "d72874_3eb1a53d350b4bd3b0e8a544e78b8175~mv2.jpg"],
  ["ingrediente-sorbet-manga.jpg", WIX + "d72874_44c2fba17fc84e76a2946d0a20ab792f~mv2.jpg"],
  ["ingrediente-pistache.jpg", WIX + "d72874_7159c9230c9b49b68ecc4f8376488bf9~mv2.jpg"],
  ["pinterest-cafe-ou-gelato.jpg", PIN + "7d/14/98/7d1498b4f99b9a2970892400215a6ace.jpg"],
  ["pinterest-cheesecake-goiabada.jpg", PIN + "40/c1/12/40c112e99c6cd8796465a631bcc19ed7.jpg"],
  ["pinterest-affogato.jpg", PIN + "40/da/ae/40daae82c5914f6f582f10a2060bc000.jpg"],
  ["historia-mariana-galvao.jpg", WIX + "d72874_8c20db7632034058b46295a92a0ca80c~mv2.jpeg"],
  ["eventos-carrinho.jpg", WIX + "d72874_984c520eb1f3437a89d63aa1c6fe35d8~mv2.jpeg"],
  ["eventos-bandeja-gelo-seco.jpg", WIX + "d72874_61b5b9634f2845f1813928be62fc464c~mv2.jpg"],
  ["loja-campo-belo.jpg", WIX + "d72874_aa9ac2dd0de94a3ab6f8d06648eb2b2d~mv2.jpg"],
  ["loja-cidade-jardim.jpg", WIX + "d72874_a930852cc9d84a1fbaa9673d0f24fae8~mv2.jpg"], // Catálogo da página /produtos (fotos que ainda não estavam acima).
  ...[
    ["palito-capim-limao", "e61821edc5754969bddaef7ef559c0c7"],
    ["palito-baunilha", "9bc394d055ac47068eff98da428aa675"],
    ["palito-pacoca", "c9ec2276d05844629ae245d378015b17"],
    ["palito-coco-cocada", "ceb3623e19a54afd904cf5864d494fbd"],
    ["palito-cheesecake-goiabada", "8f6f56e0dd114af7ac4eec26da70b21e"],
    ["palito-gianduia", "eb2fc237a73e41fea21b745bea0bc9ce"],
    ["palito-torta-limao", "df300404f5c54094ab502bb5202125a2"],
    ["palito-morango", "7bb16a6856f9416fb54c5f6d3f8452bc"],
    ["palito-doce-de-leite", "bea947f6368b4c26acaf90450266c02a"],
    ["palito-banana-caramelizada", "460eec17364f4fb5953f3e5ce76ebf32"],
    ["bombom-pacoca", "031a26a3619745f19deaf8d875b1c9f0"],
    ["bombom-baunilha", "2a3b4c24427c45cd862a6b833bf64ed3"],
    ["bombom-banana-caramelizada", "e7072f2520db42c0a8754d238e013877"],
    ["bombom-coco-cocada", "54d43e09998940f5ba6c4960db50658a"],
    ["bombom-capim-limao", "7c31d9567a7043319aa263dc22e4af9b"],
    ["bombom-pistache", "aab1ad09eb574959a6cb09e69a79382b"],
    ["bombom-morango", "045f4eef27e343648654dbc425784bc4"],
    ["bombom-zero-lactose", "16537444fb3f479d9a196ed100e96e40"],
    ["gran-cheesecake", "8c13954770834176b6c6cb8a45188e04"],
    ["gran-nocciola", "562a152a42694a31b6e6eaebc8ef2031"],
    ["gran-pistache", "e92165f6290442c2b66f581bce692377"],
    ["massa-chocolate-noir", "00b43cd4bf6f47c2a724bd76e565e6c3"],
    ["massa-doce-de-leite", "1ae9dde0b42849ba9ff55b38d0ff9a73"],
    ["presente-4-latas-pequenas", "df16b08700b24e09bf75d6f60bc1ed9e", "jpeg"],
    ["presente-kit-bolsa-termica", "4a70deccde2b4a8586171394575b2880"],
    ["presente-4-latas-grandes", "8acf3c686f1e435591726d362c409caf", "jpeg"],
  ].map(([name, id, ext = "jpg"]) => [`produtos/${name}.jpg`, `${WIX}d72874_${id}~mv2.${ext}`]),
];

const out = path.resolve("public/img");
const force = process.argv.includes("--force");
await mkdir(out, { recursive: true });

for (const [name, url] of images) {
  const file = path.join(out, name);
  await mkdir(path.dirname(file), { recursive: true });
  if (!force) {
    try {
      await access(file);
      console.log(`= ${name}`);
      continue;
    } catch {}
  }
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!res.ok) {
    console.error(`! ${name}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  const type = res.headers.get("content-type") ?? "";
  if (!type.startsWith("image/")) {
    console.error(`! ${name}: tipo inesperado ${type}`);
    process.exitCode = 1;
    continue;
  }
  const max = name.startsWith("produtos/") ? MAX_CATALOG : MAX;
  // rotate() aplica a orientação do EXIF; os metadados (EXIF/GPS) não são gravados.
  const buf = await sharp(Buffer.from(await res.arrayBuffer()))
    .rotate()
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();
  await writeFile(file, buf);
  console.log(`+ ${name}`);
}
