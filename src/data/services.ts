export type Service = {
  name: string;
  slug: string;
  icon: string;
  description: string;
  isTopService?: boolean;
};

export const services: Service[] = [
  { name: "Flooring & Tile Work", slug: "flooring-tile-work", icon: "🏠", isTopService: true, description: "Hardwood, laminate, vinyl plank, tile repair, kitchen backsplashes, shower surrounds, and bathroom tile. This is what Phil is known for." },
  { name: "Landscaping & Outdoor", slug: "landscaping-outdoor", icon: "🌳", isTopService: true, description: "Patios, walkways, retaining walls, sod, deck repair, fences, gutter cleaning, and pressure washing." },
  { name: "General Repairs", slug: "general-repairs", icon: "🔧", description: "Drywall, doors, locks, caulking, weatherstripping, doorbells" },
  { name: "Minor Plumbing", slug: "minor-plumbing", icon: "🚰", description: "Faucets, toilets, drains, showerheads, garbage disposals" },
  { name: "Minor Electrical", slug: "minor-electrical", icon: "💡", description: "Light fixtures, ceiling fans, outlets, switches, dimmers, recessed lighting" },
  { name: "Carpentry & Woodwork", slug: "carpentry-woodwork", icon: "🪵", description: "Shelving, trim, molding, railings, cabinets, door frames, wood rot repair" },
  { name: "Assembly & Installation", slug: "assembly-installation", icon: "📦", description: "TV mounting, curtain rods, blinds, mirrors, bathroom hardware" },
  { name: "Seasonal & More", slug: "seasonal-more", icon: "📅", description: "Lawn care, snow removal, holiday lights, junk removal, aging-in-place modifications, pre-sale touch-ups, rental turnover" },
];

export const serviceAreas = ["South Minneapolis", "Richfield", "Bloomington", "Edina"];
