interface TestimonialCardProps {
  quote: string;
  name: string;
}

export default function TestimonialCard({ quote, name }: TestimonialCardProps) {
  return (
    <div className="bg-white/60 p-8 rounded-sm">
      <p className="italic text-charcoal/80 leading-relaxed mb-4">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm font-medium text-sage">&mdash; {name}</p>
    </div>
  );
}
