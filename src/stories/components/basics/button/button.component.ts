import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rlv-cta-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.css'],
})
export class CTAButtonComponent {
  @Input()
  type = 'primary';

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['rlv-cta-button', `rlv-cta-button--${this.size}`, `rlv-cta-button--${this.type}`];
  }
}
