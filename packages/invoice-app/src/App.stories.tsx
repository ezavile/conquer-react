import { Story, Meta } from '@storybook/react';

import App from './App';

export default {
  title: 'Example/App',
  component: App,
} as Meta;

const Template: Story<{}> = (args) => <App {...args} />;

export const Primary = Template.bind({});
