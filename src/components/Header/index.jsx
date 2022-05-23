import { AppBar, Box, Container } from '@mui/material';
import ToggleMode from './ToggleMode';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Header = props => {
  const { colorMode, theme } = props;

  return (
    <AppBar sx={{ height: '50px', background: '#171717' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', px: '10px' }}>
          <ToggleMode colorMode={colorMode} theme={theme} />
          <MobileMenu />
          <DesktopMenu />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
