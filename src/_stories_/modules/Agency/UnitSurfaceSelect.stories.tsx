import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UnitSurfaceSelect } from '@app/modules/Agency';

export default {
  title: 'Agency/PropertyFilterbar/UnitSurfaceSelect',
  component: UnitSurfaceSelect,
  argTypes: { onChange: { action: 'onChange' } }
} as ComponentMeta<typeof UnitSurfaceSelect>;

const Template: ComponentStory<typeof UnitSurfaceSelect> = (args) => <UnitSurfaceSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: "max-w-[30rem]"
};