import { Component, Input } from '@angular/core';

export interface IArguments {
  width: number | 'full';
  height: number | 'full';
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  @Input() numberOfItems: number = 0;
  @Input() args: IArguments = {
    height: 'full',
    width: 'full',
  };

  constructor() {
    this.args = {
      ...this.args,
      height: this.args.height ?? 'full',
      width: this.args.width ?? 'full',
    };
  }
}
