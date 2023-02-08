import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const accessToken = this.authService.getAccessToken();

    if (accessToken) {
      const res: { isValidToken: boolean } =
        await this.authService.isValidToken(accessToken);

      if (res.isValidToken) return true;
    }

    this.router.navigateByUrl('/sign-in-page');
    return false;
  }
}
