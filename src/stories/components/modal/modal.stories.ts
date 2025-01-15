import type { Meta, StoryObj } from '@storybook/angular';
import { PreviewModalComponent } from './previewModal.component';

const meta: Meta<PreviewModalComponent> = {
  title: 'Modals/Modal',
  component: PreviewModalComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: `<rlv-cta-button label="Abrir" (click)="openModal()"></rlv-cta-button>`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<PreviewModalComponent>;

export const Modal: Story = {
  args: {},
};
