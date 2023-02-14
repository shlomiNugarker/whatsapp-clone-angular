import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { SocketService } from 'src/app/services/socket-service/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'myApp';
  constructor(
    private authService: AuthService,
    private router: Router,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.socketService.actions.setup();
  }

  logout() {
    this.authService.logout().subscribe((res) => {
      this.router.navigateByUrl('/sign-in-page');
    });
  }
}
