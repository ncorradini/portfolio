import { Box, Container } from '@mui/material';
import Personal from './Personal';
import devPNG from '../../assets/dev.png';

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
          mt: '80px',
        }}>
          <img src={devPNG} />
        </Box>
      </Box>
    </Container>
  );
};

export default Presentation;
