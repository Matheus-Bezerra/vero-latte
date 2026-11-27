"use client";

import { useState, type FormEvent } from "react";
import { newsletter, type NewsChannel } from "@/data/newsletter";
import { formatBrMobile, isBrMobile } from "@/lib/phone";
import { FormSuccess } from "./ui/FormSuccess";

/** Demonstração: valida, simula o envio e confirma. Nada sai do navegador. */
export function NewsletterForm() {
  const [channel, setChannel] = useState<NewsChannel>("email");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<{ channel: NewsChannel; value: string } | null>(null);
  const c = newsletter.channels[channel];

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const v = value.trim();
    const ok = channel === "whats" ? isBrMobile(v) : /^\S+@\S+\.\S+$/.test(v);
    if (!ok) {
      setError(c.error);
      return;
    }
    setError(null);
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setDone({ channel, value: v });
    setValue("");
  };

  if (done) {
    return (
      <FormSuccess
        title={newsletter.success.title}
        text={newsletter.success[done.channel](done.value)}
        actionLabel={newsletter.success.again}
        onAction={() => setDone(null)}
      />
    );
  }

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
                setError(null);
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
          maxLength={channel === "whats" ? 15 : undefined}
          placeholder={c.placeholder}
          required
          value={value}
          onChange={(e) => setValue(channel === "whats" ? formatBrMobile(e.target.value) : e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby="newsMsg"
        />
        <button className="btn btn-choc" type="submit" disabled={sending} aria-busy={sending}>
          {sending ? newsletter.sending : newsletter.submit}
        </button>
      </div>
      <p className={`form-msg ${error ? "err" : ""}`} id="newsMsg" role="status">
        {error}
      </p>
    </form>
  );
}
