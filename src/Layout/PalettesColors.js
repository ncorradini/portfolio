export const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#F2F2F2',
        },
        primary: {
          main: '#007BEA',
        },
        secondary: {
          main: '#1A2027',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#070E16',
        },
        primary: {
          main: '#007BEA',
        },
        secondary: {
          main: '#fff',
        },
      }),
  },
});
