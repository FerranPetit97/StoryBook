import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '@relative/public-api';

const meta: Meta<CardComponent> = {
  title: 'Cards/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Card Component

El **Card Component** es un contenedor versátil para mostrar contenido agrupado. Es ideal para representar información con una estructura clara y componentes como encabezados, contenido principal, e información adicional en el pie.

#### Características principales:
- **Personalización**: Permite ajustar el ancho, colores de fondo y sombra, y otras opciones mediante \`options\`.
- **Interactividad**: Soporta un estado clicable que redirige a un enlace definido con la propiedad \`link\`.
- **Slots**: Admite tres secciones principales:
  - **Header**: Para encabezados, imágenes o títulos.
  - **Content**: Para el contenido principal del card.
  - **Footer**: Para acciones o información complementaria.

#### Uso básico:
~~~html
<rlv-card 
  [options]="{ width: '300px', backgroundColor: '#fff', boxShadowColor: 'rgba(0,0,0,0.1)', clickable: true }"
  [link]="'/somewhere'"
>
  <div class="card-header" header>
    <img src="./assets/img/example.webp" alt="Image description" />
    <h3>Card Title</h3>
  </div>
  <div class="card-content" content>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam eum esse quasi sequi non doloremque labore voluptates laboriosam.
    </p>
  </div>
  <div class="card-footer" footer>
    <span>View ></span>
  </div>
</rlv-card>
~~~
`,
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: 'Opciones de configuración del card, como tamaño, colores y estado clicable.',
      table: {
        type: { summary: 'IOptions' },
        defaultValue: { summary: '{}' },
      },
    },
    link: {
      control: 'text',
      description: 'URL al que se redirige cuando el card es clicable.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

const CardTemplate: Story = {
  render: (args) => ({
    props: args,
    template: `
    <rlv-card [options]="options" [link]="link">
      <div class="card-header" header> 
        <img src="./assets/img/example.webp" alt="Image description" />
        <h3>Card Title</h3>
      </div>
      <div class="card-content" content>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam eum esse quasi sequi non doloremque labore voluptates laboriosam, placeat modi nemo dolore assumenda. Laudantium, tenetur! Cupiditate at aperiam reiciendis.
        </p>
      </div>

      <div class="card-footer" footer>
        <span>View ></span>
      </div>
    </rlv-card>
  `,
    styles: [
      '.card-header { display: flex; flex-direction: column; gap: 16px; } img { width: 300px; height: 300px; object-fit: cover; border-radius: 2px; } .card-footer { display: flex; justify-content: end; margin-right: 20px; }',
    ],
  }),
};

export const Card: Story = {
  ...CardTemplate,
  args: {
    options: {
      width: '300px',
      color: '#000000',
      backgroundColor: '#ffffff',
      boxShadowColor: 'rgba(0, 0, 0, 0.1)',
      clickable: true,
    },
    link: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Un card básico con opciones de personalización para ancho, colores, sombra y estado clicable.',
      },
    },
  },
};
