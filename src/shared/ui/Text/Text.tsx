import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = ({ className, title, text, theme = TextTheme.PRIMARY }: TextProps) => {
  return (
    <div className={classNames(cls.container, {}, [className, cls[theme]])}>
      {title && <h3 className={cls.title}>{title}</h3>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}
