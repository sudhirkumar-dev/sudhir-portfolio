import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-hover": "var(--surface-hover)",
        ink: "var(--ink)",
        mute: "var(--mute)",
        line: "var(--line)",
        "line-bright": "var(--line-bright)",
        accent: "var(--accent)",
        "accent-violet": "var(--accent-violet)",
        "accent-cyan": "var(--accent-cyan)",
        soft: "var(--soft)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter Variable", "system-ui", "sans-serif"],
        display: ["Outfit", "Plus Jakarta Sans", "Inter Variable", "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
