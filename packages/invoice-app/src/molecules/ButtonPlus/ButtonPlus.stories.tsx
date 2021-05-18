import { Meta, Story } from '@storybook/react';

import { ButtonProps } from '../../atoms';
import { ButtonPlus } from './ButtonPlus';

const Template: Story<ButtonProps> = (args) => <ButtonPlus {...args} />;

export const Variants = Template.bind({
  variant: 'primary',
});

Variants.args = {
  variant: 'primary',
  children: 'This is a button with an icon plus',
};

export default {
  title: 'Molecules/ButtonPlus',
  component: ButtonPlus,
} as Meta;
