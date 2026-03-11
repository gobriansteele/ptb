"use client";

const colors: Record<string, string> = {
  "flooring-tile-work": "from-amber-800 to-amber-600",
  "landscaping-outdoor": "from-green-800 to-green-600",
  "general-repairs": "from-slate-700 to-slate-500",
  "minor-plumbing": "from-blue-800 to-blue-600",
  "minor-electrical": "from-yellow-700 to-yellow-500",
  "carpentry-woodwork": "from-orange-800 to-orange-600",
  "assembly-installation": "from-indigo-800 to-indigo-600",
  "seasonal-more": "from-teal-800 to-teal-600",
};

export default function GalleryPlaceholder({
  serviceName,
  slug,
  imageIndex,
  className = "",
}: {
  serviceName: string;
  slug: string;
  imageIndex: number;
  className?: string;
}) {
  const gradient = colors[slug] || "from-gray-700 to-gray-500";

  return (
    <div
      className={`bg-gradient-to-br ${gradient} flex flex-col items-center justify-center text-white/80 select-none ${className}`}
    >
      <span className="text-4xl mb-3">📷</span>
      <span className="text-sm font-semibold uppercase tracking-wider text-center px-4">
        {serviceName}
      </span>
      <span className="text-xs mt-1 opacity-60">Image {imageIndex}</span>
    </div>
  );
}
