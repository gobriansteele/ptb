"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/data/gallery";

type LightboxProps = {
  serviceName: string;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({
  serviceName,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-3xl leading-none cursor-pointer transition-colors p-2"
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Image counter */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white text-4xl cursor-pointer transition-colors p-2"
        aria-label="Previous image"
      >
        ‹
      </button>

      {/* Image area */}
      <div
        className="relative w-full max-w-4xl mx-16 aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={`${serviceName} - photo ${currentIndex + 1}`}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />

      </div>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white text-4xl cursor-pointer transition-colors p-2"
        aria-label="Next image"
      >
        ›
      </button>

      {/* Bottom labels */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
        {currentImage.label && (
          <span className="text-white/70 text-sm font-semibold uppercase tracking-widest">
            {currentImage.label}
          </span>
        )}
        <span className="text-white/50 text-sm uppercase tracking-widest">
          {serviceName}
        </span>
      </div>
    </div>
  );
}
