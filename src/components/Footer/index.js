import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(90deg, rgba(11,23,38,1) 0%, rgba(0,0,0,1) 100%)',
      minHeight: '100px',
      color: '#999999',
      textAlign: 'center',
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
