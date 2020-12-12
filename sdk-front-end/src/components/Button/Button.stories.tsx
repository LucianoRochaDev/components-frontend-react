/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from './Button';

export default { title: 'Button', component: Button } as Meta;

export const StoryBookTest: Story = (args) => <Button {...args} />;

// StoryBookTest.args = {
//   color: '#E19727',
//   width: '50vw',
// };
