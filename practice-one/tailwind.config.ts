import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          5: "#FEF3F5",
          10: "#FFEDE7",
          25: "#FFE8EC",
          50: "#FDC4CD",
          75: "#FB899B",
          100: "#F81539",
        },
        secondary: {
          5: "#FFF5F2",
          10: "#FFEDE7",
          25: "#FED0C1",
          50: "#FDA083",
          75: "#FD7246",
          100: "#FC4308",
        },
        dark: {
          5: "#ECEDF4",
          10: "#E3E5EB",
          25: "#C7C6CB",
          50: "#999598",
          75: "#6B6365",
          100: "#3E3232",
        },
        black: {
          5: "#F2F2F2",
          10: "#BFBFBF",
          25: "#7F7F7F",
          50: "#999598",
          75: "#404040",
          100: "#000",
        },
        white: {
          5: "#162447",
          10: "#222F50",
          25: "#47526E",
          50: "#858C9E",
          75: "#C2C5CE",
          100: "#FFF",
        },
      },
      fontSize: {
        h6: "13px",
        h5: "16px",
        h4: "20px",
        h3: "25px",
        h2: "31px",
        h1: "36px",
      },
    },
  },
  plugins: [],
};
export default config;
