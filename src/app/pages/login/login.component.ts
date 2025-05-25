import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginInputComponent } from '../../components/login-input/login-input.component';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    LoginInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor() { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}
