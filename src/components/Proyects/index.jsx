import { useRef } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import { Box, Container, Typography } from '@mui/material';
import { proyects } from './listProyects';
import CardProyect from './CardProyect';

const Proyects = () => {
  const ref = useRef();
  const onScreen = useOnScreen(ref);

  return (
    <Box
      id="proyects"
      sx={{
        pt: '1px',
        borderTop: '2px solid rgba(255, 255, 255, 0.02)',
        background: 'linear-gradient(90deg, rgba(0,123,234,0.01) 5%, rgba(0,0,0,0.05) 100%)',
      }}>
      <Container maxWidth="md">
        <Box
          ref={ref}
          component="section"
          id="proyects"
          sx={{
            minHeight: '500px',
            mt: '100px',
            pb: '150px',
            display: { lg: 'block', md: 'block', sm: 'flex', xs: 'flex' },
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {onScreen &&
            <>
              <Typography variant="h5" color="secondary" fontWeight="medium">
                PROYECTOS
              </Typography>
              <Box
                className="animate__animated animate__fadeInUp"
                sx={{
                  display: { md: 'flex', sm: 'block' },
                  flexFlow: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {proyects.map(item =>
                  <CardProyect
                    key={item.id}
                    proyect={item}
                  />,
                )}
              </Box>
            </>
          }
        </Box>
      </Container>
    </Box>
  );
};

export default Proyects;
