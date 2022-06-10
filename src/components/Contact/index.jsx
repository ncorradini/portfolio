import { Box, Container, Typography } from '@mui/material';
import ContactForm from './ContactForm/ContactForm';
import Social from './Social/Social';

const Contact = () => {
  return (
    <Box sx={{
      pt: '80px',
      borderTop: '2px solid rgba(255, 255, 255, 0.02)',
      background: 'linear-gradient(90deg, rgba(0,0,0,0.01) 5%, rgba(0,123,234,0.05) 100%)',
    }}>
      <Container maxWidth="md">
        <Box component="section" id="contact" sx={{
          minHeight: { sm: '530px', xs: '480px' },
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Typography
            variant="h5"
            color="secondary"
            fontWeight="medium"
            textAlign={{ lg: 'start', md: 'start', sm: 'center', xs: 'center' }}
          >
            CONTÁCTAME
          </Typography>

          <Box sx={{
            display: { lg: 'flex', md: 'flex', sm: 'block', xs: 'block' },
            mt: '30px',
          }}>
            <Social />
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
