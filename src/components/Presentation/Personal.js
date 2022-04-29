import { Box, Button, Typography } from '@mui/material';

const Personal = () => {
  return (
    <Box>
      <Typography variant="p" color="primary" fontWeight="light">
        Front-end Developer
      </Typography>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        Nicolás Corradini
      </Typography>
      <Box sx={{ width: '80%', marginTop: '15px' }}>
        <Typography variant="p" color="secondary" fontWeight="light">
          Passionate about web development. Always learning new technologies. Here you will see some of my thoughts and projects.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button variant="contained" sx={{
          width: '150px',
          marginTop: '40px',
          marginRight: '10px',
        }}>Contáctame</Button>
        <Button variant="outlined" color="info" sx={{
          width: '150px',
          marginTop: '40px',
        }}>Descargar CV</Button>
      </Box>
    </Box>
  );
};

export default Personal;
