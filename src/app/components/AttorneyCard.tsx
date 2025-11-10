"use client";

import { ReactNode } from "react";

interface Props {
  name: string;
  title: string;
  bio: string;
  icon?: ReactNode;
  imageSrc?: string; // ✅ additive: optional attorney photo
}

export default function AttorneyCard({ name, title, bio, icon, imageSrc }: Props) {
  return (
    <div
      className="group relative bg-glass border border-gold/40 rounded-2xl p-8 
                 shadow-[0_0_25px_rgba(255,215,0,0.15)] 
                 hover:shadow-[0_0_45px_rgba(255,215,0,0.6)] 
                 hover:scale-105 transition transform-gpu"
    >
      {/* Glow aura */}
      <div className="absolute inset-0 transition opacity-0 rounded-2xl bg-gradient-to-r from-gold/20 to-transparent group-hover:opacity-100 blur-xl" />

      {/* Content */}
      <div className="relative z-10">
        {icon && <div className="mb-4 text-4xl text-gold">{icon}</div>}

        {/* ✅ Additive: optional attorney image with alt text */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={`Attorney ${name} – ${title}`}
            className="object-cover w-24 h-24 mx-auto mb-4 border-2 rounded-full border-gold/40 shadow-soft"
          />
        )}

        <h3 className="text-2xl transition font-display text-bone group-hover:text-gold">
          {name}
          <span
            className="block h-[2px] w-0 bg-gold mt-1 
                       group-hover:w-full transition-all duration-500 
                       shadow-[0_0_10px_rgba(255,215,0,0.8)]"
          ></span>
        </h3>
        <p className="mt-2 text-sm text-ash">{title}</p>
        <p className="mt-4 text-bone">{bio}</p>
      </div>
    </div>
  );
}
