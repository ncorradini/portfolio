import { useMemo, useState, createContext } from 'react';
import { Container, createTheme, CssBaseline, IconButton } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { getPalette } from './PalettesColors';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {props.children}
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
