import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-archivo-black)"],
        body: ["var(--font-space-grotesk)"],
      },
      boxShadow: {
        brutal: "8px 8px 0px #000",
      },
    },
  },
  plugins: [],
};

export default config;