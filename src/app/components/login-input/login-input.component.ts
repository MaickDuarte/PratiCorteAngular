import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'email' | 'password'

@Component({
  selector: 'app-login-input',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-input.component.html',
  styleUrl: './login-input.component.scss'
})
export class LoginInputComponent {
  @Input() formName: string = ''
  @Input() type: InputType = 'text'
  @Input() label: string = ''
  @Input() placeholder: string = ''
}
