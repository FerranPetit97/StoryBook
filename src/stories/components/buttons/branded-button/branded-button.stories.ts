import type { Meta, StoryObj } from '@storybook/angular';
import { BrandedButtonComponent } from '@relative/public-api';

const meta: Meta<BrandedButtonComponent> = {
  title: 'Buttons/Branded Button',
  component: BrandedButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'El botón Branded está diseñado para cumplir con los lineamientos de identidad visual de la marca. Se utiliza para acciones secundarias o de navegación y permite personalizar colores y tamaños.',
      },
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Texto del botón.' },
    backgroundColor: { control: 'color', description: 'Color del botón.' },
    color: { control: 'color', description: 'Color del texto del botón.' },
    backgroundHover: {
      control: 'color',
      description: 'Color del botón al pasar por encima.',
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
type Story = StoryObj<BrandedButtonComponent>;

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    backgroundColor: '#3E8989',
    backgroundHover: '#316d6d',
    color: '#ffffff',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
    backgroundColor: '#3E8989',
    backgroundHover: '#316d6d',
    color: '#ffffff',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
    backgroundColor: '#3E8989',
    backgroundHover: '#316d6d',
    color: '#ffffff',
  },
};
