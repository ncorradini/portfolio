import ToggleMode from './ToggleMode';
import { Box, Button, Container } from '@mui/material';

const Header = ({ colorMode, theme }) => {
  const sections = ['aboutme', 'proyects', 'contact'];

  const tradSection = text => {
    switch (text) {
      case 'aboutme': return 'Sobre mí';
      case 'proyects': return 'Proyectos';
      case 'contact': return 'Contacto';
    }
  };

  return (
    <Container maxWidth="md">
      <Box component="header" sx={{ display: 'flex', marginTop: '20px', px: '10px' }}>
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
              color="secondary"
              disableRipple="true"
              href={`#${section}`}
              sx={{
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
  );
};

export default Header;
