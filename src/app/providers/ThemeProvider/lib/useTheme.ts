import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContent";
import { useContext } from "react";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme
}

export default function useTheme():UseThemeResult {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = (theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme, toggleTheme
  }
} 