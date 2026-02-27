"use client";

/*
 * Created by DrMcGi's SaaS Atelier (Pty) Ltd.
 * Author: Gift Rantho, Founder and MD
 * Contact: 0649211745 (call/WhatsApp)
 * Website: www.drmcgi.co.za
 */

import { useState, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

export default function OurSpace() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Parallax transforms for images
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="our-space" ref={ref} className="container py-24">
      <h2 className="font-display text-3xl text-center text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Our Space
      </h2>
      <p className="mt-4 text-ash text-center max-w-2xl mx-auto">
        Step into an environment designed for trust, discretion, and professionalism.
      </p>
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <motion.figure
          style={prefersReducedMotion ? undefined : { y: y1 }}
          className="overflow-hidden rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.15)] border border-gold/30 cursor-pointer"
          onClick={() => setLightbox("/images/office-table.jpg")}
        >
          <Image
            src="/images/office-table.jpg"
            alt="Office table"
            width={800}
            height={600}
            className="w-full h-[350px] object-cover hover:scale-105 transition"
          />
          <figcaption className="px-4 py-3 text-ash text-sm">
            Private consultation space for clarity and focus.
          </figcaption>
        </motion.figure>

        <motion.figure
          style={prefersReducedMotion ? undefined : { y: y2 }}
          className="overflow-hidden rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.15)] border border-gold/30 cursor-pointer"
          onClick={() => setLightbox("/images/reception.jpg")}
        >
          <Image
            src="/images/reception.jpg"
            alt="Reception"
            width={800}
            height={600}
            className="w-full h-[350px] object-cover hover:scale-105 transition"
          />
          <figcaption className="px-4 py-3 text-ash text-sm">
            Warm reception on arrival at Khotso House.
          </figcaption>
        </motion.figure>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full px-6">
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-gold text-2xl"
            >
              <FaTimes />
            </button>
            <Image
              src={lightbox}
              alt="Expanded view"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl shadow-[0_0_35px_rgba(255,215,0,0.5)]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
