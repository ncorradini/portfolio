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
      <AppBar sx={{ background: 'linear-gradient(90deg, rgba(0,123,234,0.05) 5%, rgba(0,0,0,0.5) 70%)' }}>
        <Container maxWidth="md">
          <Box sx={{ display: 'flex', px: '10px' }}>
            <ToggleMode colorMode={colorMode} theme={theme} />

            {/*  Menu List */}
            <Box sx={{
              display: { md: 'flex', sm: 'flex', xs: 'flex' },
              width: '100%',
              justifyContent: 'flex-end',
            }}>
              {sections.map((section) => (
                <Button
                  size="small"
                  key={section}
                  disableRipple="true"
                  href={`#${section}`}
                  sx={{
                    color: '#fff',
                    my: 2,
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
