import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './animationToggleColor.css';

const ToggleMode = ({ colorMode, theme }) => {
  const DarkIcon = () => (
    <DarkModeOutlinedIcon color="primary"
      sx={{
        borderRadius: '20px',
        fontSize: { sm: '20px', xs: '30px' },
        transition: '0.5s',
        '&:hover': { opacity: '0.5' },
        animation: 'infinite resplandorAnimation 2s',

      }}/>
  );

  const LightIcon = () => (
    <LightModeOutlinedIcon color="primary" sx={{
      borderRadius: '20px',
      fontSize: { sm: '20px', xs: '30px' },
      transition: '0.5s',
      '&:hover': { opacity: '0.5' },
      animation: 'infinite resplandorAnimation 2s',
    }} />
  );

  return (
    <IconButton
      disableRipple={true}
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
