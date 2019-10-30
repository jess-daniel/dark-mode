import { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initValue);

  useEffect(() => {
    const body = document.querySelector("body");
    console.log(body);
    if (darkMode === true) {
      body.className = "dark-mode";
    } else {
      body.className = "";
    }
  }, [darkMode]);

  const setMode = value => {
    setDarkMode(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [darkMode, setMode];
};
