import ToggleColorMode from './Layout/Layout';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
import Proyects from './components/Proyects';
import Contact from './components/Contact';
import ScrollTop from './components/ScrollTop';
import { Box, Fab, Toolbar } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const App = () => {
  return (
    <ToggleColorMode>
      <Box sx={{ height: '0px' }}>
        <Toolbar id="back-to-top-anchor" />
      </Box>
      <Presentation />
      <AboutMe />
      <Proyects />
      <Contact />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ToggleColorMode>
  );
};

export default App;
