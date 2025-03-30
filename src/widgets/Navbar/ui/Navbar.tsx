/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et consequatur harum, molestiae id error,
                voluptatibus dolores suscipit eveniet eum corporis nulla repellendus consequuntur repellat tenetur ipsum
                excepturi, assumenda reprehenderit ad.
            </Modal>
        </div>
    );
};
