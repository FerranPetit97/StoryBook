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

El **Branded Button** es un componente diseñado para representar botones estilizados que cumplen con las directrices de la marca. Este botón puede utilizarse en diferentes contextos, ya sea para destacar una acción principal o para complementar acciones secundarias.

---

#### **Propiedades principales**
- **Variantes de diseño**: \`solid\`, \`outline\`, \`ghost\`.
- **Tamaños personalizables**: Desde tamaños muy pequeños (\`xs\`) hasta extra grandes (\`xl\`).
- **Ancho completo**: Con la propiedad \`fullWidth\`.
- **Gestión de eventos**: Expone un evento \`onClick\` para capturar interacciones.
- **Estado deshabilitado**: Con la propiedad \`disabled\`, se desactiva la interacción del botón y se aplican estilos visuales de inactividad.

---

#### **Uso básico**

~~~html
<rlv-branded-button
  [type]="'solid'"
  [label]="'Click me'"
  [size]="'m'"
  [fullWidth]="true"
  [disabled]="false"
  (onClick)="miFuncion()">
</rlv-branded-button>
~~~

---

### **Variantes**
Las siguientes variantes están disponibles para este botón:
- **Solid**: Fondo sólido para enfatizar acciones primarias.
- **Outline**: Borde visible para acciones secundarias.
- **Ghost**: Fondo transparente, ideal para contextos ligeros o minimalistas.

---
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
      description: 'Define la variante de diseño del botón.',
      table: {
        type: { summary: `'solid' | 'outline' | 'ghost'` },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'radio',
      options: ['xs', 's', 'm', 'lg', 'xl'],
      description: 'Define el tamaño del botón.',
      table: {
        type: { summary: `'xs' | 's' | 'm' | 'lg' | 'xl'` },
        defaultValue: { summary: 'm' },
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
    fullWidth: {
      control: 'boolean',
      description:
        'Define si el botón ocupa el ancho completo de su contenedor.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        'Desactiva la interacción con el botón y aplica un estilo deshabilitado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Evento que se dispara cuando se hace clic en el botón.',
      table: {
        type: { summary: 'EventEmitter<Event>' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<BrandedButtonComponent>;

export const Solid: Story = {
  args: {
    type: 'solid',
    label: 'Solid Button',
    size: 'm',
    fullWidth: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con fondo sólido, ideal para acciones primarias.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    label: 'Outline Button',
    size: 'm',
    fullWidth: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón con borde visible, ideal para acciones secundarias.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    type: 'ghost',
    label: 'Ghost Button',
    size: 'm',
    fullWidth: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Botón transparente, ideal para un diseño más sutil o minimalista.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    type: 'solid',
    label: 'Full Width Button',
    size: 'm',
    fullWidth: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón de ancho completo con tamaño grande.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    type: 'solid',
    label: 'Disabled Button',
    size: 'm',
    fullWidth: false,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Botón deshabilitado con fondo sólido. Útil para indicar acciones no disponibles.',
      },
    },
  },
};
