import { useState } from "react";

export const useLocalStorage = (key, initValue) => {
  //   const [storedValue, setStoredValue] = useState(() => {
  //     // Get from local storage by key
  //     const item = window.localStorage.getItem(key);
  //     // Parse and return stored json or, if undefined, return initialValue
  //     return item ? JSON.parse(item) : initValue;
  //   });
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    if (window.localStorage.getItem(key)) {
      return JSON.parse(item);
    }
    window.localStorage.setItem(key, JSON.stringify(initValue));
    return initValue;
  });

  const setValue = value => {
    // save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
