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
          main: '#1E7CE8',
        },
        secondary: {
          main: '#1A2027',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#18191c',
        },
        primary: {
          main: '#1E7CE8',
        },
        secondary: {
          main: '#F2F2F2',
        },
      }),
  },
});
