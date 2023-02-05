import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss'],
})
export class CommunitiesComponent {
  communities = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  goBack() {
    this.onSelectModal.emit('');
  }
}
