import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F0F424",
        lilac: "#FFC5F0",
        green: "#075D44",
        black: "#070707",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
