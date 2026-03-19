"use client";

import { useState, useEffect, useCallback } from "react";

interface HeroSlideshowProps {
  images: string[];
  children: React.ReactNode;
}

export default function HeroSlideshow({
  images,
  children,
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);

  const advance = useCallback(() => {
    setPrevious(current);
    setCurrent((c) => (c + 1) % images.length);
  }, [current, images.length]);

  useEffect(() => {
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [advance]);

  // Clear previous slide after transition completes
  useEffect(() => {
    if (previous !== null) {
      const timer = setTimeout(() => setPrevious(null), 1500);
      return () => clearTimeout(timer);
    }
  }, [previous]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {images.map((src, i) => {
        const isActive = i === current;
        const isPrev = i === previous;
        const isVisible = isActive || isPrev;

        return (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{
              opacity: isActive ? 1 : isPrev ? 0 : 0,
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              display: isVisible ? "block" : "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{
                animation: isActive ? "kenburns 5s ease-in-out forwards" : "none",
              }}
            />
          </div>
        );
      })}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-6">
        <div className="max-w-3xl">{children}</div>
      </div>

      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </section>
  );
}
