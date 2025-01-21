import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',
  brandTitle: 'RELATIVE',
  brandUrl: 'https://ferranpetit.vercel.app/',
  brandImage: '/assets/brand.svg',
});

addons.setConfig({
  theme: customTheme,
});
