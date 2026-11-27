"use client";

import { useEffect, useRef } from "react";

type Props = {
  title: string;
  text: string;
  /** Resumo do que foi enviado: [rótulo, valor]. */
  details?: readonly (readonly [string, string])[];
  actionLabel: string;
  onAction: () => void;
};

/** Confirmação de envio (simulada) que substitui o formulário. Anuncia-se como status. */
export function FormSuccess({ title, text, details, actionLabel, onAction }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Leva o foco ao cartão: quem usa teclado ou leitor de tela não fica perdido
  // quando o formulário some.
  useEffect(() => {
    ref.current?.focus({ preventScroll: false });
  }, []);

  return (
    <div ref={ref} className="form-success" role="status" tabIndex={-1}>
      {/* Selo dourado, como o hot stamping da caixa: aro, picolé e o check de confirmação. */}
      <svg className="form-success-seal" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <circle cx="32" cy="32" r="30" fill="currentColor" />
        <circle
          cx="32"
          cy="32"
          r="25"
          fill="none"
          stroke="var(--color-leite)"
          strokeWidth="1.2"
          strokeDasharray="2 3"
        />
        <rect x="25" y="13" width="14" height="26" rx="7" fill="var(--color-leite)" />
        <rect x="30.5" y="38" width="3" height="10" rx="1.5" fill="var(--color-leite)" />
        <path
          d="M27.5 26l3.5 3.5 6-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3>{title}</h3>
      <p>{text}</p>
      {details?.length ? (
        <dl className="form-success-details">
          {details.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <button type="button" className="btn btn-line" onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );
}
