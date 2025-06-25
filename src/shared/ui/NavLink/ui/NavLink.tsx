import { FC } from "react";
import classNames from "shared/lib/classNames";
import {
  NavLink as Link,
  LinkProps
} from "react-router";

import styles from "./NavLink.module.scss";

const NavLink:FC<LinkProps> = ({
  className,
  children,
  to
}) => {
  return (
    <Link
      to={to}
      className={
        ({ isActive }) => 
          classNames(
            className,
            styles.NavLink,
            { [styles.active]: isActive }
          )
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;