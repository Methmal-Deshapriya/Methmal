"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-[rgba(119,117,134,0.18)] bg-white/70 px-4 py-3 text-sm text-[var(--editorial-foreground)] placeholder:text-[var(--editorial-muted-soft)] transition-colors duration-150 focus:border-[rgba(94,92,230,0.38)] focus:outline-none focus:ring-2 focus:ring-[rgba(94,92,230,0.07)]";

const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await sendContactEmail({
      name: (data.get("name") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      message: (data.get("message") as string) ?? "",
    });

    if (result.success) {
      setState("success");
      form.reset();
    } else {
      setState("error");
      setErrorMsg(result.error ?? "Something went wrong.");
    }
  }

  if (state === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center py-10">
        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(94,92,230,0.08)]">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M3 8.5l3.5 3.5 7-7"
              stroke="#5e5ce6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="font-hanken text-xl font-semibold tracking-[-0.03em] text-[var(--editorial-foreground)]">
          Message sent.
        </p>
        <p className="mt-2 text-sm leading-7 text-[var(--editorial-muted)]">
          I&apos;ll get back to you as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-primary)] transition-opacity hover:opacity-60"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email <span className="text-[var(--editorial-primary)]">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message <span className="text-[var(--editorial-primary)]">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          placeholder="What's on your mind?"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-red-500">{errorMsg}</p>
      )}

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="text-xs leading-6 text-[var(--editorial-muted-soft)]">
          Usually replies within a day or two.
        </p>
        <button
          type="submit"
          disabled={state === "loading"}
          className="editorial-button-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-55"
        >
          {state === "loading" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
