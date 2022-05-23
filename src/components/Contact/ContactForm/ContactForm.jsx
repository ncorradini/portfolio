import { Box, Button, TextField, Typography } from '@mui/material';

const ContactForm = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: { lg: '50%', md: '50%', sm: '90%', xs: '90%' },
      mt: { lg: '30px', xs: '50px ' },
      mx: 'auto',
    }}>
      <Typography fontSize="small" color="gray">
        ¡Envíame un mensaje por correo y te responderé pronto!
      </Typography>
      <form>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: '5px',
        }}>
          <TextField label={'Nombre'} sx={{ my: '10px' }} />
          <TextField label={'Asunto'} sx={{ my: '10px' }} />
          <TextField label={'Mensaje'} sx={{ my: '10px' }} />
          <Button>ENVIAR MENSAJE</Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
