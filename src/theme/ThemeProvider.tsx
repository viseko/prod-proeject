import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContent";
import { Theme } from "./ThemeContent";
import { FC, PropsWithChildren, useMemo, useState } from "react";

const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
const defaultTheme = storageTheme || Theme.LIGHT;

const ThemeProvider: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);
  
  return (
    <ThemeContext.Provider value={defaultProps}>
     {children}
    </ThemeContext.Provider>
  )
 }

 export default ThemeProvider;