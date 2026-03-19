import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  image,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-sm mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-charcoal/70 text-sm leading-relaxed mb-3">
        {description}
      </p>
      <Link
        href="/products"
        className="text-sage text-sm font-medium hover:text-sage/80 transition-colors"
      >
        See Our Work &rarr;
      </Link>
    </div>
  );
}
