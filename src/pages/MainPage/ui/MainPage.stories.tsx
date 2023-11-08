import type { Meta, StoryObj } from '@storybook/react';
'app/styles/index.scss';
'../../app/styles/index.scss';
import MainPage  from './MainPage';

const meta = {
    title: 'smth/MainPage',
    component: MainPage,
    parameters: {
        layout: 'default',
    },
    argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div className='App dark'>
                <Story />
            </div>
        ),
    ],
};