/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { OptModal } from '.';

export default {
  title: 'OptModal',
  component: OptModal,
} as Meta;

const t = () => console.log('teste');

export const StoryOptModal: Story = (args) => (
  <OptModal
    title="Componente OptModal"
    subtitle="O componente modal está aqui para atender todas as suas necessidades no desenvolvimento de sua pagina web."
    open
    buttonCancelActive
    onClose={t}
    actionButtonConfirm={t}
    {...args}
  />
);
