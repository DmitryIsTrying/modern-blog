import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'entities/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => <ArticleCodeBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        type: ArticleBlockType.CODE,
        code: `export default {
            title: 'pages/Code',
            component: Code,
            argTypes: {
                backgroundColor: { control: 'color' },
            },
        } as ComponentMeta<typeof Code>; 
        `,
        id: '2',
    },
};
