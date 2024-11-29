import { StoryObj, Meta } from '@storybook/angular';
import { TypographyComponent } from './typography.component';

const categories = [
  {
    category: 'Encabezados',
    styles: [
      {
        name: 'Heading 1',
        element: 'h1',
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '1.5',
        color: '#333333',
        fontFamily: 2,
      },
      {
        name: 'Heading 2',
        element: 'h2',
        fontSize: '28px',
        fontWeight: '600',
        lineHeight: '1.4',
        color: '#444444',
        fontFamily: 2,
      },
      {
        name: 'Heading 3',
        element: 'h3',
        fontSize: '24px',
        fontWeight: '500',
        lineHeight: '1.4',
        color: '#555555',
        fontFamily: 2,
      },
      {
        name: 'Heading 4',
        element: 'h4',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '1.3',
        color: '#666666',
        fontFamily: 2,
      },
      {
        name: 'Heading 5',
        element: 'h5',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.3',
        color: '#777777',
        fontFamily: 2,
      },
      {
        name: 'Heading 6',
        element: 'h6',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.3',
        color: '#888888',
        fontFamily: 2,
      },
    ],
  },
  {
    category: 'Texto',
    styles: [
      {
        name: 'Párrafo',
        element: 'p',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.6',
        color: '#555555',
        fontFamily: 1,
      },
      {
        name: 'Texto Resaltado',
        element: 'strong',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '1.6',
        color: '#333333',
        fontFamily: 1,
      },
      {
        name: 'Texto Enfatizado',
        element: 'em',
        fontSize: '16px',
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: '1.6',
        color: '#555555',
        fontFamily: 1,
      },
      {
        name: 'Texto Reducido',
        element: 'small',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '1.4',
        color: '#666666',
        fontFamily: 1,
      },
      {
        name: 'Cita',
        element: 'blockquote',
        fontSize: '18px',
        fontWeight: '400',
        fontStyle: 'italic',
        lineHeight: '1.6',
        color: '#444444',
        fontFamily: 2,
      },
    ],
  },
  {
    category: 'Listas',
    styles: [
      {
        name: 'Lista Ordenada',
        element: 'ol',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#555555',
        fontFamily: 1,
      },
      {
        name: 'Lista Desordenada',
        element: 'ul',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#555555',
        fontFamily: 1,
      },
      {
        name: 'Elemento de Lista',
        element: 'li',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#555555',
        fontFamily: 1,
      },
    ],
  },
  {
    category: 'Formularios',
    styles: [
      {
        name: 'Etiqueta',
        element: 'label',
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.4',
        color: '#333333',
        fontFamily: 1,
      },
      {
        name: 'Campo de Texto',
        element: 'input',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#444444',
        fontFamily: 1,
      },
      {
        name: 'Área de Texto',
        element: 'textarea',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.5',
        color: '#444444',
        fontFamily: 1,
      },
      {
        name: 'Botón',
        element: 'button',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '1.5',
        color: '#ffffff',
        backgroundColor: '#3E8989',
        fontFamily: 1,
      },
    ],
  },
  {
    category: 'Código',
    styles: [
      {
        name: 'Código',
        element: 'code',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.4',
        color: '#ffffff',
        backgroundColor: '#3E8989',
        fontFamily: 3,
      },
      {
        name: 'Bloque',
        element: 'pre',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.4',
        color: '#ffffff',
        backgroundColor: '#343a40',
        fontFamily: 3,
      },
    ],
  },
];


const fonts = [
  {
    name: 'Inter',
    preview: 'Example',
    type: 1,
  },
  {
    name: 'Playfair Display',
    preview: 'Example',
    type: 2,
  },
  {
    name: 'Courier New',
    preview: 'Example',
    type: 3,
  }
]

export default {
  title: 'Design System/Typography',
  component: TypographyComponent,
  args: {
    categories,
    fonts,
  },
} as Meta;

type Story = StoryObj<TypographyComponent>;

export const Typography: Story = {};
