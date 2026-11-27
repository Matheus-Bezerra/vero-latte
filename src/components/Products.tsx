import { products, productsSection } from "@/data/products";
import { Kicker } from "./ui/Kicker";
import { Reveal } from "./ui/Reveal";
import { ProductShowcase } from "./ProductShowcase";
import { ProductRail } from "./ProductRail";

export function Products() {
  return (
    <section className="sec" id="produtos" aria-labelledby="prod-t">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <Kicker>{productsSection.kicker}</Kicker>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 id="prod-t">{productsSection.title}</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p>{productsSection.intro}</p>
          </Reveal>
        </div>
        <ProductShowcase products={products} />
        <ProductRail products={products} label={productsSection.railLabel} />
      </div>
    </section>
  );
}
