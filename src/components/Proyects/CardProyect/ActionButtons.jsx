import { Box, Button } from '@mui/material';

const ActionButtons = ({ site, code }) => {
  return (
    <Box sx={{
      display: 'flex',
      mt: '10px',
    }}>
      <Button
        variant="contained"
        href={site}
        target="_blank"
        sx={{ width: '130px' }}
      >
        Ver sitio
      </Button>
      <Button
        variant="outlined"
        href={code}
        target="_blank"
        sx={{ width: '130px', ml: '10px' }}
      >
        Ver código
      </Button>
    </Box>
  );
};

export default ActionButtons;
