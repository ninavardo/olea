/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Sampled from Olea brand sheet — change only here / in CSS variables
        brand: {
          primary: 'rgb(var(--brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--brand-secondary) / <alpha-value>)',
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          ink: 'rgb(var(--brand-ink) / <alpha-value>)',
          paper: 'rgb(var(--brand-paper) / <alpha-value>)',
          // Fixed light cream for text on dark olive / photo overlays (does not swap in dark mode)
          cream: 'rgb(var(--brand-cream) / <alpha-value>)',
        },
      },
      fontFamily: {
        // English: Libre Caslon Condensed (Google). Georgian: MCh NeoBau (local).
        heading: [
          '"Libre Caslon Condensed"',
          '"MCh NeoBau"',
          'Georgia',
          'serif',
        ],
        body: [
          '"Libre Caslon Condensed"',
          '"MCh NeoBau"',
          'Georgia',
          'serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgb(28 33 18 / 0.18)',
      },
    },
  },
  plugins: [],
}
