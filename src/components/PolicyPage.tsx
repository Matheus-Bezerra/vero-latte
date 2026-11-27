import { headquarters, hours, phoneMain, whatsappMain } from "@/data/contacts";
import { policyLabels, type PolicyPage as PolicyContent } from "@/data/policies";
import { ExternalLink } from "./ui/ExternalLink";
import { Kicker } from "./ui/Kicker";
import { PageTop } from "./ui/PageTop";

export function PolicyPage({ page }: { page: PolicyContent }) {
  return (
    <>
      <PageTop />
      <main id="conteudo" tabIndex={-1} className="policy">
        <div className="wrap policy-grid">
          <div className="policy-head">
            <Kicker>{page.kicker}</Kicker>
            <h1>{page.title}</h1>
          </div>
          <div className="policy-body">
            {page.sections.map((s) => (
              <section key={s.id} aria-labelledby={`${s.id}-t`}>
                <h2 id={`${s.id}-t`}>{s.title}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </section>
            ))}
            <section aria-labelledby="policy-contact-t" className="policy-contact">
              <h2 id="policy-contact-t">{policyLabels.contactTitle}</h2>
              <dl>
                <div>
                  <dt>{policyLabels.phoneLabel}</dt>
                  <dd>
                    <a href={phoneMain.href}>{phoneMain.display}</a>
                    <br />
                    <ExternalLink href={whatsappMain.href}>
                      {whatsappMain.label} {whatsappMain.display}
                    </ExternalLink>
                  </dd>
                </div>
                <div>
                  <dt>{policyLabels.addressLabel}</dt>
                  <dd>
                    {headquarters.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>{policyLabels.hoursLabel}</dt>
                  <dd>
                    {hours.map((h) => (
                      <span key={h} className="block">
                        {h}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </section>
            <p className="policy-source">
              {policyLabels.sourceIntro}{" "}
              <ExternalLink href={page.source.href}>{page.source.label}</ExternalLink>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
