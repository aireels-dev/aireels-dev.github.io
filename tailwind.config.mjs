/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tech-black': '#1a1a1a',
        'minimal-white': '#fafafa',
        'function-blue': '#0066cc',
        'success-green': '#00d084',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'system': ['system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}