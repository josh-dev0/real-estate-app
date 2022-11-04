import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileAvatar } from '@app/components';

export default {
  title: 'Components/ProfileAvatar',
  component: ProfileAvatar,
} as ComponentMeta<typeof ProfileAvatar>;

const Template: ComponentStory<typeof ProfileAvatar> = (args) => <ProfileAvatar {...args} />;

export const Primary = Template.bind({});
Primary.args = { size: 100 };

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'images/user.png',
  size: 100,
};

export const WithName = Template.bind({});
WithName.args = {
  className: 'text-3xl',
  name: 'Mike John',
  size: 100,
}

export const Small = Template.bind({});
Small.args = {
  src: 'images/user.png',
  size: 'small',
};

export const Default = Template.bind({});
Default.args = {
  src: 'images/user.png',
  size: 'default',
};

export const Large = Template.bind({});
Large.args = {
  src: 'images/user.png',
  size: 'large',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  src: 'images/user.png',
  size: 200
};