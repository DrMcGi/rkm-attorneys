/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#0b0b0b",
        charcoal: "#1a1a1a",
        bone: "#f8f3e9",
        gold: "#c6a15b",
        'gold-light': "#d4b878",
        'gold-dark': "#97783c",
        ash: "#b2a89f",
        glass: "rgba(255,255,255,0.04)"
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(198,161,91,0.4), 0 10px 30px rgba(198,161,91,0.2)"
      },
      backgroundImage: {
        marble: "url('/textures/marble-dark.jpg')",
        noise: "url('/textures/noise.png')",
        goldgrad:
          "linear-gradient(90deg, rgba(198,161,91,0) 0%, rgba(198,161,91,0.6) 50%, rgba(198,161,91,0) 100%)",
        goldradial:
          "radial-gradient(1200px 600px at 20% 0%, rgba(198,161,91,0.18), transparent 60%)"
      },
      keyframes: {
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-4px)" } },
        fadeUp: { "0%": { opacity: 0, transform: "translateY(12px)" }, "100%": { opacity: 1, transform: "translateY(0)" } }
      },
      animation: {
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
