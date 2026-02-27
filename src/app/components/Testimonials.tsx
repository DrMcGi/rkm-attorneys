"use client";

/*
 * Created by DrMcGi's SaaS Atelier (Pty) Ltd.
 * Author: Gift Rantho, Founder and MD
 * Contact: 0649211745 (call/WhatsApp)
 * Website: www.drmcgi.co.za
 */

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Cards float subtly as you scroll
  const y = useTransform(scrollYProgress, [0, 1], ["15%", "-5%"]);

  const quotes = [
    { text: "Professional, efficient, and compassionate service throughout.", author: "Client A" },
    { text: "They guided me with clarity and confidence in a difficult time.", author: "Client B" },
    { text: "A trusted partner who truly understands both law and people.", author: "Client C" }
  ];

  return (
    <section id="testimonials" ref={ref} className="container py-24">
      <h2 className="font-display text-3xl text-center text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Testimonials – What Our Clients Say
      </h2>
      <motion.div
        style={prefersReducedMotion ? undefined : { y }}
        className="mt-12 grid md:grid-cols-3 gap-8"
      >
        {quotes.map((q) => (
          <blockquote
            key={q.author}
            className="bg-glass border border-gold/30 rounded-xl p-6
                       shadow-[0_0_20px_rgba(255,215,0,0.15)]
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
                       hover:scale-105 transition"
          >
            <p className="text-bone italic">“{q.text}”</p>
            <footer className="mt-4 text-ash text-sm">— {q.author}</footer>
          </blockquote>
        ))}
      </motion.div>
    </section>
  );
}
