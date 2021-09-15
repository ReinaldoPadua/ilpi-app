import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input('message') message: String = ''

  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() { }

  close(): void {
    this.onClose.emit();
  }
}
