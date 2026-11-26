import { HeroBox } from "@/components/HeroBox";
import { MobileActionBar } from "@/components/MobileActionBar";
import { NavPill } from "@/components/NavPill";

export default function Home() {
  return (
    <>
      <NavPill />
      <main id="conteudo" tabIndex={-1}>
        <HeroBox />
      </main>
      <MobileActionBar />
    </>
  );
}
