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
        light: "#F5F5F5",
      },
      boxShadow: {
        "autofill-light": "inset 0 0 0px 1000px #E9E9E9",
        "autofill-dark": "inset 0 0 0px 1000px #141414",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-text-fill"),
  ],
};
export default config;
