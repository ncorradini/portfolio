import { Box } from '@mui/material';
import Personal from './Personal';
import abstractBG from '../../assets/abstract-bg.png';

const Presentation = () => {
  return (
    <Box component="section" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '500px',
      padding: '20px',
    }}>
      <Personal />
      <img
        src={abstractBG}
        style={{
          width: '300px',
        }}
      />
    </Box>
  );
};

export default Presentation;
