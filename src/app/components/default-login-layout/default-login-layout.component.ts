import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default-login-layout',
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
  @Input() screenTitle: string = ""
  @Input() primaryButtonText: string = ""
  @Input() primarySpanText: string = ""
  @Input() secondaryButtonText: string = ""
  @Input() secondaryText: string = ""
  @Output("submit") onSubmit = new EventEmitter<void>()
  @Output("navigate") onNavigate = new EventEmitter<void>()

  submit() {
    this.onSubmit.emit()
  }

  navigate() {
    this.onNavigate.emit()
  }
}
