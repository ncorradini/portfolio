import { Box, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SECTIONS, tradSection } from './sectionsList';

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
          sx={{
            color: '#fff',
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
        style={{ color: '#919090' }}
        href="https://github.com/ncorradini"
        target="_blank"
        rel="noreferrer">
        <GitHubIcon sx={{ fontSize: '22px', m: '8px', pt: '5px' }} />
      </a>
      <a
        style={{ color: '#919090' }}
        href="https://www.linkedin.com/in/nicolascorradini/"
        target="_blank"
        rel="noreferrer">
        <LinkedInIcon sx={{ fontSize: '24px', m: '8px', pt: '5px' }} />
      </a>
    </Box>
  );
};

export default DesktopMenu;
