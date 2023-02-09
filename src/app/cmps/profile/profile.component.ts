import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() currentUser: User | null | undefined;
  @Output('selectModal') onSelectModal = new EventEmitter<string>();

  constructor(private userService: UserService) {}

  isEditName = false;
  isEditAbout = false;
  userSubScription: Subscription | undefined;
  fullnameToEdit: string = '';
  aboutToEdit: string = '';

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

  async saveUser() {
    this.isEditName = false;
    this.isEditAbout = false;

    const userToUpdate: User = {
      ...this.currentUser,
      fullname: this.fullnameToEdit,
      about: this.aboutToEdit,
    } as User;

    const savedUser = await this.userService.updateUser(userToUpdate);
  }

  goBack() {
    this.onSelectModal.emit('');
  }
}
