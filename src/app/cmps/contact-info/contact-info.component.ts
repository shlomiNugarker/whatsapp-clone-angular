import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Output('selectImage') onSelectImagePreview = new EventEmitter<string>();
  @Input() otherUser: User | null = null; // the user you are chatting,depends on selectedChat

  goBack() {
    this.onSelectModal.emit('');
  }

  selectImagePreview() {
    this.onSelectModal.emit('image-preview');
    this.onSelectImagePreview.emit();
  }
}
