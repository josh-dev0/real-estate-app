import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DealType } from '../../components/DealType';

export default {
  title: 'Components/DealType',
  component: DealType,
} as ComponentMeta<typeof DealType>;

const Template: ComponentStory<typeof DealType> = (args) => <DealType {...args} />;

export const Primary = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  value: 'rent',
};