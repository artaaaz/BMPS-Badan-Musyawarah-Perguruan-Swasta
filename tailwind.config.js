/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': 'var(--color-navy-deep)',
        navy: 'var(--color-navy)',
        'blue-royal': 'var(--color-blue-royal)',
        'blue-medium': 'var(--color-blue-medium)',
        'blue-light': 'var(--color-blue-light)',
        'off-white': 'var(--color-off-white)',
        'gray-light': 'var(--color-gray-light)',
        'status-active': 'var(--color-status-active)',
        'status-upcoming': 'var(--color-status-upcoming)',
        'status-closed': 'var(--color-status-closed)',
      },
      boxShadow: {
        'navy-deep': '0 10px 30px rgba(11,31,77,0.06)',
      },
    },
  },
  plugins: [],
};
