import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CTAButtonComponent, InputComponent } from '@relative/public-api';

type suffixes = '@gmail.com' | '@hotmail.com' | '@outlook.com' | '';

//TODO: tengo que documentar todo lo que hay que hacer para que los inputs esten integrados con el reactiveForms de angular

@Component({
  selector: 'rlv-login-form',
  standalone: true,
  imports: [InputComponent, CTAButtonComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  form: FormGroup;
  loading: boolean = false;

  sufixSelected: suffixes;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required]],
      password: [null, Validators.required],
    });
  }

  onSubmit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);

    this.form.markAllAsTouched();

    console.log(this.form.value);
    if (this.form.valid) {
      if (this.sufixSelected) {
        this.getFormControl('email').setValue(
          this.getFormControl('email').value + this.sufixSelected
        );
      }
      this.getFormControl('name').disable();
      this.getFormControl('email').disable();
      this.getFormControl('password').disable();
      console.log(this.form.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  getFormControl(value: string) {
    return this.form.get(value) as FormControl;
  }

  resetForm() {
    this.form.reset();
  }

  getSuffixEmail(event: suffixes) {
    this.sufixSelected = event;
  }

  getError(control: string): string {
    if (
      this.getFormControl(control).hasError('required') &&
      this.getFormControl(control).touched
    ) {
      return 'Este campo es requerido';
    }

    return '';
  }
}
