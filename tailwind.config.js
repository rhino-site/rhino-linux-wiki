/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "nx-",
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'rhino-purple': '#8d7be4',
        'neon-purple': '#8b00e7',
        'highlighter-purple': '#9235ff',
        'dark-purple': '#13093c',
        'adwaita-dark': '#2d2d2d',
        'off-white': '#fefefe',
        'overlay': 'rgba(15, 0, 20, 0.4);',
        'site-400': '#19142d',
        'site-300': '#231e37',
        'site-200': '#373250',
        'site-100': '#554b69',
        'unicorn-magenta': '#c10080',
        'unicorn-pink': '#d404ff',
        'unicorn-purple': '#8b00e7',
        'unicorn-dark': '#26184c',
        'brand-dark': '#2d2d2d44',
        'brand-light': '#fefefe11',
        'zrhino-purple': '#8d7be4',
      },
      backgroundImage: {
        'blobs': "url('/img/blobs.png')",
        'banner': "url('/img/ecosystem.png')"
      },
      boxShadow: {
        'header-box': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      dropShadow: {
        'header-drop': '2px 4px 10px rgba(40, 30, 45, 1)',
      },
      fontFamily: {
        'serif': ['Ubuntu', 'sans-serif'],
        'mono': ['UbuntuMono', 'mono'],
      },
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '1rem',}],
      sm: ['0.875rem', {lineHeight: '1.25rem',}],
      base: ['1rem', {lineHeight: '1.5rem',}],
      btn: ['1.15rem', {lineHeight: '1.6rem',}],
      lg: ['1.125rem', {lineHeight: '1.75rem',}],
      xl: ['1.25rem', {lineHeight: '1.75rem',}],
      '2xl': ['1.5rem', {lineHeight: '2rem',}],
      '3xl': ['1.875rem', {lineHeight: '2.25rem',}],
      '4xl': ['2.25rem', {lineHeight: '2.5rem',}],
    },
  },
  plugins: [],
}
