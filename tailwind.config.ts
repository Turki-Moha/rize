import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // brand colors
        'cyan-50': '#346C6F',
        'cyan-100': '#5E8E89',
        'cyan-200': '#4FD4C0',
        'cyan-300': '#99F9EA',

        // essential colors
        'dark-red': '#823336',
        'light-red': '#EF4949',
        'green': '#5BC464',

        // special colors
        'purple': '', // Specify a valid color code or remove if not used
        'blue': '#359DEE',
        'yellow': '#F9D499',
        'dark-yellow': '#EFBF46',

        // monochrome
        'white': '#FFFFFF',
        'white-100': '#F2F3F5',
        'white-200': '#DCDEE1',
        'white-500': '#88898A',
        'white-600': '#606060',
        'white-700': '#404248',
        'white-750': '#242832',
        'white-800': '#212328',
        'white-850': '#161D22',
        'white-900': '#081212',
        'white-950': '#000000',
      },
    },
  },
  plugins: [],
};
export default config;
