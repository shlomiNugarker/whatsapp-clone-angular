import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  goBack() {
    this.onSelectModal.emit('');
  }
}
