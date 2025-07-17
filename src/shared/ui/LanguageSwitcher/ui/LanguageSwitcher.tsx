import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames";

import { Button } from "shared/ui/Button";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface LanguageSwitcherProps {
  className?: string;
  children?: ReactNode;
}

const LanguageSwitcher:FC<LanguageSwitcherProps> = ({
  className,
}) => {
  const cls = classNames(
    className,
  );

  const {t, i18n} = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
  };

  return (
    <Button
     className={cls}
     onClick={toggle}
     theme={ThemeButton.CLEAR}
    >
      {t("lang")}
    </Button>
  );
};

export default LanguageSwitcher;