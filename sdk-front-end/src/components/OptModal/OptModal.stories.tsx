/* eslint-disable import/no-extraneous-dependencies */
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import { OptModal } from '.';

export default {
  title: 'OptModal',
  component: OptModal,
} as Meta;

const t = () => {
  console.log('');
};

const body = <h3 style={{ textAlign: 'center' }}>s</h3>;

export const StoryOptModal: Story = (args) => (
  <OptModal
    open
    loading={false}
    title="Cl"
    body={body}
    actionButtonCancel={t}
    buttonCancelActive
    actionButtonConfirm={t}
    {...args}
  />
);
