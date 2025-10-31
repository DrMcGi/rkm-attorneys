"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-gold text-onyx
                 shadow-[0_0_20px_rgba(255,215,0,0.6)]
                 hover:shadow-[0_0_35px_rgba(255,215,0,1)]
                 hover:scale-110 transition"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
