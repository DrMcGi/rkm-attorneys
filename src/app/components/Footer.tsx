"use client";

import { FaCrown, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-onyx border-t border-gold/20">
      {/* Shimmer line */}
      <div className="h-1 w-full bg-linear-to-r from-transparent via-gold to-transparent animate-pulse" />

      <div className="container py-16 grid md:grid-cols-3 gap-12 text-sm text-ash relative z-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2">
            <FaCrown className="text-gold text-2xl drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" />
            <span className="font-display text-lg text-gold">RKM Attorneys</span>
          </div>
          <p className="mt-3">
            Luxury‑grade counsel serving diverse client needs with expertise and professionalism.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-bone font-semibold">Contact</h3>
          <p className="mt-2">
            Email:{" "}
            <a href="mailto:Info@rkmattorneysinc.co.za" className="hover:text-gold">
              Info@rkmattorneysinc.co.za
            </a>
          </p>
          <p className="mt-1">
            Marshall Town Office, Khotso House, 7th floor, Johannesburg.
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-bone font-semibold">Connect</h3>
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.linkedin.com/company/rkm-attorneys"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass text-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wa.me/27720000000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass text-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:Info@rkmattorneysinc.co.za"
              className="p-3 rounded-full bg-glass text-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-linear-to-t from-gold/5 to-transparent pointer-events-none" />
    </footer>
  );
}
