import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent  {


  constructor( public auth: AuthService) {
  }

  getUserDetail() {
    console.log(this.auth.user$.subscribe(console.log));
    return this.auth.user$.pipe(take(1));
  }

  logout() {
    this.auth.logout();
  }

}
