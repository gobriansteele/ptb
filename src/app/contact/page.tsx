"use client";

import { useState } from "react";

const services = [
  "Select a service",
  "Flooring & Tile Work",
  "Landscaping & Outdoor",
  "General Repairs",
  "Minor Plumbing",
  "Minor Electrical",
  "Carpentry & Woodwork",
  "Assembly & Installation",
  "Seasonal & More",
  "Other (I'll describe it)",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipCode: "",
    service: "",
    description: "",
  });
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          zipCode: formData.zipCode,
          service: formData.service,
          message: `Service: ${formData.service}\n\nProject Description:\n${formData.description}`,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setFormData({
        name: "",
        phone: "",
        email: "",
        zipCode: "",
        service: "",
        description: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-navy text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-gold mb-4">
              Get a Free Estimate
            </h1>
            <p className="text-lg text-foreground/70">
              Tell us about your project and Phil will get back to you within one business day.
            </p>
          </div>
        </section>

        {/* Contact Info Bar */}
        <section className="px-4 py-10 bg-navy-light">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-wider text-gold/80 mb-2">
                  Call Anytime
                </p>
                <a
                  href="tel:612-240-6854"
                  className="text-xl font-bold text-foreground hover:text-gold transition-colors block"
                >
                  612-240-6854
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-wider text-gold/80 mb-2">
                  Email
                </p>
                <a
                  href="mailto:phil@philthebuilderandfriends.com"
                  className="text-sm text-foreground hover:text-gold transition-colors block overflow-hidden text-ellipsis"
                >
                  phil@philthebuilderandfriends.com
                </a>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs uppercase tracking-wider text-gold/80 mb-2">
                  Fully Insured
                </p>
                <p className="text-foreground">✓ General Liability</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="px-4 py-16 bg-background max-w-2xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-gold mb-2">
              Tell Us About Your Project
            </h2>
            <p className="text-foreground/60 text-sm">
              Free estimate · No obligation · Usually responds within 24 hours
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
                Estimate Request Sent
              </h2>

              <p className="success-subtext text-sm text-foreground/50 mb-4">
                Thanks! Phil will review your project details and get back to you within one business day.
              </p>

              <div className="success-divider mx-auto w-12 h-px bg-gold/30 my-6" />

              <p className="text-sm text-foreground/60 mb-6">
                In the meantime, feel free to call anytime:
              </p>

              <a
                href="tel:612-240-6854"
                className="inline-block px-6 py-2 bg-gold text-navy font-semibold uppercase tracking-wider rounded hover:bg-gold-light transition-colors mb-4"
              >
                612-240-6854
              </a>

              <button
                onClick={() => setStatus("idle")}
                className="success-cta text-sm text-gold/70 hover:text-gold transition-colors uppercase tracking-wider cursor-pointer block mx-auto mt-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-navy-light/50 border border-gold/10 rounded-lg p-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* ZIP Code */}
              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  ZIP Code *
                </label>
                <input
                  id="zipCode"
                  type="text"
                  required
                  value={formData.zipCode}
                  onChange={(e) =>
                    setFormData({ ...formData, zipCode: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 transition-colors"
                  placeholder="55402"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  Type of Service *
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 transition-colors cursor-pointer"
                >
                  {services.map((service) => (
                    <option key={service} value={service} disabled={service === "Select a service"}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-xs font-medium uppercase tracking-wider text-gold/80 mb-1.5"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full rounded border border-gold/20 bg-navy px-3 py-2.5 text-sm text-foreground outline-none focus:border-gold/60 focus:ring-1 focus:ring-gold/30 placeholder:text-foreground/30 resize-none transition-colors"
                  placeholder="Tell us about your project. What needs to be fixed or built? Any specific details we should know?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded bg-gold px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-navy transition-colors hover:bg-gold-light disabled:opacity-50 cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Request Free Estimate"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try calling 612-240-6854 directly.
                </p>
              )}

              <p className="text-xs text-foreground/50 text-center">
                Your information is safe with us. Phil will only use it to contact you about your estimate.
              </p>
            </form>
          )}
        </section>

        {/* Service Area Section */}
        <section className="px-4 py-12 bg-navy-light">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-bold uppercase tracking-widest text-gold mb-4">
              Service Area
            </h3>
            <p className="text-foreground/70 mb-4">
              We serve South Minneapolis, Richfield, Bloomington, and Edina, generally within 5-10 miles.
            </p>
            <p className="text-sm text-foreground/60">
              Don&apos;t see your area? Reach out anyway — we may be able to help!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
