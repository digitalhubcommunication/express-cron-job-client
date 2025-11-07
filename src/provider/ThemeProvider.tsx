"use client"; 

import { createContext, useContext, useEffect, useState } from "react";

const THEME_CONTEXT = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get saved theme from localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);

    // Optionally update the theme preference in the database
    // try {
    //   await fetch("/api/theme", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ theme: newTheme }),
    //   });
    // } catch (error) {
    //   console.error("Failed to update theme in DB", error);
    // }
  };

  return (
    <THEME_CONTEXT.Provider value={{ theme, toggleTheme }}>
      {children}
    </THEME_CONTEXT.Provider>
  );
};

export const useTheme = () => useContext(THEME_CONTEXT);
