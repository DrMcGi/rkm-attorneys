export default function VisitUs() {
  return (
    <section id="visit" className="relative bg-charcoal/40 border-y border-gold/20">
      <div className="container py-16 text-center">
        <h2 className="font-display text-3xl">Visit Us</h2>
        <p className="mt-4 text-ash max-w-2xl mx-auto">
          Our Marshall Town Office is located next to the Master of the High Court Johannesburg, 
          Khotso House, 7th floor. Let us be your legal partners.
        </p>
      </div>

      <div className="w-full h-[400px] md:h-[500px] border-t border-gold/30">
        <iframe
          title="RKM Attorneys Location"
          src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container py-8 text-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Khotso+House,+Marshalltown,+Johannesburg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 mt-4 rounded-full bg-gold text-onyx font-semibold shadow-soft hover:shadow-glow transition"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
}
