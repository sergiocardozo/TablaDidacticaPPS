import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private platform: Platform, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('login');
    }, 5000);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
    })
  }
}
