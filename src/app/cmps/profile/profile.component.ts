import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  isEditName = false;
  isEditAbout = false;

  editName() {
    this.isEditName = true;
  }
  editAbout() {
    this.isEditAbout = true;
  }

  saveName() {
    this.isEditName = false;
    console.log('Todo: saveName');
  }
  saveAbout() {
    this.isEditAbout = false;
    console.log('Todo: saveAbout');
  }

  goBack() {
    this.onSelectModal.emit('');
  }
}
