import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useCallback, useState } from "react";
import { Modal } from "./Modal";

const meta = {
    title: "shared/Modal",
    component: Modal,
    tags: ["ui"],
    args: {
        children:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facere reiciendis animi cumque eligendi, a minus consequuntur quaerat repellendus eum mollitia nemo odit nihil sapiente iste adipisci voluptates saepe facilis.",
        isOpen: true,
        onClose: fn(),
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Classic: Story = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.isOpen);

        const handleOnClose = useCallback(() => {
            args.onClose();
            setIsOpen(false);
        }, [args.onClose]);

        return <Modal {...args} isOpen={isOpen} onClose={handleOnClose} />;
    },
};
