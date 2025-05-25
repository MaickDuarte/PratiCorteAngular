import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = ""
  @Input() loginButtonText: string = ""
  @Input() forgotPasswordText: string = ""
  @Input() registerButtonText: string = ""
  @Input() notClientYetText: string = ""
}
