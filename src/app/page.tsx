import { HeroBox } from "@/components/HeroBox";
import { MobileActionBar } from "@/components/MobileActionBar";
import { NavPill } from "@/components/NavPill";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <>
      <NavPill />
      <main id="conteudo" tabIndex={-1}>
        <HeroBox />
        <Products />
      </main>
      <MobileActionBar />
    </>
  );
}
