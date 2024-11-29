import { StoryObj, Meta } from '@storybook/angular';
import { ColorPaletteComponent } from './color-pallete.component';

export default {
  title: 'Design System',
  component: ColorPaletteComponent,
  args: {
    baseColors: [
      { name: 'Primary', hex: '#3E8989' },
      { name: 'Low Priority', hex: '#616161' },
      { name: 'Success', hex: '#4caf50' },
      { name: 'Danger', hex: '#e53935' },
      { name: 'Warning', hex: '#fb8c00' },
      { name: 'Neutral', hex: '#e0e0e0' },
      { name: 'Disabled', hex: '#e0e0e0' },
    ],
    hoverColors: [
      { name: 'Hover Button Primary', hex: '#316d6d' },
      { name: 'Hover Button Secondary', hex: '#3e898941' },
      { name: 'Hover Button Tertiary', hex: '#61616141' },
      { name: 'Hover Button Raw', hex: '#313131' },
      { name: 'Hover Button Primary Danger', hex: '#b82e2b' },
      { name: 'Hover Button Secondary Danger', hex: '#e5393541' },
      { name: 'Hover Button Tertiary Danger', hex: '#b82e2b' },
    ],
  },
} as Meta;

type Story = StoryObj<ColorPaletteComponent>;

export const ColorPalette: Story = {};
