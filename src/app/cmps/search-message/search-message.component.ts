import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-message',
  templateUrl: './search-message.component.html',
  styleUrls: ['./search-message.component.scss'],
})
export class SearchMessageComponent {
  searchResults = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 6, 5, 4, 4, 3, 3];

  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  goBack() {
    this.onSelectModal.emit('');
  }
}
