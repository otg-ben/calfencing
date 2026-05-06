import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos of our fencing, decking, and outdoor structure projects across Marin County.",
};

const galleryImages = [
  {
    src: "/images/fence-cedar-shrubs-flowers.jpg",
    alt: "Cedar privacy fence with garden planting",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-horizontal-garden.jpg",
    alt: "Horizontal cedar fence with landscaping",
    category: "Fencing",
  },
  {
    src: "/images/deck-mahogany-lighting.png",
    alt: "Multi-level deck with built-in lighting",
    category: "Decking",
  },
  {
    src: "/images/fence-cedar-lattice-lavender.jpg",
    alt: "Cedar fence with lattice top and lavender planter",
    category: "Fencing",
  },
  {
    src: "/images/deck-redwood-steps.png",
    alt: "Redwood deck with steps and built-in seating",
    category: "Decking",
  },
  {
    src: "/images/gate-cedar-driveway.jpg",
    alt: "Horizontal cedar driveway gate",
    category: "Gates",
  },
  {
    src: "/images/fence-cedar-vertical-lattice.jpg",
    alt: "Vertical cedar fence with lattice detail",
    category: "Fencing",
  },
  {
    src: "/images/deck-redwood-forest.png",
    alt: "Redwood deck in wooded setting",
    category: "Decking",
  },
  {
    src: "/images/fence-hogwire-1.jpg",
    alt: "Hog wire fence with wood frame",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-ivy.jpg",
    alt: "Cedar fence with ivy",
    category: "Fencing",
  },
  {
    src: "/images/fence-horizontal-patio.png",
    alt: "Horizontal cedar fence with outdoor patio",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-trees-1.jpg",
    alt: "Cedar fence with mature trees",
    category: "Fencing",
  },
  {
    src: "/images/fence-hogwire-2.jpg",
    alt: "Hog wire and wood fence",
    category: "Fencing",
  },
  {
    src: "/images/fence-composite-accent-wall.jpg",
    alt: "Composite slat accent wall",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-corner-garden.jpg",
    alt: "Cedar fence corner with garden",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-vertical-sky.jpg",
    alt: "Cedar privacy fence",
    category: "Fencing",
  },
  {
    src: "/images/fence-horizontal-corner.png",
    alt: "Horizontal cedar fence corner",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-vertical-trees.jpg",
    alt: "Cedar fence with trees",
    category: "Fencing",
  },
  {
    src: "/images/fence-cedar-trees-2.jpg",
    alt: "Cedar fence with landscaping",
    category: "Fencing",
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
        buttonHref="/contact"
      />
    </>
  );
}
