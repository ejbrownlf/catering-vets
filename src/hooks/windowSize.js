import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    return{
      width: 900
    };
  };


  const { innerWidth: width} = window;
  return {
    width
  };
}

export default function useWindowDimensions() {
  const isBrowser = typeof window !== "undefined";

  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  useEffect(() => {
    if (!isBrowser) {
      return;
    };

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}