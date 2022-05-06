import { Box, Button, Container, Typography } from '@mui/material';
import skillsSVG from '../../assets/skills.svg';

const AboutMe = () => {
  return (
    <Box id="aboutme" sx={{
      pt: '80px',
      background: 'linear-gradient(90deg, rgba(0,123,234,0.05) 5%, rgba(0,0,0,0) 70%)',
    }}>
      <Container maxWidth="md">
        <Box component="section" sx={{
          display: { lg: 'flex', md: 'flex', sm: 'block' },
          minHeight: '500px',
          padding: '20px',
        }}>
          <Box sx={{
            display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
            width: '30%',
          }}>
            <img src={skillsSVG}/>
          </Box>
          <Box sx={{
            width: { lg: '60%', md: '60%', sm: '90%' },
            ml: { lg: '100px', md: '100px', sm: '0' },

          }}>
            <Typography variant="h5" color="secondary" fontWeight="medium">
              SOBRE MÍ
            </Typography>
            <Box sx={{ mt: '10px' }}>
              <Typography variant="p" color="primary" fontWeight="regular">
                Desarrollador front-end especializado en React JS
              </Typography>
            </Box>
            <Box sx={{ mt: '20px' }}>
              <Typography variant="p" fontWeight="regular">
                Sólidos conocimientos en front-end: React JS, HTML, CSS, SASS, Bootstrap, Material UI, Redux, React-Context, Formik, LazyLoad, etc...<br />
                Comprensión de los principios de diseño UI/UX.<br />
                Desarrollo back-end con Node.js, Express, MongoDB, autenticación con JWT.<br/>
                Procurador del buen código junto con el cumplimiento de los objetivos en tiempo y forma
              </Typography>
            </Box>
            <Button
              href="#contact"
              variant="outlined"
              sx={{ width: '150px', mt: '40px', mr: '10px' }}>
              Contáctame
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutMe;
