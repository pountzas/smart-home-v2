import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // graph colors
        blue_custom: "#0094FF",
        lightBlue_custom: "#2DD1E7",
        green_custom: "#00A590",
        red_custom: "#FF6A6A",
        yellow_custom: "#FFD86E",
        purple_custom: "#FFD0E1",
        // sensors animation gradient lines
        gradFrom: "#333333/20%",
        gradVia: "#967af3",
        gradTo: "#7165e3",
        //sensors status text color
        grid: "#c83838", //red
        active: "#256494", //blue
        inactive: "#afbac3", //grey
        // secondary: "#256494", //blue
        // UI colors
        primary: "#16191B", // full black
        secondary: "#1A1D1F", // dark grey
        tertiary: "#222629", // mid grey
        quaternary: "#2A2F32",
        buttonsPrimary: "#101314", // dark grey
        buttonsSecondary: "#373D42",
        textPrimary: "#FFFFFF",
        textSecondary: "#373D42", // light grey
        textTertiary: "#9C98B0", // light grey
        textQuaternary: "#70C3FF", // light blue
        borderPrimary: "#373D42", //dark
        borderSecondary: "#50626A", //mid grey
        borderTertiary: "#373D42",
        modalPrimary: "#222629", // dark grey
        modalSecondary: "#2A2F32", // mid grey
        // home cyrcle border
        homePrimary: "#967AF3", // purple
        homeSecondary: "#0F66FB", // blue
        homeTertiary: "#49D191" // green
      },
      animation: {
        animDirectionRight: "rotate 3s linear infinite",
        animDirectionLeft: "rotate 3s linear infinite reverse",
        animLoader: "gradient 2s linear infinite"
      },
      keyframes: {
        rotate: {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            // rotate: "360deg"
            transform: "rotate(360deg)"
          }
        },
        rotate2: {
          from: {
            transform: "rotate(0deg)"
          },
          to: {
            transform: "rotate(-360deg)"
          }
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
        28: "repeat(28, minmax(0, 1fr))",
        32: "repeat(32, minmax(0, 1fr))",
        36: "repeat(36, minmax(0, 1fr))",
        40: "repeat(40, minmax(0, 1fr))"
      },
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
        28: "repeat(28, minmax(0, 1fr))",
        32: "repeat(32, minmax(0, 1fr))",
        36: "repeat(36, minmax(0, 1fr))",
        40: "repeat(40, minmax(0, 1fr))"
      },
      gridColumn: {
        15: "span 15",
        16: "span 16",
        19: "span 19",
        20: "span 20",
        23: "span 23",
        24: "span 24",
        27: "span 27",
        28: "span 28",
        31: "span 31",
        32: "span 32",
        35: "span 35",
        36: "span 36",
        39: "span 39",
        40: "span 40"
      },
      gridRow: {
        15: "span 15",
        16: "span 16",
        19: "span 19",
        20: "span 20",
        23: "span 23",
        24: "span 24",
        27: "span 27",
        28: "span 28",
        31: "span 31",
        32: "span 32",
        35: "span 35",
        36: "span 36",
        39: "span 39",
        40: "span 40"
      },
      gridColumnStart: {
        15: "15",
        16: "16",
        19: "19",
        20: "20",
        23: "23",
        24: "24",
        27: "27",
        28: "28",
        31: "31",
        32: "32",
        35: "35",
        36: "36",
        39: "39",
        40: "40"
      },
      gridColumnEnd: {
        15: "span 15",
        16: "span 16",
        19: "span 19",
        20: "span 20",
        23: "span 23",
        24: "span 24",
        27: "span 27",
        28: "span 28",
        31: "span 31",
        32: "span 32",
        35: "span 35",
        36: "span 36",
        39: "span 39",
        40: "span 40"
      },
      gridRowStart: {
        15: "15",
        16: "16",
        19: "19",
        20: "20",
        23: "23",
        24: "24",
        27: "27",
        28: "28",
        31: "31",
        32: "32",
        35: "35",
        36: "36",
        39: "39",
        40: "40"
      },
      gridRowEnd: {
        15: "span 15",
        16: "span 16",
        19: "span 19",
        20: "span 20",
        23: "span 23",
        24: "span 24",
        27: "span 27",
        28: "span 28",
        31: "span 31",
        32: "span 32",
        35: "span 35",
        36: "span 36",
        39: "span 39",
        40: "span 40"
      }
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwindcss-border-gradients")()
  ]
};
export default config;
