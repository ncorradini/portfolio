import { Box } from '@mui/material';

const ContentBox = (props) => {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      transition: '0.5s',
      opacity: { md: 0, xs: 1 },
      '&:hover': { opacity: 1 },
    }}>
      {props.children}
    </Box>
  );
};

export default ContentBox;
