import { t } from "i18next";
import { useState } from "react";

import cls from "./Sidebar.module.scss";

import AboutIcon from "shared/assets/icons/about-icon.svg";
import MainIcon from "shared/assets/icons/main-icon.svg";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { Button, ButtonTheme, ButtonSize } from "@/shared/ui/Button/Button";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <nav className={cls.items}>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t("Главная страница")}</span>
                </AppLink>

                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t("О сайте")}</span>
                </AppLink>
            </nav>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
};
