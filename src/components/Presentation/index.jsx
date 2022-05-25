import { Box, Container } from '@mui/material';
import Personal from './Personal';

const Presentation = () => {
  return (
    <Container maxWidth="md">
      <Box component="section" sx={{
        display: 'flex',
        alignItems: 'center',
        height: '580px',
        p: '80px 20px 20px 20px',
      }}>
        <Personal />
        <Box sx={{
          display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },
          width: '350px',
          mt: '30px',
        }}>
        </Box>
      </Box>
    </Container>
  );
};

export default Presentation;
