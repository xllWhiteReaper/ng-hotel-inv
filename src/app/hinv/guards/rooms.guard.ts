import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class RoomsGuard implements CanActivateChild {
  constructor(private loginService: LoginService,
    private router:Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {


    return typeof this.loginService.isAdmin === 'boolean'
      ? this.loginService.isAdmin:
      this.router.navigate(['/login']);
      // false;
      // return false;
  }
}
