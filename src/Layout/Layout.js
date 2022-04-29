import { useMemo, useState } from 'react';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { getPalette } from './PalettesColors';
import Header from '../components/Header';

const ToggleColorMode = (props) => {
  const [mode, setMode] = useState('light');

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
      <Container maxWidth="md">
        <Header colorMode={colorMode} theme={theme} />
        {props.children}
      </Container>
    </ThemeProvider>
  );
};

export default ToggleColorMode;
