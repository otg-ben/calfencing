import Link from "next/link";

interface SectionCTAProps {
  heading: string;
  subheading: string;
  buttonText: string;
  buttonHref: string;
  variant?: "sage" | "charcoal";
}

export default function SectionCTA({
  heading,
  subheading,
  buttonText,
  buttonHref,
  variant = "sage",
}: SectionCTAProps) {
  const bg = variant === "sage" ? "bg-sage" : "bg-charcoal";

  return (
    <section className={`${bg} text-white py-20`}>
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="font-display text-3xl md:text-4xl mb-4">{heading}</h2>
        <p className="text-white/80 mb-8 leading-relaxed">{subheading}</p>
        <Link
          href={buttonHref}
          className={`inline-block px-8 py-3 rounded-sm text-sm tracking-wide transition-colors ${
            variant === "sage"
              ? "bg-white text-sage hover:bg-white/90"
              : "bg-sage text-white hover:bg-sage/90"
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
