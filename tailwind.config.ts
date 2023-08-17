import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF096A',
        secondary: '#00ECB4',
      },
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
    },
  },
  plugins: [],
}
export default config
