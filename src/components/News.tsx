import { contactSection } from "@/data/contactForm";
import { newsletter } from "@/data/newsletter";
import { ContactForm } from "./ContactForm";
import { NewsletterForm } from "./NewsletterForm";
import { ExternalLink } from "./ui/ExternalLink";
import { Kicker } from "./ui/Kicker";

export function News() {
  return (
    <section className="sec news" id="contato" aria-labelledby="contato-t">
      <div className="wrap contact-grid">
        <div>
          <Kicker>{contactSection.kicker}</Kicker>
          <h2 id="contato-t">{contactSection.title}</h2>
          <p>{contactSection.text}</p>
          <h3 className="contact-direct-t">{contactSection.directTitle}</h3>
          <ul className="contact-direct">
            {contactSection.direct.map((d) => (
              <li key={d.label}>
                <span>{d.label}</span>
                {d.external ? (
                  <ExternalLink href={d.href}>{d.display}</ExternalLink>
                ) : (
                  <a href={d.href}>{d.display}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
      <div className="wrap news-grid news-sub">
        <div>
          <Kicker>{newsletter.kicker}</Kicker>
          <h3 id="news-t">{newsletter.title}</h3>
          <p>{newsletter.text}</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}
