import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hovInput: "hsl(220, 65%, 10%)",
        ModalBackground: "hsl(220deg 53.64% 1.13%)",
      },
      backgroundImage: {
        "custom-gradient": `linear-gradient(
          to bottom,
          hsl(220, 65%, 5%) 0%,
          hsl(220, 65%, 3.52%) 50%,
          hsl(220, 65%, 10%) 100%
        )`,
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
