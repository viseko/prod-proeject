import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "shared/lib/classNames";

import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  DEFAULT = "default",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

const Button:FC<ButtonProps> = ({
  className,
  children,
  theme = ThemeButton.DEFAULT,
  ...otherProps
}) => {
  const cls = classNames(
    className,
    styles.Button,
    styles[theme]
  );

  return (
    <button
     className={cls}
     {...otherProps}
    >
      { children }
    </button>
  );
};

export default Button;