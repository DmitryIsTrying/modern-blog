import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import { classNames, Mods } from '@/shared/lib/classNames/classNames'
import { Portal } from '@/shared/ui/Portal/Portal'
import cls from './Modal.module.scss'

export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  element?: HTMLElement
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = ({ className, children, isOpen, onClose, element, lazy }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>()

  const handleOnClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleOnClose()
      }
    },
    [handleOnClose],
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timeRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) return null

  return (
    <Portal element={element}>
      <div className={classNames(cls.modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleOnClose}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
