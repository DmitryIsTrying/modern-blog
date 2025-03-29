import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonTheme } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    tags: ["ui", "buttons"],
    argTypes: {
        onClick: {
            action: "clicked", // Логирование кликов
            table: {
                category: "Events", // Группировка в документации
            },
        },
    },
    args: {
        children: "Text",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
    },
};
