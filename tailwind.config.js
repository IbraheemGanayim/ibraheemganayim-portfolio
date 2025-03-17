/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0055FF",
        "primary-dark": "#0044CC",
        secondary: "#FF5500",
        "accent-1": "#7B61FF",
        "accent-2": "#00CCBB",
        "accent-3": "#FFC700",
        dark: "#121212",
        "dark-light": "#1E1E1E",
        light: "#F8F8F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, rgba(123, 97, 255, 0.12) 0%, rgba(0, 204, 187, 0.12) 100%)",
        "card-gradient": "linear-gradient(135deg, #0055FF 0%, #7B61FF 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      boxShadow: {
        custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
        glow: "0 0 15px rgba(123, 97, 255, 0.5)",
        card: "0 10px 30px -5px rgba(0, 0, 0, 0.1)",
        button: "0 5px 15px rgba(0, 85, 255, 0.3)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backdropFilter: {
        blur: "blur(10px)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
