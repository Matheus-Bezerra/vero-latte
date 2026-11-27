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
      <svg className="form-success-icon" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2" />
        <path
          d="M14 25l7 7 13-15"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
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
