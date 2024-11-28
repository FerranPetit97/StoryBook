import { StoryObj, Meta } from '@storybook/angular';
import { ColorPaletteComponent } from './color-pallete.component';

export default {
  title: 'Design System',
  component: ColorPaletteComponent,
  args: {
    colors: [
      { name: 'Primary', hex: '#3E8989' },
      { name: 'Low Priority', hex: '#616161' },
      { name: 'Success', hex: '#4caf50' },
      { name: 'Danger', hex: '#e53935' },
      { name: 'Warning', hex: '#fb8c00' },
      { name: 'Neutral', hex: '#e0e0e0' },
    ]
  },
} as Meta;

type Story = StoryObj<ColorPaletteComponent>;

export const ColorPalette: Story = {};
