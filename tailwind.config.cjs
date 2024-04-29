/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'selector',
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
        // '2xl': '1536px',
        'sm': '640px',
        // 'md': '800px',
        '3xl': '1750px',
        '4xl': '2050px',
      },
      colors:{
        // dark: "#0D0D0D",
        dark_bg: "#0f0f0f",
        light_bg: "#f1f1f1",
        menu_hover: "#272727",
        raised_bg: "#212121",
        text_primary: "#fff",
        text_secondary: "#aaa",
        text_disabled: "#717171",
        outline: "#303030",

        searchBox_focus: "#3ea6ff",
        hover_bg: "#3d3d3d",
        
        yt_text_primary: "#f1f1f1",
        yt_text_primary_inverse: "#0f0f0f",
      },
      backgroundImage:{
        // transparent_bg: "url('../dist/img/transparent.png')",
      },
      backgroundSize: {
        // auto: 'auto',
        // cover: 'cover',
        // contain: 'contain',
        // '400%': '400% 400%'
      },
      aspectRatio: {
        // auto: 'auto',
        // square: '1 / 1',
        // video: '16 / 9',
      },
      gridTemplateColumns: {
        // 'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
      },
      fontFamily: {
        // 'text-inter': ["Inter", "sans-serif"],
        'text-youtube': ["YouTube Sans", "Arial", "sans-serif"],
        'text-roboto': ["Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        // 'button' : 'clamp(16px, 1vw, 24px) !important',
      },
      listStyleType: {
      //   none: 'none',
      //   circle: 'circle',
      //   disc: 'disc',
      //   decimal: 'decimal',
      //   square: 'square',
      //   roman: 'upper-roman',
      },
      animation: {
        // 'bannerSlide': 'bannerSlide 15s ease forwards',
        // 'onCheck': 'onCheck 0.2s ease',
      },
      keyframes: {
        // better to use direct CSS keyframes on input file base
        // 'bannerSlide': {
        //   '0%' : {'background-position': '25% 0%'},
        //   '100%' : {'background-position': '40% 80%'}
        // },

        // 'onCheck': {
        //   '0%' : {'scale': '0'},
        //   '100%' : {'scale': '1'}
        // },
      },
      boxShadow:{
        // 'top_button_shadow'     : '4px 4px 10px rgba(0, 0, 0, 0.2)',
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
        top_num_shadow: "2px 2px 0 #888,-2px -2px 0 #888, 2px -2px 0 #888, -2px 2px 0 #888, 2px 2px 0 #888;"
      },
      padding:{
        // 'container_p' : 'calc(1.5rem * 0.5)',
        // 'propertySolution_p' : 'clamp(40px, 3.3vw, 90px) clamp(24px, 1.66vw, 48px)',
      },
      margin:{
        // 'heading_margin_bottom' : 'clamp(32px, 2.5vw, 64px)',
      },
      width:{
        // 'bannerSlider_card_bg' : 'calc(100% + calc(1.5 * calc(1.5rem * 0.5)))',
        // 'tel_icon' : 'clamp(24px, 10vw, 38px)',
        15: "60px",
        18: "72px"
      },
      height:{
        // 'insidePageBanner' : 'clamp(350px, 26.042vw, 600px)',
      },
      maxWidth:{
        // 'bannerSlider_card_bg' : 'calc(85% + calc(1.5rem * 0.5))',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

