import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "shared/lib/classNames";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
}

const Button:FC<ButtonProps> = ({
  className,
  children,
  ...otherProps
}) => {
  const cls = classNames(
    className,
    styles.Button
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