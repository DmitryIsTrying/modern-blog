import { Suspense } from 'react'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader } from '@/shared/ui/Loader/Loader'
import { Modal, ModalProps } from '@/shared/ui/Modal/Modal'

export const LoginModal = ({ className, onClose, ...modalProps }: ModalProps) => {
  return (
    <Modal lazy onClose={onClose} className={classNames('', {}, [className])} {...modalProps}>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}
