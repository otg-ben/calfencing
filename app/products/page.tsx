import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "Fencing, decking, retaining walls, trellises, and gates — explore our full range of outdoor structures for Marin County homes.",
};

const products = [
  {
    title: "Wood Fencing",
    image: "/images/fence-horizontal-patio.png",
    description:
      "Redwood and cedar privacy fences, picket fences, and modern horizontal designs. Every fence is custom-built on site for a perfect fit.",
    features: [
      "Redwood & cedar options",
      "Privacy, picket, horizontal styles",
      "Custom heights and spacing",
    ],
  },
  {
    title: "Composite & Vinyl Fencing",
    image: "/images/fence-vinyl-dark.png",
    description:
      "Low-maintenance composite and vinyl fencing that looks great year after year. Ideal for coastal properties exposed to moisture and salt air.",
    features: [
      "Weather-resistant materials",
      "Minimal maintenance required",
      "Multiple colors and styles",
    ],
  },
  {
    title: "Decking",
    image: "/images/deck-mahogany-lighting.png",
    description:
      "Custom decks in redwood, cedar, and composite materials. We design and build decks that extend your living space and complement your home's architecture.",
    features: [
      "Redwood, cedar, and composite",
      "Custom railings and stairs",
      "Built-in seating and planters",
    ],
  },
  {
    title: "Retaining Walls",
    image: "/images/stone-wall.jpg",
    description:
      "Structural retaining walls that manage slopes and prevent erosion. We work with wood, stone, and block to create walls that are both functional and beautiful.",
    features: [
      "Wood, stone, and block options",
      "Engineered for Marin terrain",
      "Drainage systems included",
    ],
  },
  {
    title: "Gates & Arbors",
    image: "/images/gate-redwood-arbor.png",
    description:
      "Custom gates, arbors, and trellises that add character to your property. From simple garden gates to automated driveway entries.",
    features: [
      "Walk gates and driveway gates",
      "Arbors and trellises",
      "Hardware and automation options",
    ],
  },
];

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            Products &amp; Services
          </h1>
          <p className="text-charcoal/60 max-w-2xl text-lg">
            Everything you need for your outdoor project, built with premium
            materials and decades of expertise.
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {products.map((product, i) => (
          <div
            key={product.title}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:direction-ltr" : ""
            }`}
          >
            <div className="overflow-hidden rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-4">
                {product.title}
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-charcoal/60"
                  >
                    <span className="text-sage">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <SectionCTA
        heading="Ready to Start Your Project?"
        subheading="Tell us what you're looking for and we'll provide a free, detailed estimate."
        buttonText="Request an Estimate"
        buttonHref="/contact"
        variant="charcoal"
      />
    </>
  );
}
