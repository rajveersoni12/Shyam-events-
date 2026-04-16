/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9",     // Soft White
        section: "#F1EAE4",        // Light Beige
        primary: "#C1121F",        // Elegant Red
        accent: "#C9A66B",         // Champagne Gold
        textPrimary: "#1C1C1C",    // Dark Gray
        textSecondary: "#6B6B6B",  // Medium Gray
      },
    },
  },
  plugins: [],
};