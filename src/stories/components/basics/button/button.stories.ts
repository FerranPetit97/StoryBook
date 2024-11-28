import type { Meta, StoryObj } from '@storybook/angular';
import { CTAButtonComponent } from './button.component';

const meta: Meta<CTAButtonComponent> = {
  title: 'Basics/CTA Button',
  component: CTAButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { table: { disable: true } },
    type: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Define el estilo del botón',
      table: {
        type: { summary: 'primary | secondary | tertiary' },
      },
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Define el tamaño del botón',
      table: {
        type: { summary: 'large | medium | small' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CTAButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    label: 'Button',
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    label: 'Button',
  },
};

export const Medium: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    label: 'Button',
  },
};
