import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormInputComponent } from '../../components/form-input/form-input.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../services/register.service';
import { isEmpty } from '../../shared/utils';

@Component({
  selector: 'app-register',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    FormInputComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private toastrService: ToastrService
  ) { 
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      document: new FormControl('', [Validators.required]),
      cellphone: new FormControl('', [Validators.required]),
      establishmentName: new FormControl('', [Validators.required]),
    });
  }

  validateForm() {
    if (isEmpty(this.registerForm.value.name) || 
      isEmpty(this.registerForm.value.email) || 
      isEmpty(this.registerForm.value.password) || 
      isEmpty(this.registerForm.value.confirmPassword) || 
      isEmpty(this.registerForm.value.document) || 
      isEmpty(this.registerForm.value.cellphone) || 
      isEmpty(this.registerForm.value.establishmentName)) {
        this.toastrService.error('Preencha todos os campos')
        return false
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.toastrService.error('As senhas não coincidem')
      return false
    }

    return true
  }

  submit() {
    console.log(this.registerForm.value)
    if (!this.validateForm()) return
    // implementar cadastro
  }

  navigate() {
    this.router.navigate(['login'])
  }
}
