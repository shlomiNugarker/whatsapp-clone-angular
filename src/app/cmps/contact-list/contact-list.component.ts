import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent {
  @Input() contacts: User[] | null | undefined;
  @Output('selectContact') select = new EventEmitter<number>();

  onSelectContact(contactId: number) {
    this.select.emit(contactId);
  }
}
