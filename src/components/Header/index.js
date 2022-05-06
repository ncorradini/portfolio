import { AppBar, Box, Button, Container } from '@mui/material';
import ElevationScroll from '../ElevationScroll';
import ToggleMode from './ToggleMode';

const Header = props => {
  const { colorMode, theme } = props;

  const sections = ['aboutme', 'proyects', 'contact'];

  const tradSection = text => {
    switch (text) {
      case 'aboutme': return 'Sobre mí';
      case 'proyects': return 'Proyectos';
      case 'contact': return 'Contacto';
    }
  };

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{ height: '50px' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', px: '10px' }}>
            <ToggleMode colorMode={colorMode} theme={theme} />
            {/*  Menu List */}
            <Box sx={{
              display: { md: 'flex', sm: 'flex', xs: 'none' },
              width: '100%',
              justifyContent: 'flex-end',
            }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  disableRipple="true"
                  href={`#${section}`}
                  sx={{
                    color: '#fff',
                    fontSize: '12px',
                    my: 1.2,
                    px: 2,
                    display: 'block',
                    transition: '0.5s',
                    '&.MuiButtonBase-root:hover': {
                      bgcolor: 'transparent',
                      opacity: '0.5',
                    },
                  }}>
                  {tradSection(section)}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
