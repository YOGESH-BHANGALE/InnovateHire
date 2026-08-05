"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import type { ContactFormValues } from "@/lib/site-data";
import { submitContact } from "@/lib/contact";

const initialValues: ContactFormValues = { name: "", email: "", phone: "", projectType: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const update = (key: keyof ContactFormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try { await submitContact(values); setStatus("success"); } catch (submissionError) { setStatus("error"); setError(submissionError instanceof Error ? submissionError.message : "We could not send your signal."); }
  }

  const fields: Array<{ key: keyof ContactFormValues; label: string; type: string; placeholder: string; required?: boolean }> = [
    { key: "name", label: "Your name", type: "text", placeholder: "First and last name", required: true },
    { key: "email", label: "Work email", type: "email", placeholder: "name@company.com", required: true },
    { key: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+91 ..." },
  ];

  return <form aria-label="Project inquiry form" className="space-y-7" onSubmit={handleSubmit} noValidate><div className="grid gap-7 md:grid-cols-2">{fields.map((field) => <label className="group block" key={field.key}><span className="mb-3 block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">{field.label}{field.required ? " *" : ""}</span><input aria-required={field.required} className="w-full border-b border-ink/15 bg-transparent px-0 py-3 text-lg outline-hidden transition placeholder:text-muted/50 focus:border-violet" onChange={(event) => update(field.key, event.target.value)} placeholder={field.placeholder} required={field.required} type={field.type} value={values[field.key]} /></label>)}</div><label className="group block"><span className="mb-3 block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">What are we orbiting? *</span><select aria-required="true" className="w-full border-b border-ink/15 bg-transparent px-0 py-3 text-lg outline-hidden transition focus:border-violet" onChange={(event) => update("projectType", event.target.value)} required value={values.projectType}><option value="">Choose a project type</option><option>Digital product</option><option>Website / portal</option><option>AI workflow</option><option>Brand + growth system</option><option>Something else</option></select></label><label className="group block"><span className="mb-3 block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">A little context *</span><textarea aria-required="true" className="min-h-32 w-full resize-y border-b border-ink/15 bg-transparent px-0 py-3 text-lg outline-hidden transition placeholder:text-muted/50 focus:border-violet" onChange={(event) => update("message", event.target.value)} placeholder="Tell us what needs to move next." required value={values.message} /></label><div className="flex flex-wrap items-center gap-5"><button className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-violet disabled:cursor-wait disabled:opacity-70" disabled={status === "submitting"} type="submit">{status === "submitting" ? <><LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> Sending signal</> : status === "success" ? <><CheckCircle2 aria-hidden="true" className="size-4" /> Signal received</> : <>Send the signal <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></>}</button>{status === "error" ? <p aria-live="polite" className="text-sm text-red-600">{error}</p> : null}{status === "success" ? <p aria-live="polite" className="text-sm text-violet">We’ll get back to you from innovatehive.tech@gmail.com.</p> : null}</div></form>;
}
