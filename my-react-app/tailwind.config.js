/** @type {import('tailwindcss').Config} */
module.exports = {
  // This section tells Tailwind which files to scan for class names.
  // We include all JSX files in the 'src' directory.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // This sets up the dark mode based on the presence of the 'dark' class.
  // The React component's `toggleDarkMode` function adds this class to the body.
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}