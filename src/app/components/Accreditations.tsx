"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGavel, FaUniversity, FaCertificate } from "react-icons/fa";

export default function Accreditations() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  const items = [
    { icon: <FaGavel className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />, label: "Law Society" },
    { icon: <FaUniversity className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />, label: "FISCA Member" },
    { icon: <FaCertificate className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />, label: "Accredited Estate Practitioners" }
  ];

  return (
    <section id="accreditations" ref={ref} className="container py-24 text-center">
      <h2 className="font-display text-3xl text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Accreditations & Memberships – Legal Associations in South Africa
      </h2>
      <motion.div style={{ y }} className="flex flex-wrap justify-center gap-12 mt-12">
        {items.map((i) => (
          <div
            key={i.label}
            className="flex flex-col items-center bg-glass border border-gold/30 rounded-xl p-6
                       shadow-[0_0_20px_rgba(255,215,0,0.15)]
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
                       hover:scale-105 transition"
          >
            {i.icon}
            <span className="mt-2 text-sm text-ash">{i.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
