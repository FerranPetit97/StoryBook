import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light', // Fondo por defecto
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'custom', value: '#e1b31b' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Design System', // La sección "Design System" aparecerá primero
          'Basics',
        ],
      },
    },
  },
};

export default preview;
