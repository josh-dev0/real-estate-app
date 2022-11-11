import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DealTypeRadio } from '../../components/DealTypeRadio';

export default {
  title: 'Components/DealTypeRadio',
  component: DealTypeRadio,
} as ComponentMeta<typeof DealTypeRadio>;

const Template: ComponentStory<typeof DealTypeRadio> = (args) => <DealTypeRadio {...args} />;

export const Primary = Template.bind({});

export const Selected = Template.bind({});
Selected.args = {
  value: 'rent',
};