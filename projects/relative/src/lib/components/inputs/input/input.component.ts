import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rlv-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input()
  required: boolean = false;

  @Input()
  placeholder: string = '';

  @Input()
  value: string = '';

  @Input()
  type: 'text' | 'password' | 'email';

  @Input()
  disabled: boolean = false;

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  isFocused: boolean = false;

  originalType: string;

  sufixSelected: '@gmail.com' | '@hotmail.com' | '@outlook.com' | 'other' =
    '@gmail.com';

  isSelectOpen: boolean = false;

  ngOnInit(): void {
    this.setOriginalType();
  }

  getFocus(): void {
    this.isFocused = !this.isFocused;
  }

  setOriginalType(): void {
    this.originalType = this.type;
  }

  viewPassword(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  selectInput(selectedText: string) {
    this.sufixSelected = selectedText as '@gmail.com' | '@hotmail.com' | '@outlook.com' | 'other';
  }

  openCloseSelect() {
    this.isSelectOpen = !this.isSelectOpen;
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.valueChange.emit(this.value);
  }
}
