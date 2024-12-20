import type { Meta, StoryObj } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';

const meta: Meta<LoginFormComponent> = {
  title: 'Forms/Login Form',
  component: LoginFormComponent,
  argTypes: {},
};

export default meta;
type Story = StoryObj<LoginFormComponent>;

export const Login: Story = {
  args: {},
};
