import { useMemo, useState } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { getPalette } from './PalettesColors';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ToggleColorMode = (props) => {
  const vw = screen.width;
  const [mode, setMode] = useState(vw < 400 ? 'dark' : 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme(getPalette(mode)),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header colorMode={colorMode} theme={theme} />
      {props.children}
      <Footer />
    </ThemeProvider>
  );
};

export default ToggleColorMode;
