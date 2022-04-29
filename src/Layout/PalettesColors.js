export const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#EFEFEF',
        },
        primary: {
          main: '#AC227B',
        },
        secondary: {
          main: '#2a3443',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#02131B',
        },
        primary: {
          main: '#EDAF37',
        },
        secondary: {
          main: '#fff',
        },
      }),
  },
});
