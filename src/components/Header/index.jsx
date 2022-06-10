import { Box, Container, Typography } from '@mui/material';
import ToggleMode from './ToggleMode';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

const Header = props => {
  const { colorMode, theme } = props;

  return (
    <Box sx={{
      position: 'fixed',
      zIndex: '100',
      width: '100%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.0)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0px 0px 1.5px 0px rgba(110, 110, 110,0.5)',
    }}>
      <Container maxWidth="md">
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          px: { sm: '10px', xs: '0px' },
        }}>
          <ToggleMode colorMode={colorMode} theme={theme} />
          <Typography sx={{
            pl: '10px',
            fontSize: { sm: '12px', xs: '14px' },
            opacity: '0.5',
            borderLeft: '1px solid rgba(110, 110, 110, 0.5)',
          }}>
            #ncorradini
          </Typography>
          <MobileMenu />
          <DesktopMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
