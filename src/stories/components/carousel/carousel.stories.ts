import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { CarouselComponent } from './carousel.component';

const meta: Meta<CarouselComponent> = {
  title: 'Basics/Carousel',
  component: CarouselComponent,
  tags: ['autodocs'],
  argTypes: {
    numberOfItems: {
      control: 'number',
      defaultValue: 5,
      description: 'Number of items in the carousel',
    },
    args: {
      control: 'object',
      defaultValue: {
        height: 'full',
        width: 'full',
      },
      description: 'Basic arguments for styling',
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<CarouselComponent>;

export const Primary: Story = {
  args: {
    numberOfItems: 5,
    args: { height: 100, width: 100 },
  },
  render: (args) => ({
    props: args,
    template: `
      <app-carousel [args]='args' [numberOfItems]="numberOfItems">
          <div carousel-item>Hola</div>
      </app-carousel>
    `,
  }),
};
