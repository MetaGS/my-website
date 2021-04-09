import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const onResize = () => {
      setWidth(window ? window.innerWidth : null);
    };

    onResize();

    window?.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return width;
};

export default useWindowWidth;
