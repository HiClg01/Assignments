/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode (e.g., <html class="dark">)
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ✅ Make sure these paths match your project structure
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // You don't need to define `background: #000000` unless you're using it as a named color
      // Instead, just use 'bg-black' in your Tailwind classes
    },
  },
  plugins: [],
};
