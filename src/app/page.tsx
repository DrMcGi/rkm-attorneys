"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./components/Hero";
import AttorneyCard from "./components/AttorneyCard";
import PracticeGrid from "./components/PracticeGrid";
import InsightsCarousel from "./components/InsightsCarousel";
import VisitUs from "./components/VisitUs";
import OurSpace from "./components/OurSpace";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Accreditations from "./components/Accreditations";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const }
  }
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Leadership */}
      <motion.section
        id="attorneys"
        className="container py-24 bg-onyx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2 className="font-display text-3xl text-center text-gold drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]">
          Leadership
        </h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <AttorneyCard
            name="Gomolemo Links"
            title="Director of Sesedi and Links Pty LTD • FISCA Member • Estate Administration Expert"
            bio="He spearheads our estate administration department, ensuring efficient and professional service for deceased estates."
          />
          <AttorneyCard
            name="Director, RKM Attorneys and Associates Incorporated"
            title="LLB, University of Limpopo (2019) • LEAD Polokwane • Articles at Popela Maake Attorneys • Former Master of the High Court (2 years)"
            bio="Specializes in estate matters and offers a broad range of legal services across litigation, labour, and RAF."
          />
        </div>
      </motion.section>

      {/* Practice Areas */}
      <motion.section
        className="py-24 bg-charcoal/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <PracticeGrid />
      </motion.section>

      {/* Insights */}
      <motion.section
        className="py-24 bg-onyx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <InsightsCarousel />
      </motion.section>

      {/* Visit Us */}
      <motion.section
        className="py-24 bg-charcoal/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <VisitUs />
      </motion.section>

      {/* Our Space */}
      <motion.section
        className="py-24 bg-onyx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <OurSpace />
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-24 bg-charcoal/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <WhyChooseUs />
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="py-24 bg-onyx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Testimonials />
      </motion.section>

      {/* Accreditations */}
      <motion.section
        className="py-24 bg-charcoal/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <Accreditations />
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <CTA />
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-24 bg-onyx"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <ContactForm />
      </motion.section>
    </>
  );
}
