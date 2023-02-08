import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() currentUser: User | null | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  isEditName = false;
  isEditAbout = false;
  userSubScription: Subscription | undefined;
  fullnameToEdit: string | undefined;
  aboutToEdit: string | undefined;

  ngOnInit(): void {
    this.fullnameToEdit = this.currentUser?.fullname || '';
    this.aboutToEdit = this.currentUser?.about || '';
  }

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
