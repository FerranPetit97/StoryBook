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
    <rlv-card [options]="options" [link]="link">
      <div class="card-header" header> 
        <img src="./assets/img/example.webp" alt="Image description" />
        <h3>Card Title</h3>
      </div>
      <div class="card-content" content>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam eum esse quasi sequi non doloremque labore voluptates laboriosam, placeat modi nemo dolore assumenda. Laudantium, tenetur! Cupiditate at aperiam reiciendis.
        </p>
      </div>

      <div class="card-footer" footer>
        <span>View ></span>
      </div>
    </rlv-card>
  `,
    styles: [
      '.card-header { diasplay: flex; flex-direction: column; gap: 16px;} img { width: 300px; height: 300px; object-fit: cover; border-radius: 2px} .card-footer { display: flex; justify-content: end; margin-right: 20px; } ',
    ],
  }),
};

export const Card: Story = {
  ...CardTemplate,
  args: {
    options: {
      width: '10px',
      color: '#000000',
      backgroundColor: '#ffffff',
      boxShadowColor: 'rgba(0, 0, 0, 0.1)',
      clickable: true,
    },
    link: '',
  },
};
