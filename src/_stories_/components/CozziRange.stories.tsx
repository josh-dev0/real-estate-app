import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CozziRange } from '@app/components';

export default {
  title: 'Components/CozziRange',
  component: CozziRange,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof CozziRange>;

const Template: ComponentStory<typeof CozziRange> = (args) => <CozziRange {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  min: 0,
  max: 100,
  value: [30, 50],
};

export const FormattedLabel = Template.bind({});

FormattedLabel.args = {
  min: 0,
  max: 100,
  value: [30, 50],
  labelClassName: "text-red-800"
};

export const CustomLabels = Template.bind({});

CustomLabels.args = {
  min: 0,
  max: 100,
  value: [30, 50],
  labels: {
    min: 'Min Val',
    max: 'Max Val',
  },
};