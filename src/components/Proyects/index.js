import { Box, Container, Typography } from '@mui/material';
import CardProyect from './CardProyect';
import { proyects } from './listProyects';

const Proyects = () => {
  return (
    <Container maxWidth="md">
      <Box component="section" id="proyects" sx={{
        minHeight: '500px',
        mt: '150px',
        mb: '150px',
        display: { lg: 'block', md: 'block', sm: 'flex', xs: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Typography variant="h5" color="secondary" fontWeight="medium">
          PROYECTOS
        </Typography>
        <Box sx={{
          mt: '30px',
          display: { lg: 'flex', md: 'flex', sm: 'block' },
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
      </Box>
    </Container>
  );
};

export default Proyects;
