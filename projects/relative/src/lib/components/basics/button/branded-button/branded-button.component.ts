import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'rlv-branded-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branded-button.component.html',
  styleUrls: ['./branded-button.css'],
})
export class BrandedButtonComponent implements AfterViewInit {
  @ViewChild('buttonText') buttonRef!: ElementRef<HTMLDivElement>;
  buttonMinWidth: string = '';

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.buttonRef) {
        this.buttonMinWidth = `${this.buttonRef.nativeElement.offsetWidth + 40}px`;
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
  size: 'medium' = 'medium';

  @Input()
  label = 'Button';

  @Input()
  loading = false;

  @Output()
  onClick = new EventEmitter<Event>();

  isHovered = false;
}
