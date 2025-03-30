import { useTranslation } from "react-i18next";

import cls from "./PageError.module.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    const { theme } = useTheme();

    return (
        <div className={classNames(cls.pageError, {}, [className, `app ${theme}`])}>
            <p>{t("Произошла непредвиденная ошибка")}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};
