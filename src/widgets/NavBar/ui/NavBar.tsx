import { FC, ReactNode } from "react";
import { NavLink } from "shared/ui/NavLink";
import classNames from "shared/lib/classNames";

import styles from "./NavBar.module.scss";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
  children?: ReactNode;
}

const NavBar:FC<NavBarProps> = ({className}) => {
  const cls = classNames(
    className,
    styles.NavBar
  );

  const {t} = useTranslation();
  
  return (
    <nav
     className={cls}
    >
      <div className={styles.links}>
        <NavLink to="/">{t("menu.home")}</NavLink>
        <NavLink to="/about">{t("menu.about")}</NavLink>
      </div>
    </nav> 
  );
};

export default NavBar;