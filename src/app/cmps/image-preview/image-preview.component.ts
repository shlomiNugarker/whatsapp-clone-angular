import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  @Input() otherUser: User | null = null;

  goBack() {
    this.onSelectModal.emit('contact-info');
  }
}
