/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    Primary: "#FCC54B",
                    PrimaryLite: "#FFDD94",
                    Secondary: "#191919",
                    Background: '#121212'
               }
          },
     },
     plugins: [],
}
