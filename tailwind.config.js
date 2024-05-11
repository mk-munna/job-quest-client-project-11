const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
        PlusJakartaSans: ["Plus Jakarta Sans"],
        Jost: ["Jost"],

      },
      colors: {
        "primary": "#1CA774",
        "secondary": "#E5F4F0",
        "dark": "#0F172A",
        "heading": "#05264E",
        "Description": "#4F5E64"
      }
    },
  },
  plugins: [
    // ...
    // flowbite.plugin(),
  ]
}
