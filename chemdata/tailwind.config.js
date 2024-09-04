module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    require("tw-elements/plugin.cjs")
  ],
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
}