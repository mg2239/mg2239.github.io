import { useEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>();
  const isSmall = width && width < 640;

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return { width, isSmall };
};
