import { Box, Button, Typography } from '@mui/material';

const Personal = () => {
  return (
    <Box>
      <Typography variant="p" color="primary" fontWeight="regular">
        》Software Developer
      </Typography>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        Corradini <span style={{ color: '#1E7CE8' }}>Nicolás</span>
      </Typography>
      <Box sx={{ mt: '15px', maxWidth: '600px' }}>
        <Typography variant="p" color="secondary" fontWeight="regular">
          Estudiante de la carrera Análisis de Sistemas. Diseñador Gráfico recibido. Desarrollador de software en constante aprendizaje.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button
          href="#contact"
          variant="contained"
          sx={{ width: '150px', mt: '40px', mr: '10px' }}>
          Contáctame
        </Button>
        <Button
          target="_blank"
          href="https://drive.google.com/file/d/1t0xB9F7ciasiTfXjybJGJ25ZimKf6nZs/view"
          variant="outlined"
          sx={{ width: '150px', mt: '40px' }}>
          Descargar CV
        </Button>
      </Box>
    </Box>
  );
};

export default Personal;
