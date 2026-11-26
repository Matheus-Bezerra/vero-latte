import { products, productsSection } from "@/data/products";
import { Kicker } from "./ui/Kicker";
import { ProductShowcase } from "./ProductShowcase";
import { ProductRail } from "./ProductRail";

export function Products() {
  return (
    <section className="sec" id="produtos" aria-labelledby="prod-t">
      <div className="wrap">
        <div className="sec-head">
          <Kicker>{productsSection.kicker}</Kicker>
          <h2 id="prod-t">{productsSection.title}</h2>
          <p>{productsSection.intro}</p>
        </div>
        <ProductShowcase products={products} />
        <ProductRail products={products} label={productsSection.railLabel} />
      </div>
    </section>
  );
}
