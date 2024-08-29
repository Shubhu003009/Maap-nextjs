// "use client";

// import { useEffect, useState } from "react";

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(initialValue);
//   useEffect(() => {
//     const theme = JSON.parse(localStorage.getItem(key));
//     if (theme) {
//       setValue(value);
//     }
//   }, []);

//   useEffect(() => {
//     const theme = JSON.parse(localStorage.getItem("dark-mode"));
//     if (theme) {
//       setTheme(theme);
//     }
//   }, []);

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [value]);
//   return [value, setValue];
// };

// export default useLocalStorage;
