import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
 theme: Theme;
 setTheme?: (value: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT
});

export const LOCAL_STORAGE_THEME_KEY = "theme";