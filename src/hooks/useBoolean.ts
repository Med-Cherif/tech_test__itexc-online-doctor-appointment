import { useState } from "react";

export default function useBoolean(defaultValue = false) {
  const [isTrue, setIsTrue] = useState(defaultValue);

  const setToTrue = () => setIsTrue(true);
  const setToFalse = () => setIsTrue(false);
  const toggle = () => setIsTrue((current) => !current);

  return {
    isTrue,
    setToFalse,
    setToTrue,
    toggle,
  };
}
