import { newsletter } from "@/data/newsletter";
import { NewsletterForm } from "./NewsletterForm";
import { Kicker } from "./ui/Kicker";

export function News() {
  return (
    <section className="sec news" id="contato" aria-labelledby="news-t">
      <div className="wrap news-grid">
        <div>
          <Kicker>{newsletter.kicker}</Kicker>
          <h2 id="news-t">{newsletter.title}</h2>
          <p>{newsletter.text}</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
