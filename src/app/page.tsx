"use client";

import { FeaturedServiceCard } from "@/components/FeaturedServiceCard";
import { ServiceCard } from "@/components/ServiceCard";
import { services, serviceAreas } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-navy text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-widest text-gold mb-2">
              Phil The Builder
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mb-6">
              And Friends
            </p>
            <div className="mx-auto w-20 h-px bg-gold mb-8" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Your Trusted Handyman in the South Metro
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Helping to make your projects a dream come true
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:612-240-6854"
                className="inline-block px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Call Now: 612-240-6854
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 border-2 border-gold text-gold font-semibold uppercase tracking-wider rounded hover:bg-gold/10 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="px-4 py-8 bg-navy-light text-center">
          <p className="text-sm uppercase tracking-wider text-gold mb-3">Service Area</p>
          <p className="text-foreground text-lg">
            {serviceAreas.join(" • ")}
          </p>
        </section>

        {/* Services */}
        <section className="px-4 py-16 bg-background max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-gold mb-2">
              Our Specialties
            </h2>
            <p className="text-foreground/60 text-sm mb-6">No project too big or too small</p>
            <div className="mx-auto w-16 h-px bg-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.filter((s) => s.isTopService).map((service) => (
              <FeaturedServiceCard key={service.name} service={service} />
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-widest mb-6">
              All Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.filter((s) => !s.isTopService).map((service) => (
                <ServiceCard key={service.name} service={service} />
              ))}
            </div>
          </div>

          {/* Don't See Your Project CTA */}
          <div className="bg-navy-light/50 border border-gold/20 rounded-lg p-8 text-center">
            <h4 className="text-lg font-bold text-foreground uppercase tracking-widest mb-3">
              Don&apos;t See Your Project?
            </h4>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Phil has been fixing and building things his whole life. If it&apos;s in or around your home, chances are he can help. Reach out and ask — the estimate is free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-6 py-2 bg-gold text-navy font-semibold uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Get a Free Estimate →
              </a>
              <a
                href="tel:612-240-6854"
                className="text-gold font-semibold hover:text-gold-light transition-colors"
              >
                612-240-6854
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 bg-navy-light/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-gold mb-4">
                What Customers Say
              </h2>
              <div className="mx-auto w-16 h-px bg-gold" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-navy/50 border border-gold/20 rounded-lg p-6"
                >
                  <p className="text-foreground/80 mb-4 italic">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="border-t border-gold/20 pt-4">
                    <p className="font-semibold text-gold text-sm uppercase">
                      {testimonial.name}
                    </p>
                    <p className="text-foreground/60 text-xs">
                      {testimonial.neighborhood}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
