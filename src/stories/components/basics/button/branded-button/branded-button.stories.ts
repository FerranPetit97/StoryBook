import type { Meta, StoryObj } from '@storybook/angular';
// import { BrandedButtonComponent } from '../../../../../../projects/relative/src/public-api';
import { BrandedButtonComponent } from '@relative/public-api';

const meta: Meta<BrandedButtonComponent> = {
  title: 'Basics/Branded Button',
  component: BrandedButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    backgroundHover: { control: 'color' },
    loading: {
      control: 'boolean',
      description: 'Muestra el estado de carga del botón',
    },
  },
};

export default meta;
type Story = StoryObj<BrandedButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    backgroundColor: '#3E8989',
    backgroundHover: '#000000',
    color: '#ffffff',
    loading: false,
  },
};
