import { Typography } from '@mui/material';

const InProgress = () => {
  return (
    <Typography sx={{
      position: 'absolute',
      top: 0,
      right: 0,
      mr: '15px',
      mt: '10px',
      p: '5px',
      borderRadius: '5px',
      fontSize: '12px',
      background: '#ff8800',
      color: 'black',
    }}>
      en desarrollo
    </Typography>
  );
};

export default InProgress;
