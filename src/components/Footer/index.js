import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '100px',
        color: '#999999',
        textAlign: 'center',
        boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
      }}>
      <Container maxWidth="md">
        <Typography fontSize="small">
          Sitio web diseñado por Nicolás Corradini © 2022
          <br />
          Desarrollador Front-end
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
