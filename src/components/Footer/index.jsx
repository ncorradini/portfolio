import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '80px',
        color: 'black',
        textAlign: 'center',
        boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
        background: 'rgba(110, 110, 110, 0.1)',
      }}>
      <Container maxWidth="md">
        <Typography color="secondary" sx={{ opacity: 0.5, fontSize: '11px' }}>
          Sitio web diseñado por Nicolás Corradini © 2022
          <br />
          》Software Developer
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
