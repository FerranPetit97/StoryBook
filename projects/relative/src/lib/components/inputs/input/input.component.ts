import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type suffixes = '@gmail.com' | '@hotmail.com' | '@outlook.com' | '';

@Component({
  selector: 'rlv-input',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: 'text' | 'password' | 'email';
  @Input() disabled: boolean = false;
  @Input() hasError: string;
  @Output() sufixSelected: EventEmitter<suffixes> =
    new EventEmitter<suffixes>();
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  selectedText: '@gmail.com' | '@hotmail.com' | '@outlook.com' | 'other';

  isFocused = false;
  onTouched: OnTouchFn = () => {};
  onChange: OnChangeFn<string> = () => {};

  originalType: string;
  isSelectOpen: boolean = false;

  writeValue(value: string | null): void {
    this.value = value || ''; // Si es null, se establece como una cadena vacía
  }
  registerOnChange(fn: OnChangeFn<string>): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this.setOriginalType();
    this.selectInput('@gmail.com');
  }

  setFocus(): void {
    this.isFocused = !this.isFocused;
  }

  openCloseSelect(): void {
    if (this.disabled) return;
    this.isSelectOpen = !this.isSelectOpen;
  }

  setOriginalType(): void {
    this.originalType = this.type;
  }

  viewPassword(): void {
    if (this.disabled) return;
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  selectInput(
    input: '@gmail.com' | '@hotmail.com' | '@outlook.com' | 'other'
  ): void {
    this.selectedText = input;

    if (this.selectedText === 'other') {
      this.sufixSelected.emit('');
      return;
    }

    this.sufixSelected.emit(this.selectedText);
  }

  onInputChange(event?: Event): void {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      this.value = inputElement.value;
    }

    this.onChange(this.value); // Notifica al FormControl del cambio
    this.valueChange.emit(this.value); // Emite el cambio hacia afuera
  }
}

type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;
