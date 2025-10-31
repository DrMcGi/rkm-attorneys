"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Shimmer gradient shifts slightly with scroll
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <motion.div
        style={{ backgroundPosition }}
        className="absolute inset-0 bg-gradient-to-r from-gold/90 via-gold/70 to-gold/90 bg-[length:200%_200%] animate-[shimmer_6s_linear_infinite]"
      />
      <div className="relative container text-center">
        <h2 className="font-display text-4xl text-onyx drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
          Book Your Consultation Today
        </h2>
        <p className="mt-4 text-lg text-onyx">
          Trusted legal partners for estate, litigation, labour, and RAF matters.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block px-10 py-4 rounded-full bg-onyx text-bone font-semibold
                     shadow-[0_0_20px_rgba(255,215,0,0.6)]
                     hover:shadow-[0_0_35px_rgba(255,215,0,1)]
                     hover:scale-110 transition"
        >
          Schedule Now
        </a>
      </div>
    </section>
  );
}
