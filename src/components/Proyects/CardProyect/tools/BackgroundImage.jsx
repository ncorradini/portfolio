import { Box } from '@mui/material';

const BackgroundImage = (props) => {
  return (
    <Box
      sx={{
        background: 'rgba(0, 0, 0, 0.9)',
        backgroundImage: `url(${props.banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        transition: '0.5s',
        backgroundBlendMode: { md: 'lighten', xs: 'darken' },
        '&:hover': {
          backgroundBlendMode: 'darken',
          transform: 'scale(1.05)',
        },
      }}>
      {props.children}
    </Box>
  );
};

export default BackgroundImage;
