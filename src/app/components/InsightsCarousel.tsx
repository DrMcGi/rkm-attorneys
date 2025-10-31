"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function InsightsCarousel() {
  const insights = [
    { title: "Estate Planning Essentials", desc: "Why proactive estate planning safeguards your legacy." },
    { title: "RAF Claims Explained", desc: "Understanding your rights after a road accident." },
    { title: "Labour Law Updates", desc: "Recent changes every employer and employee should know." }
  ];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? insights.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === insights.length - 1 ? 0 : i + 1));

  return (
    <section id="insights" className="container py-24 text-center">
      <h2 className="font-display text-3xl text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Insights
      </h2>
      <div className="relative mt-12 max-w-2xl mx-auto">
        <div
          className="bg-glass border border-gold/30 rounded-xl p-8
                     shadow-[0_0_20px_rgba(255,215,0,0.15)]
                     hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
                     transition"
        >
          <h3 className="font-display text-xl text-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
            {insights[index].title}
          </h3>
          <p className="mt-4 text-ash">{insights[index].desc}</p>
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 -left-12 -translate-y-1/2 p-3 rounded-full bg-gold text-onyx
                     shadow-[0_0_15px_rgba(255,215,0,0.6)]
                     hover:shadow-[0_0_25px_rgba(255,215,0,1)]
                     hover:scale-110 transition"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 -right-12 -translate-y-1/2 p-3 rounded-full bg-gold text-onyx
                     shadow-[0_0_15px_rgba(255,215,0,0.6)]
                     hover:shadow-[0_0_25px_rgba(255,215,0,1)]
                     hover:scale-110 transition"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
