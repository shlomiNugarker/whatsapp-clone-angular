import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myApp';
  constructor(private authService: AuthService, private router: Router) {}
  logout() {
    this.authService.logout().subscribe((res) => {
      this.router.navigateByUrl('/sign-in-page');
    });
  }
}
