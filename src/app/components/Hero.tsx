"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <span className="relative inline-block">
          {/* Base solid gold */}
          <h1
            className="font-display font-extrabold tracking-wide text-6xl md:text-7xl lg:text-8xl
                       text-gold drop-shadow-[0_0_25px_rgba(198,161,91,0.9)]"
          >
            RKM Attorneys
          </h1>
          {/* Shimmer overlay */}
          <h1
            className="absolute inset-0 font-display font-extrabold tracking-wide text-6xl md:text-7xl lg:text-8xl
                       text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-gold
                       animate-shimmer opacity-80 pointer-events-none"
            aria-hidden="true"
          >
            RKM Attorneys
          </h1>
          {/* Neon underline with shimmer */}
          <span
            className="absolute left-0 -bottom-2 w-full h-1 rounded-full
                       bg-linear-to-r from-gold via-white to-gold
                       shadow-[0_0_15px_rgba(198,161,91,0.9)]
                       animate-shimmer"
          />
        </span>

        <p className="mt-6 text-xl md:text-2xl text-bone max-w-2xl mx-auto">
          Luxury‑grade counsel in estate, litigation, labour & RAF matters
        </p>

        <a
          href="https://wa.me/27727183125?text=Hello%20RKM%20Attorneys%2C%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-4 rounded-full bg-gold text-onyx font-semibold
                     shadow-soft hover:shadow-glow hover:scale-110 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
