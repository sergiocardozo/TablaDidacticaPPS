import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  authSrv = inject(AuthService);
  constructor(private router: Router) {
  }

  logout() {
    this.authSrv.signOut().then((resp) => {
      this.router.navigate(['/login']);      
    })
  }

}
