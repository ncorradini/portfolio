import { Box, Container } from '@mui/material';
import Personal from './Personal';
import devPNG from '../../assets/dev.png';

const Presentation = () => {
  return (
    <Box sx={{
      background: 'linear-gradient(90deg, rgba(0,123,234,0.05) 5%, rgba(0,0,0,0) 100%)',
    }}>
      <Container maxWidth="md">
        <Box component="section" sx={{
          display: 'flex',
          alignItems: 'center',
          height: '580px',
          p: '80px 20px 20px 20px',
        }}>
          <Personal />
          <Box sx={{
            display: { md: 'block', xs: 'none' },
            width: '350px',
            mt: '40px',
          }}>
            <img src={devPNG} style={{
              width: '300px',
              opacity: '0.8',
            }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Presentation;
