import { Box, Button } from '@mui/material';
import { SECTIONS, tradSection } from './sectionsList';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const DesktopMenu = () => {
  return (
    <Box sx={{
      display: { md: 'flex', sm: 'flex', xs: 'none' },
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }}>
      {SECTIONS.map((section) => (
        <Button
          key={section}
          disableRipple="true"
          href={`#${section}`}
          color="secondary"
          sx={{
            fontSize: '11px',
            my: 1.2,
            px: 2,
            display: 'block',
            transition: '0.5s',
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
              opacity: '0.5',
            },
          }}>
          {tradSection(section)}
        </Button>
      ))}
      <a
        href="https://github.com/ncorradini"
        target="_blank"
        rel="noreferrer">
        <GitHubIcon
          color="primary"
          sx={{
            cursor: 'pointer',
            fontSize: '24px',
            m: '8px',
            pt: '5px',
            transition: '0.5s',
            '&:hover': {
              opacity: '0.5',
            },
          }} />
      </a>
      <a
        href="https://www.linkedin.com/in/nicolascorradini/"
        target="_blank"
        rel="noreferrer"
        style={{ cursor: 'default' }}
      >
        <LinkedInIcon
          color="primary"
          sx={{
            cursor: 'pointer',
            fontSize: '24px',
            m: '8px',
            pt: '5px',
            transition: '0.5s',
            '&:hover': {
              opacity: '0.5',
            },
          }} />
      </a>
    </Box>
  );
};

export default DesktopMenu;
