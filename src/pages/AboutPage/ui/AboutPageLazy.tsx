import { lazy } from "react";

export const AboutPageLazy = lazy(
    () =>
        new Promise<{ default: React.ComponentType }>((resolve) => {
            setTimeout(() => {
                resolve(import("./AboutPage"));
            }, 3000);
        }),
);
