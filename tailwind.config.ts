import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0D1A",
        violet: "#6C47FF",
        "violet-deep": "#4D2BD6",
        cyan: "#00D4FF",
        surface: "#F8F9FF",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        panel: "2rem",
      },
      boxShadow: {
        orbital: "0 28px 100px rgba(108, 71, 255, .16)",
        panel: "0 18px 60px rgba(13, 13, 26, .06)",
      },
    },
  },
  plugins: [],
};

export default config;
