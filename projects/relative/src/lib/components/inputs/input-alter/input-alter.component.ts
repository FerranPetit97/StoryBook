import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

interface Icon {
  src: string;
  alt: string;
}

@Component({
  selector: 'rlv-input-alter',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputAlterComponent),
      multi: true,
    },
  ],
  templateUrl: './input-alter.component.html',
  styleUrls: ['./input-alter.component.css'],
})
export class InputAlterComponent {
  @Input() disabled: boolean = false;
  @Input() placeholder: string = 'Search';
  @Input() value: string = '';
  @Input() hasError: string = '';
  @Input() width: string;
  @Input() icon: Icon;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  isFocused: boolean;
  isSelectOpen: boolean;

  ngOnInit(): void {}

  setFocus(): void {
    this.isFocused = !this.isFocused;
  }

  openCloseSelect(): void {
    if (this.disabled) return;
    this.isSelectOpen = !this.isSelectOpen;
  }

  onInputChange(event?: Event): void {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      this.value = inputElement.value;
    }
  }
}
