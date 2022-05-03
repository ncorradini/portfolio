import { Box, Container } from '@mui/material';
import Personal from './Personal';
import notebookSVG from '../../assets/notebook.svg';

const Presentation = () => {
  return (
    <Container maxWidth="md">
      <Box component="section" sx={{
        display: 'flex',
        alignItems: 'center',
        height: '500px',
        p: '20px',
      }}>
        <Personal />
        <Box sx={{
          display: { lg: 'block', md: 'block', sm: 'block', xs: 'none' },
          width: '350px',
          mt: '40px',
        }}>
          <img src={notebookSVG}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Presentation;
