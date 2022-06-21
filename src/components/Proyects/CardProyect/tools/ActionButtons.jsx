import { Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const ActionButtons = ({ site, code }) => {
  return (
    <Box sx={{
      display: 'flex',
      mt: '10px',
    }}>
      <Button
        variant="outlined"
        href={site}
        target="_blank"
        sx={{
          width: '150px',
          ml: '10px',
          color: '#26b0ff',
          borderColor: '#26b0ff',
        }}
      >
        <LanguageIcon color="primary" sx={{
          mr: '8px',
          mb: '3px',
          fontSize: '20px',
          color: '#26b0ff',
        }} />
        Ver sitio
      </Button>
      <Button
        variant="outlined"
        href={code}
        target="_blank"
        sx={{ width: '150px', ml: '10px' }}
      >
        <GitHubIcon color="primary" sx={{
          mr: '8px',
          mb: '3px',
          fontSize: '20px',
        }} />
        Ver código
      </Button>
    </Box>
  );
};

export default ActionButtons;
