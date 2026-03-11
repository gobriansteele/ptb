"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { galleryCategories } from "@/data/gallery";
import Lightbox from "@/components/Lightbox";

const serviceMap = new Map(services.map((s) => [s.slug, s]));

const visibleEntries = galleryCategories
  .filter((category) => !category.isHidden)
  .map((category) => {
    const service = serviceMap.get(category.slug);
    return service ? { service, category } : null;
  })
  .filter(Boolean) as {
  service: (typeof services)[number];
  category: (typeof galleryCategories)[number];
}[];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{
    entryIndex: number;
    imageIndex: number;
  } | null>(null);

  const openLightbox = (entryIndex: number) => {
    setLightbox({ entryIndex, imageIndex: 0 });
  };

  const closeLightbox = () => setLightbox(null);

  const activeEntry = lightbox ? visibleEntries[lightbox.entryIndex] : null;
  const imageCount = activeEntry?.category.images.length ?? 0;

  const goToPrev = () => {
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            imageIndex: (prev.imageIndex - 1 + imageCount) % imageCount,
          }
        : null
    );
  };

  const goToNext = () => {
    setLightbox((prev) =>
      prev
        ? { ...prev, imageIndex: (prev.imageIndex + 1) % imageCount }
        : null
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-navy text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-gold mb-4">
              Our Work
            </h1>
            <p className="text-lg text-foreground/70">
              Browse photos from recent projects across all of our services.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleEntries.map(({ service, category }, i) => (
              <button
                key={service.slug}
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <Image
                  src={category.thumbnail}
                  alt={service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-lg font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    View Photos
                  </span>
                </div>
                {/* Service name label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                  <span className="text-white text-sm font-semibold uppercase tracking-wider">
                    {service.icon} {service.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightbox && activeEntry && (
        <Lightbox
          serviceName={activeEntry.service.name}
          images={activeEntry.category.images}
          currentIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </div>
  );
}
