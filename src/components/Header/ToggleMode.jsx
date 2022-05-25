import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const ToggleMode = ({ colorMode, theme }) => {
  const DarkIcon = () => (
    <DarkModeOutlinedIcon color="primary"
      sx={{
        transition: '0.5s',
        '&:hover': { opacity: '0.5' },
      }}/>
  );

  const LightIcon = () => (
    <LightModeOutlinedIcon color="primary" sx={{
      transition: '0.5s',
      '&:hover': { opacity: '0.5' },
    }} />
  );

  return (
    <IconButton
      disableRipple="true"
      color="secondary"
      onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === 'dark'
        ? LightIcon()
        : DarkIcon()
      }
    </IconButton>
  );
};

export default ToggleMode;
