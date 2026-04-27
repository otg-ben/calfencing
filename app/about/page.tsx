import type { Metadata } from "next";
import SectionCTA from "@/components/SectionCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about California Fence Company — serving Marin County since 1979. Diamond Certified fencing and decking contractor.",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl tracking-wide mb-4">
            About Us
          </h1>
          <p className="text-charcoal/60 max-w-2xl text-lg">
            A family-owned business with deep roots in Marin County.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl mb-6">
              Craftsmanship Since 1979
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                California Fence Company was founded by Bob Easley in 1979 with
                a simple mission: build outdoor structures that stand the test of
                time. What started as a one-man operation has grown into Marin
                County&apos;s most trusted fencing and decking contractor.
              </p>
              <p>
                For over 45 years, we&apos;ve been building fences, decks,
                retaining walls, trellises, and gates for homeowners across Marin
                County. Every project reflects our commitment to quality
                materials, precise craftsmanship, and honest service.
              </p>
              <p>
                We&apos;re proud to be a Diamond Certified business — a
                distinction earned through consistently high ratings from
                verified customers. It&apos;s a standard we work hard to
                maintain on every job.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/wood-gate.jpg"
              alt="Craftsman at work"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Diamond Certified */}
      <section className="bg-white/40 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest uppercase text-sage font-medium mb-6">
            ★ Diamond Certified ★
          </p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Rated Highest in Quality
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
            Diamond Certified companies are rated Highest in Quality by their
            verified customers. It&apos;s not a paid advertisement — it&apos;s
            an independent certification based on rigorous research. We&apos;re
            honored to hold this distinction.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-14">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Quality Materials",
              desc: "We source premium redwood, cedar, and composite materials built to withstand Marin's coastal climate.",
            },
            {
              title: "Local Expertise",
              desc: "Over four decades of experience working with Marin County's unique terrain, soil conditions, and permitting requirements.",
            },
            {
              title: "Honest Service",
              desc: "Transparent pricing, clear timelines, and no surprises. We treat your property like our own.",
            },
          ].map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="font-display text-xl mb-3">{value.title}</h3>
              <p className="text-charcoal/60 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        heading="Let's Build Something Together"
        subheading="Whether it's a new fence, a custom deck, or a retaining wall — we'd love to hear about your project."
        buttonText="Get a Free Estimate"
        buttonHref="/contact"
      />
    </>
  );
}
