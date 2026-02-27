"use client";

/*
 * Created by DrMcGi's SaaS Atelier (Pty) Ltd.
 * Author: Gift Rantho, Founder and MD
 * Contact: 0649211745 (call/WhatsApp)
 * Website: www.drmcgi.co.za
 */

import { FaCrown } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  const navItems = [
    { href: "#attorneys", label: "Leadership" },
    { href: "#practice", label: "Practice Areas" },
    { href: "#insights", label: "Insights" },
    { href: "#visit", label: "Visit Us" },
    { href: "#our-space", label: "Our Space" },
    { href: "#why", label: "Why Choose Us" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-onyx/80 backdrop-blur-md border-b border-gold/30">
      <div className="container flex items-center justify-between py-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 relative">
          <FaCrown className="text-gold text-3xl drop-shadow-[0_0_10px_rgba(198,161,91,0.7)]" />
          <span className="relative inline-block">
            {/* Base solid gold */}
            <span className="font-display font-extrabold tracking-wide text-2xl text-gold drop-shadow-[0_0_12px_rgba(198,161,91,0.6)]">
              RKM Attorneys
            </span>
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 font-display font-extrabold tracking-wide text-2xl
                         text-transparent bg-clip-text bg-linear-to-r from-gold via-white to-gold
                         animate-shimmer opacity-80 pointer-events-none"
              aria-hidden="true"
            >
              RKM Attorneys
            </span>
            {/* Neon underline with shimmer */}
            <span
              className="absolute left-0 -bottom-1 w-full h-0.5 rounded-full
                         bg-linear-to-r from-gold via-white to-gold
                         shadow-[0_0_8px_rgba(198,161,91,0.7)]
                         animate-shimmer"
            />
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActive(item.href)}
                className={`relative px-3 py-2 transition ${
                  active === item.href ? "text-gold" : "text-bone"
                } hover:text-gold
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
                  after:bg-gold after:rounded-full
                  ${
                    active === item.href
                      ? "after:opacity-100"
                      : "after:opacity-0 hover:after:opacity-100"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
