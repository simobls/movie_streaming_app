module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          black: "var(--black)",
          white: "var(--white)",
          purple100: "var(--purple-100)",
          purple200: "var(--purple-200)",
          purple300: "var(--purple-300)",
          purple400: "var(--purple-400)",
        },
      },
    },
    plugins: [],
  }
  