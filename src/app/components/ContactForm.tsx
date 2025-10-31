"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  };

  return (
    <section id="contact" className="container py-16">
      <h2 className="font-display text-2xl">Contact</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <div className="bg-glass border border-gold/20 rounded-xl p-6">
          <p className="text-ash">
            Email:{" "}
            <a href="mailto:Info@rkmattorneysinc.co.za" className="hover:text-gold">
              Info@rkmattorneysinc.co.za
            </a>
          </p>
          <p className="mt-2 text-ash">
            Visit us at our Marshall Town Office, next to the Master of the High Court Johannesburg, 
            Khotso House, 7th floor. Let us be your legal partners.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-glass border border-gold/20 rounded-xl p-6">
          <div className="grid grid-cols-1 gap-4">
            <label className="text-sm">
              Full name
              <input
                className="mt-1 bg-onyx border border-gold/30 rounded-md px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-gold/60"
                placeholder="Your full name"
                required
              />
            </label>
            <label className="text-sm">
              Email
              <input
                className="mt-1 bg-onyx border border-gold/30 rounded-md px-4 py-3 w-full"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="text-sm">
              Phone
              <input
                className="mt-1 bg-onyx border border-gold/30 rounded-md px-4 py-3 w-full"
                placeholder="+27 ..."
              />
            </label>
            <label className="text-sm">
              Your matter
              <textarea
                className="mt-1 bg-onyx border border-gold/30 rounded-md px-4 py-3 w-full"
                rows={4}
                placeholder="Briefly describe your matter"
                required
              />
            </label>
            <button
              className="mt-2 px-5 py-3 bg-linear-to-r from-gold to-gold/80 text-onyx font-medium rounded-md shadow-soft hover:shadow-glow transition disabled:opacity-60"
              disabled={status !== "idle"}
            >
              {status === "idle" && "Request consultation"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Sent"}
            </button>
          </div>
          <p className="mt-3 text-xs text-ash">
            By submitting, you acknowledge this does not create an attorney–client relationship.
          </p>
        </form>
      </div>
    </section>
  );
}
