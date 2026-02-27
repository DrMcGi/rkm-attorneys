"use client";

/*
 * Created by DrMcGi's SaaS Atelier (Pty) Ltd.
 * Author: Gift Rantho, Founder and MD
 * Contact: 0649211745 (call/WhatsApp)
 * Website: www.drmcgi.co.za
 */

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisitUs() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-5%"]);

  return (
    <section id="visit" ref={ref} className="container py-24 text-center">
      <h2 className="font-display text-3xl text-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
        Visit Us – Attorneys in Johannesburg
      </h2>
      <p className="mt-2 text-ash">
        Our Marshall Town Office is located next to the Master of the High Court Johannesburg, 
        Khotso House, 7th floor. Let us be your legal partners.
      </p>

      <motion.div
        style={prefersReducedMotion ? undefined : { y }}
        className="w-full h-[400px] md:h-[500px] border-t border-gold/30 mt-8 rounded-xl overflow-hidden"
      >
        <iframe
          title="RKM Attorneys Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.6482626064885!2d28.03537207610897!3d-26.20811797707415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950ea3a7209195%3A0x458abb5b136ccb21!2sKhotso%20House!5e0!3m2!1sen!2sza!4v1762806304741!5m2!1sen!2sza"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <div className="mt-6">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Khotso+House,+Marshalltown,+Johannesburg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gold text-onyx font-semibold rounded-md shadow-soft hover:shadow-glow transition"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
