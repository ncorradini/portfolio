import { useEffect, useState } from 'react';

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const vw = screen.width;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    }, {
      rootMargin: vw < 400 ? '-100px' : '-200px',
    });

    if (ref.current) observer.observe(ref.current);
  }, []);

  return isIntersecting;
};
