/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':'hsl(180, 52%, 96%)',
        'gray-cyan':'hsl(180, 31%, 95%)',
        'dark-cyan':'hsl(180, 8%, 52%)',
        'very-dark-cyan':'hsl(180, 14%, 20%)'
      },
    },
  },
  plugins: [],
}



// - Light Grayish Cyan (Background): hsl(180, 52%, 96%)
// - Light Grayish Cyan (Filter Tablets): hsl(180, 31%, 95%)
// - Dark Grayish Cyan: hsl(180, 8%, 52%)
// - Very Dark Grayish Cyan: hsl(180, 14%, 20%)