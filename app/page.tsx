import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionCTA from "@/components/SectionCTA";

const heroImages = [
  "/images/hero-fence-deck.jpg",
  "/images/hero-deck-bench.jpg",
  "/images/hero-wood-fence.jpg",
  "/images/hero-fence-sky.jpg",
];

const services = [
  {
    image: "/images/backyard-fence.jpg",
    title: "Fencing",
    description:
      "Custom wood, vinyl, and composite fences designed to complement your property. Privacy, picket, horizontal — we build it all.",
  },
  {
    image: "/images/deck-furniture.jpg",
    title: "Decking",
    description:
      "Redwood and composite decks that extend your living space outdoors. Built to withstand the Bay Area climate for decades.",
  },
  {
    image: "/images/stone-wall.jpg",
    title: "Retaining Walls",
    description:
      "Functional and beautiful retaining walls that manage slopes and create usable outdoor space on Marin's hilly terrain.",
  },
];

const testimonials = [
  {
    quote:
      "Bob and his team replaced our entire backyard fence in three days. The quality is outstanding and the price was fair. Highly recommend.",
    name: "Margaret L.",
  },
  {
    quote:
      "We've used California Fence Company twice now — once for a new deck and once for a retaining wall. Both times the work was impeccable.",
    name: "David R.",
  },
  {
    quote:
      "Professional from start to finish. They helped us choose the right materials and the fence looks even better than we imagined.",
    name: "Susan K.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSlideshow images={heroImages}>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wide mb-6">
          Marin County&apos;s Trusted
          <br />
          Fence Contractor
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
          Quality fencing, decking, and outdoor structures.
          <br />
          Serving the Bay Area since 1979.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-sage text-white px-8 py-3 rounded-sm text-sm tracking-wide hover:bg-sage/90 transition-colors"
        >
          Get a Free Estimate
        </Link>
      </HeroSlideshow>

      {/* Diamond Certified Badge */}
      <section className="py-8 bg-white/50 text-center">
        <p className="text-sm tracking-widest uppercase text-sage font-medium">
          ★ Diamond Certified Business ★
        </p>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            What We Build
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">
            From privacy fences to custom decks, we bring craftsmanship and care
            to every project in Marin County.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Why Marin Homeowners Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "45+", label: "Years in Business" },
              { stat: "5,000+", label: "Projects Completed" },
              { stat: "100%", label: "Diamond Certified" },
              { stat: "Free", label: "Estimates Always" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-4xl text-sage mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-charcoal/60">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Contact us today for a free, no-obligation estimate. We'll visit your property and help you choose the perfect solution."
        buttonText="Request Your Free Estimate"
        buttonHref="/contact"
        variant="charcoal"
      />
    </>
  );
}
