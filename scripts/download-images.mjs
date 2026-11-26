// Baixa as imagens do protótipo (design/assets.md) para public/img/.
// Wix: URL original, sem os parâmetros /v1/fill/... · Pinterest: /originals/.
// Uso: pnpm images   (pula arquivos que já existem; --force para baixar de novo)
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Lado maior máximo e qualidade do JPEG salvo. O next/image gera AVIF/WebP a partir daqui.
const MAX = 2400;
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
  ["loja-cidade-jardim.jpg", WIX + "d72874_a930852cc9d84a1fbaa9673d0f24fae8~mv2.jpg"],
];

const out = path.resolve("public/img");
const force = process.argv.includes("--force");
await mkdir(out, { recursive: true });

for (const [name, url] of images) {
  const file = path.join(out, name);
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
  // rotate() aplica a orientação do EXIF; os metadados (EXIF/GPS) não são gravados.
  const buf = await sharp(Buffer.from(await res.arrayBuffer()))
    .rotate()
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();
  await writeFile(file, buf);
  console.log(`+ ${name}`);
}
