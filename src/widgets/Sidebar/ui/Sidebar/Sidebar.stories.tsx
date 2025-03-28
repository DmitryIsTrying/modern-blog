import type { Meta, StoryObj } from "@storybook/react";
import { CSSProperties } from "react";
import { Sidebar } from "./Sidebar";

const style: CSSProperties = {
    width: "100%",
};

const meta = {
    title: "widgets/Sidebar",
    component: Sidebar,
    tags: ["autodocs", "widgets"],
    argTypes: {
        className: {
            control: "text",
        },
    },
    decorators: [
        (Story) => {
            return (
                <div style={style}>
                    <Story />
                </div>
            );
        },
    ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {};
