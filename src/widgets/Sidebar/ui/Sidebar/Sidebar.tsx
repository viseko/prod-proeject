import { FC, ReactNode, useState } from "react";
import classNames from "shared/lib/classNames";

import styles from "./Sidebar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
  children?: ReactNode;
}

const Sidebar:FC<SidebarProps> = ({
  className,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  const cls = classNames(
    className,
    styles.Sidebar,
    {
      [styles.collapsed]: collapsed
    }
  );

  return (
    <div
     className={cls}
    >
      <button
        onClick={onToggle}
      >toggle</button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;