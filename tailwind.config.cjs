const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        brand: {
          yellow: '#D5A44E',
          yellowLight: '#DFB157',
          yellowLighten: '#F7CE6E',
          gunmetal: '#152A37',

        }
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      dropShadow:{
        '3xl': '0 62px 54px rgba(0, 0, 0, 0.3)',
      },
      boxShadow: {
       '3xl': '0px 5px 70px 0px rgba(36, 42.000000000000014, 76, 0.1)',
       '4xl': '0px 25px 80px 0px rgba(36.000000000000036, 42.000000000000064, 76.00000000000006, 0.16)',
       
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
