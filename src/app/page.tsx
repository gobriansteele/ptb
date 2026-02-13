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
            className="w-full rounded bg-gold px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-light disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-400 text-center">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
