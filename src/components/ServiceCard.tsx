import type { Service } from "@/data/services";

export function ServiceCard({ service, size = "sm" }: { service: Service; size?: "sm" | "lg" }) {
  return (
    <div className={`bg-navy-light/50 border border-gold/20 rounded-lg hover:border-gold/50 transition-colors ${size === "lg" ? "p-6" : "p-4"}`}>
      <div className={`flex items-start ${size === "lg" ? "gap-4" : "gap-3"}`}>
        <span className={`${size === "lg" ? "text-4xl flex-shrink-0" : "text-2xl"}`}>{service.icon}</span>
        <div>
          <h4 className={`font-semibold text-gold uppercase tracking-wider ${size === "lg" ? "text-lg mb-2" : "text-sm"}`}>
            {service.name}
          </h4>
          <p className={`text-foreground/60 ${size === "lg" ? "text-sm leading-relaxed" : "text-xs mt-1"}`}>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
