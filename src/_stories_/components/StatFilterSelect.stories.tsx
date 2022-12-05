import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatFilterSelect } from '@app/components';

export default {
  title: 'Components/StatFilterSelect',
  component: StatFilterSelect,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof StatFilterSelect>;

const Template: ComponentStory<typeof StatFilterSelect> = (args) => <StatFilterSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  wrapperClassName: "max-w-[20rem]",
  placeholder: 'Heater Type',
  stat: 41,
  options: [
    { key: 'collective', label: 'Collective' },
    { key: 'electricity', label: 'Electricity' },
    { key: 'Gaz', label: 'Gaz' },
  ]
};