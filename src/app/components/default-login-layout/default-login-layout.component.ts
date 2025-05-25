import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() screenTitle: string = ""
  @Input() loginButtonText: string = ""
  @Input() forgotPasswordText: string = ""
  @Input() registerButtonText: string = ""
  @Input() notClientYetText: string = ""
  @Output("submit") onSubmit = new EventEmitter<void>()

  submit() {
    this.onSubmit.emit()
  }
}
