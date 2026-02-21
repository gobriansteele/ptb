"use client";

const topServices = [
  { name: "Flooring & Tile Work", icon: "🏠", highlight: true },
  { name: "Landscaping & Outdoor", icon: "🌳", highlight: true },
  { name: "General Repairs", icon: "🔧" },
  { name: "Minor Plumbing", icon: "🚰" },
  { name: "Minor Electrical", icon: "💡" },
  { name: "Carpentry & Woodwork", icon: "🪵" },
  { name: "Assembly & Installation", icon: "📦" },
  { name: "Seasonal & More", icon: "📅" },
];

const testimonials = [
  {
    text: "Phil did excellent work on our bathroom. Very professional and clean. Highly recommend!",
    name: "Sarah M.",
    neighborhood: "South Minneapolis",
  },
  {
    text: "Fixed my leaky faucet quickly and didn't overcharge. Great guy, fair prices!",
    name: "Mike R.",
    neighborhood: "Richfield",
  },
  {
    text: "Phil showed up on time, did quality work, and actually cleaned up after himself. Rare!",
    name: "Jennifer K.",
    neighborhood: "Edina",
  },
];

const serviceAreas = ["South Minneapolis", "Richfield", "Bloomington", "Edina"];

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

          {/* Featured Specialties */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {topServices.filter((s) => s.highlight).map((service) => (
              <div
                key={service.name}
                className="bg-gold/10 border-2 border-gold/50 rounded-lg p-6 hover:bg-gold/20 transition-colors"
              >
                <div className="text-5xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg text-gold uppercase tracking-wider mb-2">
                  {service.name}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {service.name === "Flooring & Tile Work"
                    ? "Hardwood, laminate, vinyl plank, tile repair, kitchen backsplashes, shower surrounds, and bathroom tile. This is what Phil is known for."
                    : "Patios, walkways, retaining walls, sod, deck repair, fences, gutter cleaning, and pressure washing."}
                </p>
              </div>
            ))}
          </div>

          {/* All Services Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-widest mb-6">
              All Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {topServices.filter((s) => !s.highlight).map((service) => (
                <div
                  key={service.name}
                  className="bg-navy-light/50 border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gold text-sm uppercase tracking-wider">
                        {service.name}
                      </h4>
                      <p className="text-foreground/60 text-xs mt-1">
                        {service.name === "General Repairs"
                          ? "Drywall, doors, locks, caulking, weatherstripping, doorbells"
                          : service.name === "Minor Plumbing"
                          ? "Faucets, toilets, drains, showerheads, garbage disposals"
                          : service.name === "Minor Electrical"
                          ? "Light fixtures, ceiling fans, outlets, switches, dimmers, recessed lighting"
                          : service.name === "Carpentry & Woodwork"
                          ? "Shelving, trim, molding, railings, cabinets, door frames, wood rot repair"
                          : service.name === "Assembly & Installation"
                          ? "TV mounting, curtain rods, blinds, mirrors, bathroom hardware"
                          : "Lawn care, snow removal, holiday lights, junk removal, aging-in-place modifications, pre-sale touch-ups, rental turnover"}
                      </p>
                    </div>
                  </div>
                </div>
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
