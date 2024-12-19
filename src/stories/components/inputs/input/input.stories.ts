import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@relative/public-api';

const meta: Meta<InputComponent> = {
  title: 'Inputs/Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'El componente de input permite capturar texto del usuario. Incluye soporte para validaciones como campos obligatorios (`required`) y se integra con Angular Reactive Forms.',
      },
    },
  },
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Hace que el campo sea obligatorio',
      table: {
        type: { summary: 'boolean' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email'],
      description: 'Tipo de input (text, password, email)',
    },
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
    valueChange: { action: 'valueChange', description: 'Valor final del input.' },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Text: Story = {
  args: {
    placeholder: 'Nombre',
    type: 'text',
    required: false,
    disabled: false,
    isTouched: false,
  },
};

export const EMail: Story = {
  args: {
    placeholder: 'Correo Electrónico',
    type: 'email',
    required: false,
    disabled: false,
    isTouched: false,
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Contraseña',
    type: 'password',
    required: false,
    disabled: false,
    isTouched: false,
  },
};

export const Required: Story = {
  args: {
    placeholder: 'Name',
    type: 'text',
    required: true,
    disabled: false,
    isTouched: false,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Name',
    type: 'text',
    required: false,
    disabled: false,
    isTouched: true,
  },
};
