import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Talking Tree',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Green Steps',
      url: '/logactivity',
      icon: 'walk'
    },
    {
      title: 'Green Store',
      url: '/greenstore',
      icon: 'cart'
    },
    {
      title: 'Green Rewards',
      url: '/rewards',
      icon: 'gift'
    },
    {
      title: 'Green Board',
      url: '/dashboard',
      icon: 'stats'
    }
  ];
  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.splashScreen.hide();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.splashScreen.hide();  // <-- hide static image
      this.statusBar.styleDefault();
      timer(6000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }
}
