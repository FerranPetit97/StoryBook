import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rlv-cta-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.css'],
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

  @Input()
  loading = false;

  @Input()
  fullWidth = false;

  @Input()
  disabled = false;

  @Input()
  icon: { src: string; alt: string } = {
    src: '',
    alt: '',
  };

  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    const width: string | null = this.fullWidth ? 'full' : '';
    const disabled: string | null = this.disabled ? 'disabled' : '';

    return [
      'rlv-cta-button',
      `rlv-cta-button--${this.size}`,
      `rlv-cta-button--${this.type}`,
      width,
      disabled,
    ];
  }
}
