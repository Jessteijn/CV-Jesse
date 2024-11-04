import type { Config } from "tailwindcss";
import tailwindCss3d from "tailwindcss-3d";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        about: "var(--color-about)",
        experience: "var(--color-experience)",
        extra: "var(--color-extra)",
        education: "var(--color-education)",
        skills: "var(--color-skills)",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(360deg) scale(0)" },
          "100%": { transform: "rotateY(0deg) scale(1)" },
        },
        move: {
          "0%": { transform: "translate(-200px, 0px)" },
          "100%": { transform: "translate(0px, 0px)" },
        },
        "move-r": {
          "0%": { transform: "translate(200px, 0px)" },
          "100%": { transform: "translate(0px, 0)" },
        },
      },
      animation: {
        flip: "flip 1s ease-in-out",
        move: "move 1s",
        "move-r": "move-r 1s",
      },
      fontSize: {
        "15em": "15em",
      },
      inset: {
        "1/2-minus-10px": "calc(50% - 10px)",
      },
      translate: {
        "2px": "2px",
      },
      borderWidth: {
        10: "10px",
        20: "20px",
      },
      boxShadow: {
        edu: "10px 10px 0px #333333",
      },
      scale: {
        140: "1.4",
        130: "1.3",
      },
      rotate: {
        360: "360deg",
        720: "720deg",
      },
      margin: {
        "2px": "2px",
      },
    },
  },
  plugins: [tailwindCss3d({ legacy: true })],
};
export default config;
