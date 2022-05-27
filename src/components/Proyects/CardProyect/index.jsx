import { Box, Typography } from '@mui/material';
import ActionButtons from './ActionButtons';
import BackgroundImage from './BackgroundImage';

const CardProyect = ({ proyect }) => {
  return (
    <Box sx={{
      mt: '30px',
      position: 'relative',
      minWidth: { md: '400px', xs: '350px' },
      height: '200px',
      borderRadius: '5px',
      overflow: 'hidden',
      boxShadow: '0px 2px 10px 0px rgba(0,0,0,0.5)',
    }}>
      <BackgroundImage banner={proyect.banner}>
        <Box sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          transition: '0.5s',
          opacity: { md: 0, xs: 1 },
          '&:hover': { opacity: 1 },
        }}>
          <Typography sx={{
            color: '#fff',
            fontSize: '22px',
            fontWeight: 'bold',
          }}>
            {proyect.title}
          </Typography>
          <ActionButtons
            site={proyect.site}
            code={proyect.code}
          />
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default CardProyect;
