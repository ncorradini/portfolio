import { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { Box, Button, Container, Typography } from '@mui/material';
import infoPNG from '../../assets/info.png';

const AboutMe = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <Box
      id="aboutme"
      ref={ref}
      sx={{
        pt: '80px',
        borderTop: '2px solid rgba(255, 255, 255, 0.02)',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.01) 5%, rgba(0,123,234,0.05) 100%)',
      }}>
      <Container maxWidth="md" sx={{ pl: '5px' }}>
        {onScreen &&
        <Box component="section" sx={{
          display: { lg: 'flex', md: 'flex', sm: 'block' },
          minHeight: '500px',
          padding: '20px',
        }}>
          <Box
            className="animate__animated animate__fadeInUp"
            sx={{
              display: { md: 'block', sm: 'none', xs: 'none' },
              width: '30%',
              pt: '80px',
            }}>
            <img src={infoPNG} style={{
              width: '300px',
              opacity: '0.5',
            }} />
          </Box>
          <Box
            className="animate__animated animate__fadeInRight"
            sx={{
              width: { md: '60%', sm: '100%' },
              ml: { md: '120px', xs: '0px' },
            }}>
            <Typography variant="h5" color="secondary" fontWeight="medium">
              SOBRE MÍ
            </Typography>
            <Box sx={{
              mt: '10px',
              display: { sm: 'flex', xs: 'block' },
              alignItems: 'center',
            }}>
              <Typography variant="p" color="primary" fontWeight="regular">
                Desarrollador de Software
              </Typography>
              <Typography color="secondary" sx={{
                borderLeft: { sm: '1px solid rgba(110, 110, 110, 0.5)', xs: 'none' },
                ml: { sm: '5px', xs: 'none' },
                pl: { sm: '5px', xs: 'none' },
                fontSize: '12px',
              }}>
                Especializado en JavaScript
              </Typography>
            </Box>
            <Box sx={{ mt: '20px' }}>
              <Typography variant="p" fontWeight="regular">
                Sólidos conocimientos en front-end: React JS, HTML, CSS, SASS, Bootstrap, Material UI, Redux, etc...<br />
                Comprensión de los principios de diseño UI / UX.<br />
                Desarrollo back-end: Node.js, Express, MongoDB, Sequelize, MySQL, etc...<br/>
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
        }
      </Container>
    </Box>
  );
};

export default AboutMe;
