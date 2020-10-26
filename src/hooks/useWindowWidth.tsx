import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [isWindowSmall, setIsWindowSmall] = useState(false);

  let checkIsWindowSmall = () => {
    setIsWindowSmall(window.innerWidth < 700);
  };

  useEffect(() => {
    checkIsWindowSmall();
    window.addEventListener("resize", checkIsWindowSmall);
  }, []);

  return isWindowSmall;
};