/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:'jit',
  theme: {
    extend: {
      colors:{
        blue:"#2CBCE9",
        red:"#DC4492",
        yellow:"#FDCC49",
        grey:"#ededed",
        "deep-blue":"#010026",
        "dark-gray":"#757575",
        "opaque-black":"rgba(0,0,0,0.35)"
      },
      backgroundImage:(theme)=>({
        "gradient-rainbow":
        "linear-gradient(81.66deg,#00b5ee 7.21%,#ff45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue":
        "linear-gradient(90deg,#24CBFF 14.53%,#FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily:{
        playfair:["Playfair Display", "serif"],
        opensans:["Open Sans","sans-serif"]
      },
      content:{
        brush:"url('./assets/backr.jpg')",
        pic:"url('./assets/Pro.jpeg')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px"
    }
  },
  plugins: [],
}

