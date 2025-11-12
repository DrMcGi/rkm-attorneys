"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const parallaxStyle = prefersReducedMotion ? undefined : { y };

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Parallax background with alt text */}
  <motion.div style={parallaxStyle} className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="RKM Attorneys office reception in Johannesburg"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center">
        <span className="relative inline-block">
          <h1
            className="font-display font-extrabold tracking-wide text-6xl md:text-7xl lg:text-8xl
                       text-gold drop-shadow-[0_0_25px_rgba(198,161,91,0.9)]"
          >
            RKM Attorneys
          </h1>
          <h1
            className="absolute inset-0 text-6xl font-extrabold tracking-wide text-transparent pointer-events-none font-display md:text-7xl lg:text-8xl bg-clip-text bg-linear-to-r from-gold via-white to-gold animate-shimmer opacity-80"
            aria-hidden="true"
          >
            RKM Attorneys
          </h1>
          <span
            className="absolute left-0 -bottom-2 w-full h-1 rounded-full
                       bg-linear-to-r from-gold via-white to-gold
                       shadow-[0_0_15px_rgba(198,161,91,0.9)]
                       animate-shimmer"
          />
        </span>

        <p className="max-w-2xl mx-auto mt-6 text-xl md:text-2xl text-bone">
          Luxury‑grade counsel in estate administration, litigation, labour law & RAF matters in Johannesburg and Gauteng
        </p>

        <a
          href="https://wa.me/27727183125?text=Hello%20RKM%20Attorneys%2C%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 mt-8 font-semibold transition rounded-md bg-gold text-onyx shadow-soft hover:shadow-glow"
        >
          Book Consultation on WhatsApp
        </a>
      </div>
    </section>
  );
}
