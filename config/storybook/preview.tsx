import type { Preview } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { CSSProperties } from "react";
import { BrowserRouter } from "react-router-dom";

const getStyle = (theme: Theme): CSSProperties => {
    return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === Theme.LIGHT ? "white" : "black",
    };
};

type ThemeModes = {
    [key in Theme]: {
        theme: Theme;
    };
};

const preview: Preview = {
    decorators: [
        // 👇 Defining the decorator in the preview file applies it to all stories
        (Story, context) => {
            const theme = (context.globals.theme || "light") as Theme;

            return (
                <BrowserRouter>
                    <div style={getStyle(theme)} className={`app ${theme}`}>
                        <Story />
                    </div>
                </BrowserRouter>
            );
        },
    ],
    parameters: {
        layout: "fullscreen",
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        chromatic: {
            modes: Object.values(Theme).reduce((acc: ThemeModes, theme) => {
                acc[theme] = { theme };
                return acc;
            }, {} as ThemeModes),
        },
    },
    globalTypes: {
        theme: {
            description: "Global theme for components",
            toolbar: {
                // The label to show for this toolbar item
                title: "Theme",
                icon: "circlehollow",
                // Array of plain string values or MenuItem shape (see below)
                items: [...Object.values(Theme)],
                // Change title based on selected value
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: "light",
    },
};

export default preview;
