import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

const ToggleMode = ({ colorMode, theme }) => {
  return (
    <IconButton
      disableRipple="true"
      sx={{
        height: '50px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'transparent',
        },
      }}
      onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark'
        ? <Brightness7Icon />
        : <Brightness4Icon />
      }
    </IconButton>
  );
};

export default ToggleMode;
