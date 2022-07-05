import { Box, Button, Typography } from '@mui/material';

const Personal = () => {
  return (
    <Box className="animate__animated animate__fadeInDown">
      🛠&nbsp;
      <Typography variant="p" fontWeight="regular">
        Software Developer
      </Typography>
      <Typography variant="h2" color="secondary" fontWeight="bold">
        <span style={{ color: '#26b0ff' }}>Corradini</span> Nicolás
      </Typography>
      <Box sx={{ mt: '5px', maxWidth: '600px' }}>
        <Typography variant="p" color="secondary" fontWeight="regular">
          Estudiante de la carrera Análisis de Sistemas. <br />
          Desarrollador de software en constante aprendizaje.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Button
          target="_blank"
          href="https://drive.google.com/file/d/1hyDeeuL9vbFCR3dXGpDiWVFnWY_YHx-B/view?usp=sharing"
          variant="contained"
          color="secondary"
          sx={{ width: '150px', mt: '30px', mr: '10px' }}>
          Descargar CV
        </Button>
        <Button
          href="#contact"
          variant="outlined"
          sx={{ width: '150px', mt: '30px' }}>
          Contáctame
        </Button>
      </Box>
    </Box>
  );
};

export default Personal;
