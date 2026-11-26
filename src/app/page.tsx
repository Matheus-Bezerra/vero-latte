import { HeroBox } from "@/components/HeroBox";
import { MobileActionBar } from "@/components/MobileActionBar";
import { NavPill } from "@/components/NavPill";
import { Products } from "@/components/Products";
import { Ingredients } from "@/components/Ingredients";
import { Manifesto } from "@/components/Manifesto";
import { FounderStory } from "@/components/FounderStory";
import { Events } from "@/components/Events";
import { Stores } from "@/components/Stores";
import { News } from "@/components/News";

export default function Home() {
  return (
    <>
      <NavPill />
      <main id="conteudo" tabIndex={-1}>
        <HeroBox />
        <Products />
        <Ingredients />
        <Manifesto />
        <FounderStory />
        <Events />
        <Stores />
        <News />
      </main>
      <MobileActionBar />
    </>
  );
}
