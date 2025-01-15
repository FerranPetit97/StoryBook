import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '@relative/public-api';

const meta: Meta<CardComponent> = {
  title: 'Cards/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

const CardTemplate: Story = {
  render: (args) => ({
    props: args,
    template: `
      <rlv-card [title]="title" [options]="options" [link]="link">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam eum esse quasi sequi non doloremque labore voluptates laboriosam, placeat modi nemo dolore assumenda. Laudantium, tenetur! Cupiditate at aperiam reiciendis.
        </p>
        <div footer>Footer</div>
      </rlv-card>
    `,
  }),
};

export const Card: Story = {
  ...CardTemplate,
  args: {
    title: 'Card Title',
    options: {
      width: '10px',
      backgroundColor: '#fff',
      boxShadowColor: 'rgba(0, 0, 0, 0.1)',
      clickable: true,
    },
    link: {
      text: 'Learn more',
      url: '',
    },
  },
};
