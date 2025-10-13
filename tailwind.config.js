/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'zen': ['Zen Maru Gothic', 'sans-serif'],
        'shippori': ['Shippori Mincho', 'serif'],
      },
      colors: {
        brand: 'var(--brand)',
        'brand-dark': 'var(--brand-dark)',
        section: 'var(--section)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        bg: 'var(--bg)',
      },
      boxShadow: {
        'card': '0 6px 18px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
