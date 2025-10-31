import { FaBalanceScale, FaUserShield, FaHandshake, FaCrown } from "react-icons/fa";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <FaUserShield className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />,
      title: "Trust",
      desc: "Decades of combined experience and a reputation for integrity."
    },
    {
      icon: <FaBalanceScale className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />,
      title: "Expertise",
      desc: "Specialists in estate administration, litigation, labour, and RAF matters."
    },
    {
      icon: <FaHandshake className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />,
      title: "Accessibility",
      desc: "Direct WhatsApp booking and a central Johannesburg office."
    },
    {
      icon: <FaCrown className="text-gold text-4xl drop-shadow-[0_0_15px_rgba(255,215,0,0.7)]" />,
      title: "Legacy",
      desc: "Building transparent community impact and lasting client relationships."
    }
  ];

  return (
    <section id="why" className="container py-24">
      <h2 className="font-display text-3xl text-center text-bone drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
        Why Choose Us
      </h2>
      <div className="mt-12 grid md:grid-cols-4 gap-8">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-glass border border-gold/30 rounded-xl p-6 text-center
                       shadow-[0_0_20px_rgba(255,215,0,0.15)]
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]
                       hover:scale-105 transition"
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="font-display text-xl text-bone">{p.title}</h3>
            <p className="mt-2 text-ash text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
