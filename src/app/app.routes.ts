import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "criar-conta",component: RegisterComponent }
];
