import type { Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';

// Configura compodoc
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      disable: true,
    },
    docs: {
      extractArgTypes: () => ({}),
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#333333' },
        { name: 'custom', value: '#e1b31b' },
      ],
    },
    options: {
      storySort: {
        order: ['Design System', 'Basics'],
      },
    },
  },
};

export default preview;
