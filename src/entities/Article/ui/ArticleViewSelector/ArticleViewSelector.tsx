import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/four_quadro.svg';
import TiledIcon from 'shared/assets/icons/tile_switch.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: TiledIcon,
    },
    {
        view: ArticleView.SMALL,
        icon: ListIcon,
    },
] as const;

type ViewType = typeof viewTypes[number];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onViewButtonClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    const renderViewType = (viewType: ViewType) => (
        <Button
            onClick={onViewButtonClick(viewType.view)}
            theme={ButtonTheme.CLEAR}
            key={viewType.view}
        >
            <Icon
                className={classNames('', { [cls.selected]: viewType.view === view })}
                Svg={viewType.icon}
            />
        </Button>
    );

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {
                viewTypes.map(renderViewType)
            }
        </div>
    );
});

ArticleViewSelector.displayName = 'ArticleViewSelector';
