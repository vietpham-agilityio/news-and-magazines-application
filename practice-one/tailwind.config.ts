import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/ui/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  theme: {
    extend: {
      screens: {
        md: '744px',
      },
      container: {
        screens: {
          sm: '358px',
          md: '604px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1512px',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          5: '#FEF3F5',
          10: '#FFEDE7',
          25: '#FFE8EC',
          50: '#FDC4CD',
          75: '#FB899B',
          90: '#FA506B',
          100: '#F81539',
        },
        secondary: {
          5: '#FFF5F2',
          10: '#FFEDE7',
          25: '#FED0C1',
          50: '#FDA083',
          75: '#FD7246',
          100: '#FC4308',
        },
        dark: {
          5: '#ECEDF4',
          10: '#E3E5EB',
          25: '#C7C6CB',
          50: '#999598',
          75: '#6B6365',
          90: '#5D5658',
          100: '#3E3232',
        },
        black: {
          5: '#F2F2F2',
          10: '#BFBFBF',
          25: '#7F7F7F',
          50: '#999598',
          75: '#404040',
          90: '#ECEBEB',
          100: '#000',
        },
        white: {
          5: '#162447',
          10: '#222F50',
          25: '#47526E',
          50: '#858C9E',
          75: '#C2C5CE',
          90: '#F5F5F5',
          100: '#FFF',
        },
        blueLinear: {
          0: '#2CA5E0',
          100: '#67C9F5',
        },
        sunSet: {
          0: '#F45C9F',
          100: '#FF7563',
        },
      },
      fontSize: {
        p: '12px',
        xs: '13px',
        xsm: '14px',
        sm: '16px',
        md: '20px',
        lg: '25px',
        xl: '31px',
        xxl: '36px',
      },
      spacing: {
        1.5: '6px',
        2.5: '10px',
        7.5: '30px',
        12.5: '50px',
        15: '60px',
        17.5: '70px',
        25: '100px',
        30: '120px',
        46.5: '186px',
        47.5: '190px',
        50: '200px',
        84.5: '338px',
        85: '340px',
        87.5: '350px',
        90: '360px',
        97.5: '390px',
        100: '400px',
        459: '459px',
      },
      keyframes: {
        loadingAnimation: {
          '0%': { width: '0%' },
          '50%': { width: '50%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        loading: 'loadingAnimation 1s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
