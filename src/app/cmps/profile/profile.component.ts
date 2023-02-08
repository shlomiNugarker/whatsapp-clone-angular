import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Output('selectModal') onSelectModal = new EventEmitter<string>();
  constructor(private authService: AuthService) {}

  isEditName = false;
  isEditAbout = false;
  currentUser: User | null = null;
  userSubScription: Subscription | undefined;
  fullnameToEdit: string | undefined;
  aboutToEdit: string | undefined;

  ngOnInit(): void {
    this.userSubScription = this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });

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
