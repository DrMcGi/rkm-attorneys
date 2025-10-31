"use client";

import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-onyx text-bone border-t border-gold/30 relative z-10">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / About */}
        <div>
          <h3 className="relative inline-block font-display font-extrabold text-xl text-gold drop-shadow-[0_0_10px_rgba(198,161,91,0.7)]">
            RKM Attorneys
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold rounded-full
                         shadow-[0_0_8px_rgba(198,161,91,0.7)] animate-pulse"
            />
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-bone/80 max-w-sm">
            Providing luxury‑grade counsel in estate, litigation, labour, and RAF matters.
            Our commitment is trust, transparency, and transformative outcomes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gold mb-4 relative inline-block">
            Quick Links
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold rounded-full
                         shadow-[0_0_6px_rgba(198,161,91,0.6)] animate-pulse"
            />
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#attorneys" className="hover:text-gold transition">Leadership</a></li>
            <li><a href="#practice" className="hover:text-gold transition">Practice Areas</a></li>
            <li><a href="#insights" className="hover:text-gold transition">Insights</a></li>
            <li><a href="#visit" className="hover:text-gold transition">Visit Us</a></li>
            <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-gold mb-4 relative inline-block">
            Connect
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-gold rounded-full
                         shadow-[0_0_6px_rgba(198,161,91,0.6)] animate-pulse"
            />
          </h4>
          <div className="flex gap-4">
            <a
              href="https://wa.me/27727183125?text=Hello%20RKM%20Attorneys%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 py-4 text-center text-xs text-bone/70">
        © {new Date().getFullYear()} RKM Attorneys. All rights reserved.
      </div>
    </footer>
  );
}
