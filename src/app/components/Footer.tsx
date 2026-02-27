"use client";

/*
 * Created by DrMcGi's SaaS Atelier (Pty) Ltd.
 * Author: Gift Rantho, Founder and MD
 * Contact: 0649211745 (call/WhatsApp)
 * Email: Giftk.rantho@gmail.com
 * Website: www.drmcgi.co.za
 */

import type { MouseEvent } from "react";
import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaTimes, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const [showCreatorModal, setShowCreatorModal] = useState(false);

  const handlePlaceholderClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

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
              onClick={handlePlaceholderClick}
              aria-disabled="true"
              tabIndex={-1}
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              onClick={handlePlaceholderClick}
              aria-disabled="true"
              tabIndex={-1}
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              onClick={handlePlaceholderClick}
              aria-disabled="true"
              tabIndex={-1}
              className="p-3 rounded-full bg-glass text-gold shadow-soft hover:shadow-glow transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20 py-6 text-center text-xs text-bone/70">
        © {new Date().getFullYear()} RKM Attorneys. All rights reserved.
        
        {/* Creator Badge - Luxury Interactive Button */}
        <div className="block mt-4">
          <button
            onClick={() => setShowCreatorModal(!showCreatorModal)}
            className="relative inline-block group px-6 py-2 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 border border-gold/40 hover:border-gold/80 text-gold font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,161,91,0.6)] hover:scale-105"
          >
            <span className="flex items-center gap-2">
              🎨 Created by DrMcGi's SaaS Atelier
              <span className="text-xs ml-1 opacity-60">↓</span>
            </span>
          </button>
        </div>

        {/* Creator Modal - Luxurious Popup */}
        {showCreatorModal && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
              onClick={() => setShowCreatorModal(false)}
            />
            
            {/* Modal Card */}
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4 p-8 rounded-2xl bg-gradient-to-br from-onyx via-onyx to-onyx/95 border border-gold/40 shadow-[0_0_40px_rgba(198,161,91,0.4)] animate-in fade-in zoom-in-95">
              
              {/* Close Button */}
              <button
                onClick={() => setShowCreatorModal(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gold/20 rounded-full transition text-gold hover:text-white"
              >
                <FaTimes size={18} />
              </button>

              {/* Company Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-extrabold text-gold drop-shadow-[0_0_10px_rgba(198,161,91,0.7)] mb-2">
                  DrMcGi's SaaS Atelier
                </h3>
                <p className="text-xs text-bone/60 uppercase tracking-widest">Digital Excellence</p>
              </div>

              {/* Founder Info */}
              <div className="mb-6 pb-6 border-b border-gold/20">
                <p className="text-bone/90 text-center mb-1">
                  <span className="font-semibold text-gold">Founder & Managing Director</span>
                </p>
                <p className="text-center text-bone font-display text-lg">Gift Rantho</p>
              </div>

              {/* Contact Details - Interactive & Clickable */}
              <div className="space-y-3 mb-6">
                {/* Phone */}
                <a
                  href="tel:+27649211745"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/20 hover:border-gold/50 transition-all group cursor-pointer"
                >
                  <span className="text-gold group-hover:scale-110 transition-transform">
                    <FaPhone size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-bone/60">Call or WhatsApp</p>
                    <p className="text-sm font-semibold text-gold group-hover:text-white transition">064 921 1745</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Giftk.rantho@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/20 hover:border-gold/50 transition-all group cursor-pointer"
                >
                  <span className="text-gold group-hover:scale-110 transition-transform">
                    <FaEnvelope size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-bone/60">Email</p>
                    <p className="text-sm font-semibold text-gold group-hover:text-white transition truncate">Giftk.rantho@gmail.com</p>
                  </div>
                </a>

                {/* Website */}
                <a
                  href="https://www.drmcgi.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-gold/10 hover:bg-gold/20 border border-gold/20 hover:border-gold/50 transition-all group cursor-pointer"
                >
                  <span className="text-gold group-hover:scale-110 transition-transform">
                    <FaGlobe size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-bone/60">Website</p>
                    <p className="text-sm font-semibold text-gold group-hover:text-white transition">www.drmcgi.co.za</p>
                  </div>
                </a>
              </div>

              {/* Footer Text */}
              <p className="text-xs text-bone/50 text-center italic">
                Crafting digital excellence for premium brands since inception.
              </p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
