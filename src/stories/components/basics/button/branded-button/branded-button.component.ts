import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'rlv-branded-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './branded-button.component.html',
  styleUrls: ['./branded-button.css'],
})
export class BrandedButtonComponent implements AfterViewInit {
  @ViewChild('button', { static: true }) button!: ElementRef<HTMLButtonElement>;

  buttonWidth: number | null = null;

  ngAfterViewInit() {
    const button = this.button.nativeElement;
    this.buttonWidth = button.offsetWidth;
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
