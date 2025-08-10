import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'entities/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => <ArticleTextBlockComponent {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    block: {
        type: ArticleBlockType.TEXT,
        paragraphs: ['Exapmle Exapmle Exapmle Exapmle', 'Exapmle Exapmle Exapmle Exapmle', 'Exapmle Exapmle Exapmle Exapmle'],
        id: '1',
    },
};
