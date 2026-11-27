import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/images";
import { footer, site } from "@/data/site";
import { headquarters, phoneMain, policies, socials, whatsappMain } from "@/data/contacts";
import { ExternalLink } from "./ui/ExternalLink";
import { Reveal } from "./ui/Reveal";
import { SocialIcon } from "./ui/SocialIcon";
import { PopsiclePattern } from "./ui/PopsiclePattern";

export function Footer() {
  return (
    <footer className="footer">
      <Reveal className="wrap foot-grid">
        <div className="foot-brand">
          <Image src={logo} alt={site.logoAlt} sizes="150px" />
          <p>{footer.tagline}</p>
          <ul className="socials">
            {socials.map((s) => (
              <li key={s.network}>
                <ExternalLink href={s.href} aria-label={s.label}>
                  <SocialIcon network={s.network} />
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-labelledby="foot-nav">
          <h2 id="foot-nav">{footer.navTitle}</h2>
          <ul>
            {footer.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2>{footer.serviceTitle}</h2>
          <address>
            {headquarters.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <br />
            <a href={phoneMain.href}>{phoneMain.display}</a>
            <br />
            <ExternalLink href={whatsappMain.href}>
              {whatsappMain.label} {whatsappMain.display}
            </ExternalLink>
          </address>
        </div>
        <div>
          <h2>{footer.infoTitle}</h2>
          <ul>
            {policies.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <div className="wrap foot-bottom">
        <span>
          <strong>{footer.disclaimer}</strong> {footer.rights}
        </span>
        <span>{footer.credit}</span>
      </div>
      <PopsiclePattern className="foot-strip" />
    </footer>
  );
}
