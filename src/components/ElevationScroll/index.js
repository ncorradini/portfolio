import { cloneElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationScroll = props => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
