import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";

import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";

import { Suspense } from "react";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="contentPage">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
