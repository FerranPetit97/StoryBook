import type { Meta, StoryObj } from '@storybook/angular';
import { CTAButtonComponent } from '@ferranpetit/relative';

const meta: Meta<CTAButtonComponent> = {
  title: 'Basics/CTA Button',
  component: CTAButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { table: { disable: true } },
    type: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'raw',
        'primary--danger',
        'secondary--danger',
        'raw--danger',
      ],
      description: 'Define el estilo del botón',
      table: {
        type: {
          summary:
            'primary | secondary | tertiary | raw | primary--danger | secondary--danger | raw--danger',
        },
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
    loading: {
      control: 'boolean',
      description: 'Muestra el estado de carga del botón',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Ocupa todo el espacio en ancho',
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita el botón',
    },
    icon: {
      control: {
        type: 'object',
      },
      description: 'Añadir icono con estructura: { src: "assets/icons/download.svg", alt: "Icono de descarga"}',
      defaultValue: null,
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'null' },
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
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
};

export const Raw: Story = {
  args: {
    type: 'raw',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
};

export const PrimaryDanger: Story = {
  args: {
    type: 'primary--danger',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};

export const SecondaryDanger: Story = {
  args: {
    type: 'secondary--danger',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};

export const RawDanger: Story = {
  args: {
    type: 'raw--danger',
    size: 'medium',
    label: 'Button',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  argTypes: {
    disabled: { table: { disable: true } },
  },
};
