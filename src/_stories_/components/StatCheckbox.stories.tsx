import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatCheckbox } from '@app/components';

export default {
  title: 'Components/StatCheckbox',
  component: StatCheckbox,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof StatCheckbox>;

const Template: ComponentStory<typeof StatCheckbox> = (args) => <StatCheckbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Furnished",
  stat: 200,
};
