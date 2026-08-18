// Use plugin name objects to avoid importing native modules during Turbopack evaluation
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
