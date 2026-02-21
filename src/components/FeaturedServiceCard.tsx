import type { Service } from "@/data/services";

export function FeaturedServiceCard({ service, size = "sm" }: { service: Service; size?: "sm" | "lg" }) {
  return (
    <div className={`bg-gold/10 border-2 border-gold/50 rounded-lg hover:bg-gold/20 transition-colors ${size === "lg" ? "p-8" : "p-6"}`}>
      <div className={`${size === "lg" ? "text-6xl mb-4" : "text-5xl mb-3"}`}>{service.icon}</div>
      <h3 className={`font-bold text-gold uppercase tracking-wider ${size === "lg" ? "text-xl mb-3" : "text-lg mb-2"}`}>
        {service.name}
      </h3>
      <p className={`text-foreground/70 ${size === "lg" ? "leading-relaxed" : "text-sm"}`}>
        {service.description}
      </p>
    </div>
  );
}
