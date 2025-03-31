import { classNames } from "@/shared/lib/classNames/classNames";
import { Modal, ModalProps } from "@/shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import cls from "./LoginModal.module.scss";

export const LoginModal = ({ className, ...modalProps }: ModalProps) => {
    return (
        <Modal lazy {...modalProps} className={classNames(cls.loginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    );
};
