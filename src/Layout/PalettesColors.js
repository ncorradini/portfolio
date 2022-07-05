export const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#fff',
        },
        primary: {
          main: '#26b0ff',
        },
        secondary: {
          main: '#18191C',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#232529',
        },
        primary: {
          main: '#26b0ff',
        },
        secondary: {
          main: '#F2F2F2',
        },
      }),
  },
});
