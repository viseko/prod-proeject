import { FC, ReactNode } from "react";
import { NavLink } from "shared/ui/NavLink";
import classNames from "shared/lib/classNames";

import styles from "./NavBar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavBarProps {
  className?: string;
  children?: ReactNode;
}

const NavBar:FC<NavBarProps> = ({className}) => {
  const cls = classNames(
    className,
    styles.NavBar
  );
  
  return (
    <nav
     className={cls}
    >
      <div className={styles.links}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav> 
  );
};

export default NavBar;