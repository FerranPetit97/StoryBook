import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ClickPressureDirective } from '@relative/public-api';

@Component({
  selector: 'rlv-branded-button',
  standalone: true,
  imports: [CommonModule, ClickPressureDirective],
  templateUrl: './branded-button.component.html',
  styleUrls: ['./branded-button.css'],
})
export class BrandedButtonComponent implements AfterViewInit {
  @ViewChild('buttonText') buttonRef!: ElementRef<HTMLDivElement>;
  buttonMinWidth: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.buttonRef) {
        this.buttonMinWidth = `${this.buttonRef.nativeElement.offsetWidth + this.extraPaddingWidth}px`;
      }
    });
  }

  @Input()
  type = 'primary';

  @Input()
  backgroundColor: string = '#3E8989';

  @Input()
  backgroundHover: string = 'black';

  @Input()
  color: string = 'white';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  isHovered = false;

  get classes(): string[] {
    return [
      'rlv-branded-button',
      `rlv-branded-button--${this.size}`,
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
