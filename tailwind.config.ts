import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "312px",
        md: "644px",
        lg: "848px",
        xl: "726px",
        "2xl": "1256px",
      },
    },
  },
  plugins: [],
};
export default config;
