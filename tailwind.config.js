const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.svelte",
      "./src/*.svelte",
      "./public/index.html",
    ],
    // enabled: production, // disable purge in dev
  },
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".845rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.09rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
};
