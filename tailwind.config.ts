import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        primary: "#7c3aed",
        secondary: "#22c55e",
        accent: "#9333ea",
        text: "#ffffff",
        subtext: "#9ca3af",
        "card-bg": "#111111",
        "card-border": "#1f1f1f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-glow":
          "radial-gradient(ellipse at center, #7c3aed33 0%, transparent 70%)",
        "hero-gradient":
          "linear-gradient(135deg, #0b0b0b 0%, #130a1e 50%, #0b0b0b 100%)",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "gradient-y": "gradient-y 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "top center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(124, 58, 237, 0.4)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.4)",
        "glow-lg": "0 0 40px rgba(124, 58, 237, 0.3)",
        card: "0 4px 24px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
