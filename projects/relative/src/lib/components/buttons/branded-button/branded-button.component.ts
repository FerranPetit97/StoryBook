import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ClickPressureDirective } from '@relative/public-api';

@Component({
  selector: 'rlv-branded-button',
  standalone: true,
  imports: [CommonModule, ClickPressureDirective],
  templateUrl: './branded-button.component.html',
  styleUrls: ['./branded-button.css'],
})
export class BrandedButtonComponent {
  @Input()
  type: 'solid' | 'outline' | 'ghost' = 'solid';

  @Input()
  size: 'xs' | 's' | 'm' | 'lg' | 'xl' = 'm';

  @Input()
  label: string = 'Button';

  @Input()
  disabled: boolean = false;

  @Input()
  fullWidth: boolean = false;

  @Output()
  onClick = new EventEmitter<Event>();

  get classes(): string[] {
    return [
      'rlv-branded-button',
      `rlv-branded-button--${this.size}`,
      `rlv-branded-button--${this.type}`,
      this.disabled ? 'rlv-branded-button--disabled' : '',
    ];
  }

  get styles() {
    return {
      width: this.fullWidth ? '100%' : 'auto',
    };
  }
}
