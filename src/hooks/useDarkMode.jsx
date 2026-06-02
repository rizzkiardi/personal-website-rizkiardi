import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

// import { useEffect, useState } from "react";

// const DARK_CLASS = "dark";

// export function useDarkMode() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     if (typeof document === "undefined") return;

//     const syncDarkMode = () => {
//       setIsDark(document.documentElement.classList.contains(DARK_CLASS));
//     };

//     // Initial sync
//     syncDarkMode();

//     const observer = new MutationObserver(syncDarkMode);
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["class"],
//     });

//     return () => observer.disconnect();
//   }, []);

//   return isDark;
// }
