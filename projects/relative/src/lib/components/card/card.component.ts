import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ClickPressureDirective } from '@relative/lib/directives/clickPressure.directive';

interface IOptions {
  width?: number | string;
  backgroundColor?: string;
  boxShadowColor?: string;
  clickable?: boolean;
}

interface ILink {
  text: string;
  url: string;
}

@Component({
  selector: 'rlv-card',
  standalone: true,
  imports: [CommonModule, ClickPressureDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() title: string;
  @Input() options: IOptions;
  @Input() link: ILink;

  clickPressColor: string = '#8B8B8B';

  relocation() {
    if (this.options.clickable && this.link.url) {
      location.href = this.link.url;
    }
  }

  get styles() {
    return {
      width: this.options.width,
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
