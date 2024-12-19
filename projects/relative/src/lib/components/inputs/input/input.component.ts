import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';

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
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() required: boolean = false;
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: 'text' | 'password' | 'email';
  @Input() disabled: boolean = false;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  isTouched: boolean = false;
  isFocused: boolean = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  originalType: string;
  sufixSelected: '@gmail.com' | '@hotmail.com' | '@outlook.com' | 'other' =
    '@gmail.com';
  isSelectOpen: boolean = false;

  ngOnInit(): void {
    this.setOriginalType();
    this.writeValue(this.value);
  }

  // Angular Forms Functions

  writeValue(value: string): void {
    this.value = value;
    this.originalType = this.type;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  markAsTouched() {
    this.isTouched = true;
    this.onTouched();
  }

  onBlur() {
    this.isTouched = true;
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (this.required && !this.value.trim()) {
      return { required: true };
    }
    return null;
  }

  // Own Functions

  setFocus(): void {
    this.isFocused = !this.isFocused;
  }

  setOriginalType(): void {
    this.originalType = this.type;
  }

  openCloseSelect(): void {
    this.isSelectOpen = !this.isSelectOpen;
  }

  viewPassword(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  selectInput(selectedText: string) {
    this.sufixSelected = selectedText as
      | '@gmail.com'
      | '@hotmail.com'
      | '@outlook.com'
      | 'other';

    this.onInputChange();
  }

  onInputChange(event?: Event): void {
    if (event) {
      const inputElement = event.target as HTMLInputElement;
      this.value = inputElement.value;
    }

    if (this.type === 'email' && this.value.trim()) {
      const finalValue = this.value + this.sufixSelected;
      this.onChange(finalValue);
      this.valueChange.emit(finalValue);
    } else {
      this.onChange(this.value);
      this.valueChange.emit(this.value);
    }
  }
}
