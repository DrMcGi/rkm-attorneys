"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaGavel,
  FaBriefcase,
  FaBalanceScale,
  FaCarCrash,
  FaUsers,
  FaHandshake,
  FaShieldAlt,
  FaFileContract,
  FaBuilding
} from "react-icons/fa";

export default function PracticeGrid() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  const areas = [
    { icon: <FaGavel />, title: "Litigation", desc: "Resolving disputes with precision and authority." },
    { icon: <FaBriefcase />, title: "Labour Law", desc: "Protecting rights in the workplace." },
    { icon: <FaBalanceScale />, title: "Estate Administration", desc: "Guiding families through estate processes." },
    { icon: <FaCarCrash />, title: "RAF Claims", desc: "Securing compensation for road accident victims." },
    { icon: <FaUsers />, title: "Family Law", desc: "Compassionate counsel for family matters." },
    { icon: <FaHandshake />, title: "Contracts", desc: "Drafting and reviewing agreements with clarity." },
    { icon: <FaShieldAlt />, title: "Criminal Law", desc: "Defending rights with diligence and expertise." },
    { icon: <FaFileContract />, title: "Corporate Law", desc: "Supporting businesses with legal compliance." },
    { icon: <FaBuilding />, title: "Property Law", desc: "Advising on real estate and property transactions." }
  ];

  return (
    <section id="practice" ref={ref} className="container py-24">
      <h2 className="font-display text-3xl text-center text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Practice Areas – Litigation, Labour, Estate, RAF, Criminal Law
      </h2>
      <motion.div
        style={prefersReducedMotion ? undefined : { y }}
        className="grid gap-8 mt-12 md:grid-cols-3"
      >
        {areas.map((a) => (
          <div
            key={a.title}
            className="bg-glass border border-gold/30 rounded-xl p-6 text-center
                       shadow-[0_0_20px_rgba(255,215,0,0.15)]
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
                       hover:scale-105 transition"
          >
            <div className="flex justify-center mb-4 text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]">
              {a.icon}
            </div>
            <h3 className="text-xl font-display text-bone">{a.title}</h3>
            <p className="mt-2 text-sm text-ash">{a.desc}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
