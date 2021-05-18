import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Variants = Template.bind({
  variant: 'primary',
});

Variants.args = {
  variant: 'primary',
  children: 'This is a basic button',
};

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;
