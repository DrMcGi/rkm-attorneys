"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27720000000?text=Hello%20RKM%20Attorneys%2C%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 
                 rounded-full bg-gold text-onyx font-semibold
                 shadow-[0_0_20px_rgba(255,215,0,0.6)]
                 hover:shadow-[0_0_35px_rgba(255,215,0,1)]
                 hover:scale-110 transition"
      aria-label="Book on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
      <span>Book on WhatsApp</span>
    </a>
  );
}
