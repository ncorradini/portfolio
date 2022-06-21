import { Box, Container } from '@mui/material';
import Personal from './Personal';
import devPNG from '../../assets/dev.png';

const Presentation = () => {
  return (
    <Box sx={{
      background: 'linear-gradient(90deg, rgba(0,123,234,0.05) 5%, rgba(0,0,0,0) 100%)',
    }}>
      <Container maxWidth="md" >
        <Box component="section" sx={{
          display: 'flex',
          alignItems: 'center',
          height: '580px',
          p: { sm: '80px 20px 20px 20px', xs: '110px 20px 20px 5px' },
        }}>
          <Personal />
          <Box
            className="animate__animated animate__fadeIn"
            sx={{
              display: { md: 'block', xs: 'none' },
              mt: '40px',
              ml: '40px',
            }}>
            <img src={devPNG} style={{
              width: '300px',
              opacity: '0.5',
            }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Presentation;
