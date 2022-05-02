import { Box } from '@mui/material';
import Personal from './Personal';
import notebookSVG from '../../assets/notebook.svg';

const Presentation = () => {
  return (
    <Box component="section" sx={{
      display: 'flex',
      alignItems: 'center',
      height: '500px',
      p: '20px',
    }}>
      <Personal />
      <Box sx={{
        width: '350px',
        mt: '40px',
      }}>

        <img
          src={notebookSVG}
        />
      </Box>
    </Box>
  );
};

export default Presentation;
