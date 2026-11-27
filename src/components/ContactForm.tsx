"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactForm, MESSAGE_MAX } from "@/data/contactForm";

const f = contactForm.fields;
const subjects = f.subject.options.map((o) => o.value) as [string, ...string[]];

const schema = z.object({
  name: z.string().trim().min(1, f.name.error),
  email: z.email({ error: f.email.error }),
  phone: z
    .string()
    .trim()
    .refine((v) => v === "" || v.replace(/\D/g, "").length >= 10, f.phone.error),
  subject: z.enum(subjects, { error: f.subject.error }),
  message: z.string().trim().min(1, f.message.error).max(MESSAGE_MAX, f.message.tooLong),
});

type Values = z.infer<typeof schema>;
type Field = keyof Values;

/** Simula o envio: espera um pouco e confirma. Nada sai do navegador. */
const fakeSend = () => new Promise((r) => setTimeout(r, 900));

export function ContactForm() {
  const uid = useId();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", subject: subjects[0], message: "" },
  });

  const onSubmit = async () => {
    await fakeSend();
    reset(undefined, { keepIsSubmitSuccessful: true });
  };

  const ids = (k: Field) => ({ input: `${uid}-${k}`, err: `${uid}-${k}-err` });
  const a11y = (k: Field, required: boolean) => ({
    id: ids(k).input,
    "aria-required": required || undefined,
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": ids(k).err,
  });

  const label = (k: Field, text: string, required: boolean) => (
    <label htmlFor={ids(k).input}>
      {text}
      {required ? (
        <>
          <span className="cf-req" aria-hidden="true">
            {" "}
            *
          </span>
          <span className="sr-only"> ({contactForm.requiredLabel})</span>
        </>
      ) : (
        <span className="cf-opt"> ({contactForm.optionalLabel})</span>
      )}
    </label>
  );

  /** Espaço sempre reservado: a mensagem de erro não empurra o layout. */
  const error = (k: Field) => (
    <span className="cf-err" id={ids(k).err}>
      {errors[k]?.message}
    </span>
  );

  const msgLen = watch("message")?.length ?? 0;

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="cf-row">
        <div className="cf-field">
          {label("name", f.name.label, true)}
          <input autoComplete={f.name.autoComplete} {...a11y("name", true)} {...register("name")} />
          {error("name")}
        </div>
        <div className="cf-field">
          {label("email", f.email.label, true)}
          <input
            type="email"
            inputMode="email"
            autoComplete={f.email.autoComplete}
            placeholder={f.email.placeholder}
            {...a11y("email", true)}
            {...register("email")}
          />
          {error("email")}
        </div>
      </div>
      <div className="cf-row">
        <div className="cf-field">
          {label("phone", f.phone.label, false)}
          <input
            type="tel"
            inputMode="tel"
            autoComplete={f.phone.autoComplete}
            placeholder={f.phone.placeholder}
            {...a11y("phone", false)}
            {...register("phone")}
          />
          {error("phone")}
        </div>
        <div className="cf-field">
          {label("subject", f.subject.label, true)}
          <select {...a11y("subject", true)} {...register("subject")}>
            {f.subject.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {error("subject")}
        </div>
      </div>
      <div className="cf-field">
        {label("message", f.message.label, true)}
        <textarea rows={5} maxLength={MESSAGE_MAX} {...a11y("message", true)} {...register("message")} />
        <div className="cf-foot">
          {error("message")}
          <span className="cf-count">
            {f.message.counter(msgLen)}
          </span>
        </div>
      </div>
      <div className="cf-actions">
        <button className="btn btn-choc" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? contactForm.sending : contactForm.submit}
        </button>
        <p className="form-msg" role="status">
          {isSubmitSuccessful && !isSubmitting ? contactForm.success : ""}
        </p>
      </div>
    </form>
  );
}
