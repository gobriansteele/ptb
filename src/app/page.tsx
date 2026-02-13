"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <main className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold uppercase tracking-widest text-gold mb-1">
            Phil The Builder
          </h1>
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-4">
            And Friends
          </p>
          <div className="mx-auto w-16 h-px bg-gold" />
          <p className="text-foreground/50 text-sm mt-4">
            Get in touch — we&apos;d love to hear from you.
          </p>
        </div>

        {status === "sent" ? (
          <div className="success-card bg-navy-light/50 border border-gold/20 rounded-lg p-8 text-center">
            <svg
              className="mx-auto mb-6"
              width="64"
              height="64"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="1.5"
              />
              <path
                className="checkmark-check"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 27l7 7 15-16"
              />
            </svg>

            <h2 className="success-heading text-xl font-semibold uppercase tracking-widest text-gold mb-2">
              Message Sent
            </h2>

            <p className="success-subtext text-sm text-foreground/50">
              Thanks for reaching out — we&apos;ll be in touch soon.
            </p>

            <div className="success-divider mx-auto w-12 h-px bg-gold/30 my-6" />

            <button
              onClick={() => setStatus("idle")}
              className="success-cta text-sm text-gold/70 hover:text-gold transition-colors uppercase tracking-wider cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-navy-light/50 border border-gold/10 rounded-lg p-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 resize-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded bg-gold px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-light disabled:opacity-50 cursor-pointer"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-400 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </main>
    </div>
  );
}
