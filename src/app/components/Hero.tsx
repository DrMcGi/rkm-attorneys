"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="font-display text-6xl md:text-7xl text-transparent bg-clip-text 
                     bg-gradient-to-r from-gold via-amber-300 to-gold 
                     animate-textShimmer drop-shadow-[0_0_25px_rgba(255,215,0,0.9)]"
        >
          RKM Attorneys
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-bone max-w-2xl mx-auto">
          Luxury‑grade counsel in estate, litigation, labour & RAF matters
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block px-10 py-4 rounded-full bg-gold text-onyx font-semibold
                     shadow-[0_0_25px_rgba(255,215,0,0.7)]
                     hover:shadow-[0_0_45px_rgba(255,215,0,1)]
                     hover:scale-110 transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
