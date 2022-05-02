import { Box, Button, Typography } from '@mui/material';

const Personal = () => {
  return (
    <Box>
      <Typography variant="p" color="primary" fontWeight="regular">
        Desarrollador Front-end
      </Typography>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        Nicolás Corradini
      </Typography>
      <Box sx={{ width: '80%', mt: '15px' }}>
        <Typography variant="p" color="secondary" fontWeight="regular">
          Passionate about web development. Always learning new technologies. Here you will see some of my thoughts and projects.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button variant="contained" sx={{ width: '150px', mt: '40px', mr: '10px' }}>
          Contáctame
        </Button>
        <Button variant="outlined" sx={{ width: '150px', mt: '40px' }}>
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};

export default Personal;
