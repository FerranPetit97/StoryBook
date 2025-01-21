import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input, ViewChild
} from '@angular/core';
import { ClickPressureDirective } from '@relative/lib/directives/clickPressure.directive';

interface IOptions {
  width?: number | string;
  color?: string;
  backgroundColor?: string;
  boxShadowColor?: string;
  clickable?: boolean;
}

@Component({
  selector: 'rlv-card',
  standalone: true,
  imports: [CommonModule, ClickPressureDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @ViewChild('cardElement', { static: true }) cardElement!: ElementRef;
  @Input() options: IOptions;
  @Input() link: string;

  clickPressColor: string = '#8B8B8B';

  relocation() {
    if (this.options.clickable && this.link) {
      location.href = this.link;
    }
  }

  get styles() {
    return {
      width: this.options.width,
      color: this.options.color,
      'background-color': this.options.backgroundColor,
      'box-shadow': '0 2px 4px 2px ' + this.options.boxShadowColor,
    };
  }

  get classes() {
    return {
      clickable: this.options.clickable,
    };
  }
}
