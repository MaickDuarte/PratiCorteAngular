import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { isEmail, isPassword } from '../../shared/utils';

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (!isEmail(this.loginForm.value.email)) {
      this.toastrService.error('Email inválido')
      return
    }
    if (!isPassword(this.loginForm.value.password)) {
      this.toastrService.error('Senha inválida')
      return
    }
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastrService.success('Login Successful')
      },
      error: (err) => {
        this.toastrService.error('Erro no login, tente novamente!')
      }
    })
  }

  navigate() {
    this.router.navigate(['criar-conta'])
  }
}
