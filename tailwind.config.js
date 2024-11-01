/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        rentifyHubTheme: {
          ...require("daisyui/src/theming/themes")["cupcake"],
          "primary": "#fc7825",
          
          ".btn-primary": {
            "color": "#fff"
          },

          ".btn-outline.btn-primary:hover": {
            "color": "#fff"
          }
        },
      },
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
