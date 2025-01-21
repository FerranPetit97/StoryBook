import type { Meta, StoryObj } from '@storybook/angular';
import { CTAButtonComponent } from '@relative/public-api';

const meta: Meta<CTAButtonComponent> = {
  title: 'Buttons/CTA Button',
  component: CTAButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### CTA Button

El **CTA Button** (Call to Action Button) es un componente clave diseñado para resaltar acciones importantes en la interfaz. Este botón ofrece flexibilidad en estilos, tamaños, y funcionalidad interactiva, adaptándose a diferentes casos de uso.

#### Características principales:
- **Estilos múltiples**: Opciones para tipos como \`primary\`, \`secondary\`, \`tertiary\`, entre otros.
- **Soporte de iconos**: Puedes añadir iconos personalizados con atributos \`src\` y \`alt\`.
- **Interactividad**: Incluye estados \`hover\`, \`active\`, y \`disabled\`.
- **Responsivo**: Admite el ajuste de ancho completo con la propiedad \`fullWidth\`.
- **Estado de carga**: Indica que se está ejecutando una acción con el estado \`loading\`.

#### Uso básico:
~~~html
<rlv-cta-button
  [type]="'primary'"
  [size]="'medium'"
  [label]="'Click Me'"
  [loading]="false"
  [fullWidth]="false"
  [disabled]="false"
  [icon]="{ src: 'assets/icons/check.svg', alt: 'Check Icon' }"
  (onClick)="miFuncion()">
</rlv-cta-button>
~~~
`,
      },
    },
  },
  argTypes: {
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
      description: 'Define el estilo del botón.',
      table: {
        type: {
          summary:
            'primary | secondary | tertiary | raw | primary--danger | secondary--danger | raw--danger',
        },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Define el tamaño del botón.',
      table: {
        type: { summary: 'large | medium | small' },
        defaultValue: { summary: 'medium' },
      },
    },
    label: {
      control: 'text',
      description: 'Texto que se muestra dentro del botón.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Muestra un indicador de carga en el botón.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Hace que el botón ocupe todo el ancho disponible.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Deshabilita la interacción con el botón.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'object',
      description: 'Añade un icono al botón. La estructura incluye \`src\` (ruta del icono) y \`alt\` (descripción alternativa).',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{ src: "", alt: "" }' },
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
type Story = StoryObj<CTAButtonComponent>;

export const Primary: Story = {
  args: {
    type: 'primary',
    size: 'medium',
    label: 'Primary Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **primary** se usa para acciones principales destacadas.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **secondary** se utiliza para acciones secundarias dentro de la interfaz.',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    size: 'medium',
    label: 'Tertiary Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **tertiary** ofrece una opción más discreta y minimalista.',
      },
    },
  },
};

export const Raw: Story = {
  args: {
    type: 'raw',
    size: 'medium',
    label: 'Raw Button',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **raw** es completamente plano, ideal para acciones de bajo perfil.',
      },
    },
  },
};

export const PrimaryDanger: Story = {
  args: {
    type: 'primary--danger',
    size: 'medium',
    label: 'Primary Danger',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **primary--danger** se utiliza para resaltar acciones críticas o destructivas.',
      },
    },
  },
};

export const SecondaryDanger: Story = {
  args: {
    type: 'secondary--danger',
    size: 'medium',
    label: 'Secondary Danger',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **secondary--danger** es ideal para acciones destructivas secundarias.',
      },
    },
  },
};

export const RawDanger: Story = {
  args: {
    type: 'raw--danger',
    size: 'medium',
    label: 'Raw Danger',
    loading: false,
    fullWidth: false,
    icon: {
      src: '',
      alt: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'El estilo **raw--danger** combina un diseño plano con una intención destructiva.',
      },
    },
  },
};
