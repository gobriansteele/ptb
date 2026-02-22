"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Section 1 - Hero */}
      <section className="bg-navy px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-gold">
              Meet Phil Blackwell
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-foreground/60 mt-2">
              The guy behind Phil The Builder And Friends
            </p>
            <div className="w-16 h-px bg-gold my-6"></div>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Get a Free Estimate →
              </Link>
              <a
                href="tel:612-240-6854"
                className="px-6 py-3 border border-gold text-gold font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors"
              >
                Call: 612-240-6854
              </a>
            </div>
          </div>

          {/* Right Column - Photo */}
          <div>
            <Image
              src="/about_phil.jpeg"
              alt="Phil Blackwell"
              width={500}
              height={480}
              priority
              className="rounded-lg ring-2 ring-gold/30 object-cover w-full"
              style={{ maxHeight: "480px" }}
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Phil's Story */}
      <section className="bg-background px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-gold mb-2">
            Phil's Story
          </h2>
          <div className="w-16 h-px bg-gold mb-10"></div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            I grew up in a little town called Birchdale, about 45 miles west of
            International Falls. If you know anything about northern Minnesota,
            you know it's the kind of place where you learn to fix things —
            because nobody else is coming to do it for you.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            My grandfather was my hero. He's the one who put a hammer in my hand
            and let me build something, then showed me how to do it better, then
            made me do it again. He had a few rules that stuck with me:
          </p>

          <blockquote className="border-l-4 border-gold/50 pl-6 py-1 my-4 italic text-foreground/70">
            Show up 15 minutes early — because if you show up on time, you're
            late.
          </blockquote>

          <blockquote className="border-l-4 border-gold/50 pl-6 py-1 my-4 italic text-foreground/70">
            Whatever you do, go hard. Don't waste somebody's time and money.
          </blockquote>

          <blockquote className="border-l-4 border-gold/50 pl-6 py-1 my-4 italic text-foreground/70">
            Learn a little bit about everything, not everything about a little
            bit. You're more valuable as a human.
          </blockquote>

          <p className="text-foreground/80 leading-relaxed mb-6">
            That's how I was raised, and that's how I run my business today.
            After growing up on the farm, I spent years working across different
            trades — flooring, landscaping, carpentry — intentionally moving
            between companies so I could keep learning. I worked with some of the
            best landscapers on Lake Minnetonka. I learned tile and flooring
            inside and out. Every stop taught me something new, and I carried all
            of it forward.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            I also served in the Marine Corps, which taught me discipline,
            accountability, and how to get things done no matter the conditions.
            Life threw me some curveballs along the way. But I was given chances
            — more than one — and I made the decision to build something I could
            be proud of. Phil The Builder And Friends is what came out of that.
            I've been doing this full-time since 2014, and I've never looked
            back.
          </p>
        </div>
      </section>

      {/* Section 3 - What Drives Phil */}
      <section className="bg-navy-light/50 px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-gold mb-2">
            What Drives Phil
          </h2>
          <div className="w-16 h-px bg-gold mb-10"></div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            The thing I love most about this work is sitting down with a
            customer, hearing what they have in their mind, and then making it
            happen.
          </p>

          <div className="text-xl italic text-gold/80 text-center py-6 border-y border-gold/20 my-8">
            "That's it. That's exactly what I wanted."
          </div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            I got into this business because I was tired of seeing people get
            taken advantage of. Too many handymen out there overcharge, cut
            corners, or just don't show up. I wanted to do it differently — fair
            prices, honest work, and treat every customer's home like it's my
            own.
          </p>
        </div>
      </section>

      {/* Section 4 - The "And Friends" */}
      <section className="bg-background px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-gold mb-2">
            The "And Friends"
          </h2>
          <div className="w-16 h-px bg-gold mb-10"></div>

          <p className="text-foreground/80 leading-relaxed mb-6">
            Most of the time, it's just Phil. You call, Phil shows up, Phil does
            the work. There's no middleman, no rotating crew of strangers — just
            the same guy who knows your home and does the job right.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            But when a bigger project calls for extra hands or specialized skills
            like licensed electrical or plumbing work, Phil has a trusted network
            of people he's built relationships with over the years. He brings them
            in personally so you're never left scrambling to find someone else.
          </p>

          <p className="text-foreground/80 leading-relaxed mb-6">
            That's what "And Friends" means. You call Phil, and Phil makes sure
            the right people show up to get the job done right.
          </p>
        </div>
      </section>

      {/* Section 5 - Bottom CTA */}
      <section className="bg-background px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-light/50 border border-gold/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-gold mb-4">
              Ready to Meet Phil?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a free estimate and see why over 150 homeowners in South
              Minneapolis, Richfield, Bloomington, and Edina keep calling him
              back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-6 py-3 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
              >
                Get a Free Estimate →
              </Link>
              <a
                href="tel:612-240-6854"
                className="px-6 py-3 border border-gold text-gold font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold hover:text-navy transition-colors"
              >
                Or call: 612-240-6854
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
