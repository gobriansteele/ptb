"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

function ReviewCard({ t }: { t: (typeof testimonials)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) setIsClamped(el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div className="bg-navy/50 border border-gold/20 rounded-lg p-6 flex flex-col">
      <div className="flex-1 mb-6">
        <p
          ref={textRef}
          className={`text-foreground/80 italic ${expanded ? "" : "line-clamp-6"}`}
        >
          &ldquo;{t.text}&rdquo;
        </p>
        {isClamped && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-gold/60 text-xs mt-2 cursor-pointer hover:text-gold transition-colors"
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}
      </div>
      <div className="border-t border-gold/20 pt-4">
        <p className="font-semibold text-gold text-sm uppercase tracking-wider">{t.name}</p>
        <p className="text-foreground/60 text-xs mt-1">
          {t.neighborhood} &middot; {t.date}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <div>
      <div className="relative px-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-stretch -mx-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-3"
              >
                <ReviewCard t={t} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gold/40 text-gold cursor-pointer hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200"
          aria-label="Previous review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full border border-gold/40 text-gold cursor-pointer hover:bg-gold hover:border-gold hover:text-navy transition-all duration-200"
          aria-label="Next review"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors hover:bg-gold/70 ${
              i === selectedIndex ? "bg-gold" : "bg-gold/30"
            }`}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
