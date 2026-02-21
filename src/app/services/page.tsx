"use client";

import { FeaturedServiceCard } from "@/components/FeaturedServiceCard";
import { ServiceCard } from "@/components/ServiceCard";
import { services, serviceAreas } from "@/data/services";

const featuredServices = services.filter((s) => s.isTopService);
const allServices = services.filter((s) => !s.isTopService);

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-navy text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-gold mb-4">
              Our Services
            </h1>
            <p className="text-lg text-foreground/70">
              From minor repairs to major projects, Phil handles it all.
            </p>
            <p className="text-foreground/60 text-sm mt-3">
              No project too big or too small
            </p>
          </div>
        </section>

        {/* Featured Specialties */}
        <section className="px-4 py-16 bg-background max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-gold mb-4">
              Our Specialties
            </h2>
            <div className="mx-auto w-16 h-px bg-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredServices.map((service) => (
              <FeaturedServiceCard key={service.name} service={service} size="lg" />
            ))}
          </div>

          {/* All Services Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground uppercase tracking-widest mb-8">
              All Services
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {allServices.map((service) => (
                <ServiceCard key={service.name} service={service} size="lg" />
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="px-4 py-16 bg-navy-light/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h3 className="text-xl font-bold text-gold uppercase tracking-widest mb-4">
                  Our Approach
                </h3>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    <span>Free, in-person estimates — no obligation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    <span>Fair pricing with no surprise charges</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    <span>Shows up on time, cleans up after the job</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold">✓</span>
                    <span>Fully insured for your protection</span>
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h3 className="text-xl font-bold text-gold uppercase tracking-widest mb-4">
                  Service Area
                </h3>
                <p className="text-foreground/70 mb-4">
                  We proudly serve:
                </p>
                <ul className="space-y-2 text-foreground/60 mb-6">
                  {serviceAreas.map((area) => (
                    <li key={area} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/60">
                  Generally within 5-10 miles. Don&apos;t see your area? Reach out anyway — we may be able to help!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-background max-w-4xl mx-auto">
          <div className="bg-navy-light/50 border border-gold/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-gold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Have a project in mind? Get your free estimate from Phil today. No obligation, no surprises — just honest, quality work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-gold text-navy font-semibold uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Get a Free Estimate
              </a>
              <a
                href="tel:612-240-6854"
                className="px-8 py-3 border-2 border-gold text-gold font-semibold uppercase tracking-wider rounded hover:bg-gold/10 transition-colors"
              >
                Call: 612-240-6854
              </a>
            </div>
          </div>
        </section>

        {/* FAQ-style Section */}
        <section className="px-4 py-16 bg-navy-light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gold uppercase tracking-widest mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  Do you offer free estimates?
                </h3>
                <p className="text-foreground/70">
                  Yes! Phil will come to you, assess the project in person, and give you a straight answer — no commitment required before any work begins.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  Is there a minimum charge?
                </h3>
                <p className="text-foreground/70">
                  No. Phil charges only for actual work time. Got a quick fix? He&apos;ll come out for a 15-minute job and only charge you for that.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  Do you work nights and weekends?
                </h3>
                <p className="text-foreground/70">
                  Absolutely. Phil works around your schedule — daytime, evenings, and weekends.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  Do you offer emergency service?
                </h3>
                <p className="text-foreground/70">
                  Yes. If a branch goes through your window at 2 AM during a storm, call Phil.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  What about larger projects?
                </h3>
                <p className="text-foreground/70">
                  For bigger jobs, Phil provides a detailed written proposal so you know exactly what&apos;s happening, when, and for how much — before any work begins.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-3">
                  What if the job is outside your scope?
                </h3>
                <p className="text-foreground/70">
                  For work that falls outside our expertise — like major electrical, plumbing, or roofing — we&apos;ll refer you to trusted local specialists so the job still gets done right.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
