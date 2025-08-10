import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  changeStroke?: boolean;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, changeStroke } = props;

    const colorIconClass = changeStroke ? cls.strokeIcon : cls.fillIcon;

    return (
        <Svg className={classNames(cls.Icon, {}, [className, colorIconClass])} />
    );
});

Icon.displayName = 'Icon';
