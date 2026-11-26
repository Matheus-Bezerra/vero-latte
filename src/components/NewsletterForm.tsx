"use client";

import { useState, type FormEvent } from "react";
import { newsletter, type NewsChannel } from "@/data/newsletter";

/** Demonstração: valida e responde, mas nada é enviado. */
export function NewsletterForm() {
  const [channel, setChannel] = useState<NewsChannel>("email");
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState<{ text: string; error: boolean } | null>(null);
  const c = newsletter.channels[channel];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    const ok = channel === "whats" ? v.replace(/\D/g, "").length >= 10 : /^\S+@\S+\.\S+$/.test(v);
    setMsg({ text: ok ? newsletter.success : c.error, error: !ok });
    if (ok) setValue("");
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <fieldset className="seg">
        <legend className="sr-only">{newsletter.groupLabel}</legend>
        {(Object.keys(newsletter.channels) as NewsChannel[]).map((key) => (
          <label key={key}>
            <input
              type="radio"
              name="ch"
              value={key}
              checked={channel === key}
              onChange={() => {
                setChannel(key);
                setValue("");
                setMsg(null);
              }}
            />
            <span>{newsletter.channels[key].option}</span>
          </label>
        ))}
      </fieldset>
      <label htmlFor="newsInput" className="sr-only">
        {c.label}
      </label>
      <div className="field">
        <input
          id="newsInput"
          type={c.type}
          autoComplete={c.autoComplete}
          inputMode={channel === "whats" ? "tel" : "email"}
          placeholder={c.placeholder}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={msg?.error || undefined}
          aria-describedby="newsMsg"
        />
        <button className="btn btn-choc" type="submit">
          {newsletter.submit}
        </button>
      </div>
      <p className={`form-msg ${msg?.error ? "err" : ""}`} id="newsMsg" role="status">
        {msg?.text}
      </p>
    </form>
  );
}
