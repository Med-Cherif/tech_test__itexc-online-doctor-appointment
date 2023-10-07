import { useEffect, useState } from "react";
import debounce from "../helpers/debounce";

export default function useWindowSize() {
  const [size, setSize] = useState({
    width: innerWidth,
    height: innerHeight,
  });

  const handler = debounce(() => {
    setSize({
      width: innerWidth,
      height: innerHeight,
    });
  }, 400);

  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
}
