import type { Meta, StoryObj } from '@storybook/angular';
import { PreviewModalComponent } from '@relative/public-api';

const meta: Meta<PreviewModalComponent> = {
  title: 'Modals/Modal',
  component: PreviewModalComponent,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<PreviewModalComponent>;

export const Modal : Story = {
args: {
},
};
