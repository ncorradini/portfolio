import { Box, Typography } from '@mui/material';

const TechsHashtags = ({ techs }) => {
  return (
    <Box sx={{
      display: 'flex',
      background: 'rgba(110, 110, 110, 0.2)',
      backdropFilter: 'blur(5px)',
      my: '10px',
      px: '10px',
      py: '5px',
      borderRadius: '5px',
    }}>
      {techs.map(item => (
        <Typography key={item} sx={{
          color: '#fff',
          fontSize: '12px',
          ml: '5px',
          opacity: 0.5,
        }}>
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default TechsHashtags;
