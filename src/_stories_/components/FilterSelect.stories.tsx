import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterSelect } from '@app/components';

export default {
  title: 'Components/FilterSelect',
  component: FilterSelect,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof FilterSelect>;

const Template: ComponentStory<typeof FilterSelect> = (args) => <FilterSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "max-w-[20rem]",
  placeholder: "Select Location",
  options: [
    { key: 'key1', label: 'Location I' },
    { key: 'key2', label: 'Location II' },
    { key: 'key3', label: 'Location III' },
    { key: 'key4', label: 'Location IV' },
    { key: 'key5', label: 'Location V' },
    { key: 'key6', label: 'Location VI' },
    { key: 'key7', label: 'Location VII' },
    { key: 'key8', label: 'Location VIII' },
    { key: 'key9', label: 'Location IX' },
    { key: 'key10', label: 'Location X' },
  ],
};