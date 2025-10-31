"use client";

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
        {/* Brand */}
        <div className="flex items-center gap-2">
          <FaCrown className="text-gold text-3xl" />
          <span className="font-display text-2xl text-transparent bg-clip-text bg-goldgrad animate-shimmer">
            RKM Attorneys
          </span>
        </div>

        {/* Links */}
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
