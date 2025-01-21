import type { Meta, StoryObj } from '@storybook/angular';
import { BrandedButtonComponent } from '@relative/public-api';

const meta: Meta<BrandedButtonComponent> = {
  title: 'Buttons/Branded Button',
  component: BrandedButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Branded Button

El **Branded Button** está diseñado para alinearse con los lineamientos de identidad visual de la marca. Este botón se utiliza principalmente para acciones secundarias o de navegación, permitiendo a los desarrolladores personalizarlo con diferentes colores y tamaños.

#### Características principales:
- **Colores personalizables**: Puedes cambiar tanto el color de fondo como el del texto.
- **Diferentes tamaños**: Ofrece soporte para tamaños \`small\`, \`medium\` y \`large\`.
- **Hover States**: Soporta un color de fondo diferente al pasar el cursor sobre el botón.
- **Responsivo**: Ajusta automáticamente el ancho mínimo del botón para adaptarse al contenido (texto).

#### Uso básico:
~~~html
<rlv-branded-button
  [label]="'Click me'"
  [size]="'medium'"
  [backgroundColor]="'#3E8989'"
  [backgroundHover]="'#316d6d'"
  [color]="'#ffffff'"
  (onClick)="miFuncion()">
</rlv-branded-button>
~~~
`,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra en el botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#3E8989' },
      },
    },
    backgroundHover: {
      control: 'color',
      description: 'Color del fondo al pasar el cursor por encima del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'black' },
      },
    },
    color: {
      control: 'color',
      description: 'Color del texto del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Tamaño del botón.',
      table: {
        type: { summary: "'large' | 'medium' | 'small'" },
        defaultValue: { summary: 'medium' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Evento que se dispara al hacer clic en el botón.',
      table: {
        type: { summary: 'EventEmitter<Event>' },
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
  parameters: {
    docs: {
      description: {
        story:
          'Botón de tamaño **mediano** con color de fondo principal, color de texto blanco, y color de hover definido.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Botón de tamaño **grande** para llamar más la atención o enfatizar acciones importantes.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story:
          'Botón de tamaño **pequeño**, ideal para espacios compactos o acciones menos destacadas.',
      },
    },
  },
};
