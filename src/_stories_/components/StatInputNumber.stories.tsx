import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatInputNumber } from '@app/components';

export default {
  title: 'Components/StatInputNumber',
  component: StatInputNumber,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof StatInputNumber>;

const Template: ComponentStory<typeof StatInputNumber> = (args) => <StatInputNumber {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  wrapperClassName: 'max-w-[15rem]',
  size: 'small',
  label: "Furnished",
  stat: 200,
};