import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Typography } from '@mui/material';

const ToggleMode = ({ colorMode, theme }) => {
  return (
    <IconButton
      disableRipple="true"
      sx={{ '&.MuiButtonBase-root:hover': { bgcolor: 'transparent' } }}
      onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark'
        ? <>
          <Brightness7Icon />
          <Typography sx={{ fontSize: '14px', ml: '10px' }}>Night</Typography>
        </>
        : <>
          <Brightness4Icon />
          <Typography sx={{ fontSize: '14px', ml: '10px' }}>Day</Typography>
        </>

      }
    </IconButton>
  );
};

export default ToggleMode;
