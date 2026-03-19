import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of our fencing, decking, and outdoor structure projects across Marin County.",
};

const galleryImages = [
  {
    src: "/images/hero-wood-fence.jpg",
    alt: "Modern horizontal wood fence",
    category: "Fencing",
  },
  {
    src: "/images/deck-furniture.jpg",
    alt: "Redwood deck with railing",
    category: "Decking",
  },
  {
    src: "/images/backyard-fence.jpg",
    alt: "Cedar privacy fence",
    category: "Fencing",
  },
  {
    src: "/images/stone-wall.jpg",
    alt: "Stone retaining wall",
    category: "Retaining Walls",
  },
  {
    src: "/images/hero-deck-bench.jpg",
    alt: "Composite deck with built-in seating",
    category: "Decking",
  },
  {
    src: "/images/wood-gate.jpg",
    alt: "Custom garden gate",
    category: "Gates",
  },
  {
    src: "/images/hero-fence-sky.jpg",
    alt: "Classic picket fence",
    category: "Fencing",
  },
  {
    src: "/images/garden-trellis.jpg",
    alt: "Garden arbor and trellis",
    category: "Trellises",
  },
  {
    src: "/images/stone-steps.jpg",
    alt: "Wood retaining wall with plantings",
    category: "Retaining Walls",
  },
  {
    src: "/images/hero-fence-deck.jpg",
    alt: "Modern backyard fence",
    category: "Fencing",
  },
  {
    src: "/images/stone-texture.jpg",
    alt: "Patio deck with outdoor dining",
    category: "Decking",
  },
  {
    src: "/images/garden-trellis.jpg",
    alt: "Custom driveway gate",
    category: "Gates",
  },
];

export default function Gallery() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            Our Work
          </h1>
          <p className="text-charcoal/60 max-w-2xl text-lg">
            Browse a selection of our recent projects across Marin County.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-sm aspect-square"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{img.alt}</p>
                  <p className="text-white/70 text-xs">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        heading="Like What You See?"
        subheading="Every project starts with a conversation. Tell us about yours and we'll make it happen."
        buttonText="Get a Free Estimate"
        buttonHref="/untitled"
      />
    </>
  );
}
