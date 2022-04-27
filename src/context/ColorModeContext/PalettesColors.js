export const getPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#4faead',
        },
        secondary: {
          main: '#2a3443',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#202833',
          paper: '#2a3443',
        },
        primary: {
          main: '#5cdbd4',
        },
        secondary: {
          main: '#fff',
        },
      }),
  },
});
