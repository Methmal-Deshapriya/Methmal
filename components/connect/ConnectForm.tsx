"use client";

import { useState } from "react";

import { sendContactEmail } from "@/app/actions/contact";

type FormState = "idle" | "loading" | "success" | "error";

const labelClass =
  "mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-muted-soft)]";

const inputClass =
  "w-full border-b border-[rgba(119,117,134,0.18)] bg-transparent px-0 py-3 text-base text-[var(--editorial-foreground)] placeholder:text-[rgba(119,117,134,0.52)] transition-colors duration-200 focus:border-[var(--editorial-primary)] focus:outline-none";

export function ConnectForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const result = await sendContactEmail({
      name: (data.get("name") as string) ?? "",
      email: (data.get("email") as string) ?? "",
      subject: (data.get("subject") as string) ?? "",
      message: (data.get("message") as string) ?? "",
    });

    if (result.success) {
      setState("success");
      form.reset();
      return;
    }

    setState("error");
    setErrorMsg(result.error ?? "Something went wrong.");
  }

  if (state === "success") {
    return (
      <div className="editorial-panel-strong rounded-[28px] p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(94,92,230,0.08)]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3.5 9l3.2 3.2L14.5 4.5"
              stroke="#5E5CE6"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-hanken text-2xl font-semibold tracking-[-0.04em] text-[var(--editorial-foreground)]">
          Message sent.
        </h3>
        <p className="mt-3 max-w-md text-base leading-7 text-[var(--editorial-muted)]">
          Thanks for reaching out. I&apos;ll review it and get back to you as
          soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--editorial-primary)] transition-opacity hover:opacity-70"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="connect-name" className={labelClass}>
            Your name
          </label>
          <input
            id="connect-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="connect-email" className={labelClass}>
            Email address <span className="text-[var(--editorial-primary)]">*</span>
          </label>
          <input
            id="connect-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="connect-subject" className={labelClass}>
          Subject
        </label>
        <input
          id="connect-subject"
          name="subject"
          type="text"
          placeholder="Project inquiry / collaboration"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="connect-message" className={labelClass}>
          Message <span className="text-[var(--editorial-primary)]">*</span>
        </label>
        <textarea
          id="connect-message"
          name="message"
          required
          rows={5}
          placeholder="Briefly describe what you are building, the context, and how I can help."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-500">{errorMsg}</p>
      ) : null}

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[var(--editorial-muted)]">
          Usually replies within one to two business days.
        </p>
        <button
          type="submit"
          disabled={state === "loading"}
          className="editorial-button-primary min-w-44 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "loading" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
