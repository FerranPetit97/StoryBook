import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',
  brandTitle: 'RELATIVE',
  brandUrl: 'https://ferranpetit.vercel.app/',
  brandImage: '/assets/favicon/favicon.ico',
});

addons.setConfig({
  theme: customTheme,
});
