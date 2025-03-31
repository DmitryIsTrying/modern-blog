import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t("Введите имя")} />
            <Input placeholder={t("Введите пароль")} type="password" />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.loginBtn}>
                {t("войти")}
            </Button>
        </div>
    );
};
