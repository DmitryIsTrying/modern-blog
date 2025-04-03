import { classNames } from '@/shared/lib/classNames/classNames'
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

export const LoginModal = ({ className, ...modalProps }: ModalProps) => {
  return (
    <Modal lazy {...modalProps} className={classNames('', {}, [className])}>
      <Suspense fallback=''>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
