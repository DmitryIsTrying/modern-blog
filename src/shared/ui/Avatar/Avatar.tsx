import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties, memo, useMemo } from 'react'
import cls from './Avatar.module.scss'

interface AvatarProps {
  className?: string
  src?: string
  alt?: string
  size?: number
}

export const Avatar = memo(({ className, alt, src, size }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size])

  return <img style={styles} src={src} alt={alt} className={classNames(cls.avatar, {}, [className])} />
})

Avatar.displayName = 'Avatar'
