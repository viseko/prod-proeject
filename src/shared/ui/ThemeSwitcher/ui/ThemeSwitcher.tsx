import { ButtonHTMLAttributes, FC } from "react";
import classNames from "shared/lib/classNames";

import styles from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ThemeSwitcher:FC<ThemeSwitcherProps> = ({
  className,
  ...otherProps
}) => {
  const {theme, toggleTheme} = useTheme();

  const cls = classNames(
    className,
    styles.ThemeSwitcher,
    {
      [styles.dark]: (theme === Theme.DARK)
    }
  );

  return (
    <button
     className={cls}
     onClick={toggleTheme}
     {...otherProps}
    >
      {
        (theme === Theme.DARK) ? <DarkIcon /> : <LightIcon />
      }
    </button>
  );
};

export default ThemeSwitcher;