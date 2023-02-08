import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.scss'],
})
export class NewChatComponent implements OnInit {
  @Input() contacts: User[] | null | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  goBack() {
    this.onSelectModal.emit('');
  }

  ngOnInit(): void {
    // console.log('contacts', this.contacts);
  }
}
