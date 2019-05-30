import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor( private auth: AuthService, private router: Router) { }

  canActivate() {
    return this.auth.user$.pipe(map(
      user => {
        if (user) {return true; } else {
          this.router.navigate(['/login']) ;
          return false;
        }
      }
    )); }}
