import { FC, ReactNode } from "react";
import classNames from "shared/lib/classNames";

import styles from "./{{pascalCase}}.module.scss";

interface {{pascalCase}}Props {
  className?: string;
  children?: ReactNode;
}

const {{pascalCase}}:FC<{{pascalCase}}Props> = ({
  clasName,
}) => {
  const cls = classNames(
    clasName,
    styles.{{pascalCase}}
  );

  return (
    <div
     className={cls}
    >
      {{pascalCase}}
    </div>
  );
};

export default {{pascalCase}};