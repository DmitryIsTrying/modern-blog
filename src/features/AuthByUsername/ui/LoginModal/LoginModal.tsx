import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

export const LoginModal = ({ className, ...modalProps }: ModalProps) => {
  return (
    <Modal lazy {...modalProps} className={classNames('', {}, [className])}>
      <LoginForm />
    </Modal>
  )
}
