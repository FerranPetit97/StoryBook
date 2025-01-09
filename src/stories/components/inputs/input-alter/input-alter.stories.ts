import type { Meta, StoryObj } from '@storybook/angular';
import { InputAlterComponent } from '@relative/public-api';

const meta: Meta<InputAlterComponent> = {
  title: 'Inputs/Input Alter',
  component: InputAlterComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'El componente de input permite capturar texto del usuario.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor actual del input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto guía que aparece dentro del input',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el input',
    },
    width: {
      control: 'text',
      description: 'Ancho del input',
    },
  },
};

export default meta;
type Story = StoryObj<InputAlterComponent>;

export const Text: Story = {
  args: {
    placeholder: 'Search',
    disabled: false,
    width: '500',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Search',
    disabled: false,
    width: '500',
    icon: {
      src: 'assets/icons/lupa.svg',
      alt: 'Search icon',
    },
  },
};
