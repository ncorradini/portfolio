import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { social } from './listSocials';

const Social = () => {
  return (
    <Box
      className="animate__animated animate__fadeInLeft"
      sx={{ width: { lg: '50%', md: '50%', sm: '90%', xs: '90%' }, mx: 'auto' }}>
      <List>
        {social.map(item => (
          <ListItem key={item.id}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <a
                  href={item?.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#007BEA' }}
                >
                  {item.data}
                </a>
              }
              secondary={item.title}
            />
          </ListItem>

        ))}
      </List>
    </Box>
  );
};

export default Social;
