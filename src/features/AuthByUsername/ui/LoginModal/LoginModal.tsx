import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

export const LoginModal = ({ className, onClose, ...modalProps }: ModalProps) => {
  return (
    <Modal lazy onClose={onClose} className={classNames('', {}, [className])} {...modalProps}>
      <Suspense fallback=''>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
