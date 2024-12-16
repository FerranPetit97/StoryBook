import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'rlv-cta-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-button.component.html',
  styleUrls: ['./cta-button.css'],
})
export class CTAButtonComponent {
  @ViewChild('buttonText') buttonRef!: ElementRef<HTMLDivElement>;
  buttonMinWidth: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.buttonRef) {
        this.buttonMinWidth = `${
          this.buttonRef.nativeElement.offsetWidth + this.extraPaddingWidth
        }px`;
      }
    });
  }

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

  get extraPaddingWidth(): number {
    let width = 40;

    switch (this.size) {
      case 'small':
      case 'medium':
      default:
        width = 40;
        break;
      case 'large':
        width = 48;
    }
    return width;
  }
}
