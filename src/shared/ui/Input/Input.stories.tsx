import type { Meta, StoryObj } from "@storybook/react";

import { Input, InputTheme } from "./Input";

const meta = {
    title: "shared/Input",
    component: Input,
    tags: ["ui"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {};

export const Primary: Story = {
    args: {
        theme: InputTheme.PRIMARY,
    },
};
