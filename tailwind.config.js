module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#B08CD6',
          500: '#3A187F',
          900: '#2C1260',
        },
        secondary: {
          100: '#D8C2F8',
          500: '#BA99F5',
          900: '#9C70F2',
        },
        black: '#000000',
        white: '#FFFFFF',
        bgColor:
          'conic-gradient(from 180deg at 50% 49.1%, #E7EEFF 0deg, #F5F1FD 181.8deg, #FEF9F1 309.6deg, #E7EEFF 360deg)',
      },
      backgroundImage: {
        bgColor:
          'conic-gradient(from 180deg at 50% 49.1%, #E7EEFF 0deg, #F5F1FD 181.8deg, #FEF9F1 309.6deg, #E7EEFF 360deg)',
      },
      fontSize: {
        h1: ['4.5rem', '5.5rem'],
        h2: ['3.5rem', '4rem'],
        h3: ['2.25rem', '2.625rem'],
        h4: ['1.75rem', '2.125rem'],
        h5: ['1.25rem', '1.5rem'],
        paragraph: ['0.875rem', '1.125rem'],
        button: ['1.125rem', '1.5rem'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      fontFamily: {
        roundoBold: ['Roundo-Bold', 'sans-serif'],
        roundoSemiBold: ['Roundo-SemiBold', 'sans-serif'],
        satoshi: ['Satoshi-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
