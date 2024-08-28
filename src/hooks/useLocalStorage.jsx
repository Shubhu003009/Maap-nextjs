"use client";

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = window.localStorage.getItem(key);

    try {
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    const body = document.body.classList;
    if (value) {
      body.remove("light-mode");
      body.add("dark-mode");
    } else {
      body.remove("dark-mode");
      body.add("light-mode");
    }
  }, [key, value]);
  return [value, setValue];
};

export default useLocalStorage;
