import { gallery, ingredients } from "@/data/ingredients";
import { IngredientsGallery } from "./IngredientsGallery";
import { Kicker } from "./ui/Kicker";

export function Ingredients() {
  return (
    <section className="sec ingr" id="experiencia" aria-labelledby="ingr-t">
      <div className="wrap ingr-grid">
        <div className="ingr-text">
          <Kicker>{ingredients.kicker}</Kicker>
          <h2 id="ingr-t">{ingredients.title}</h2>
          <p>{ingredients.text}</p>
          <dl className="ingr-list">
            {ingredients.list.map((item) => (
              <div key={item.term}>
                <dt>{item.term}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <IngredientsGallery items={gallery} />
      </div>
    </section>
  );
}
