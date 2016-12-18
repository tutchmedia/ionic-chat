import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
declare var Parse: any;


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.hideSplashScreen();

      Parse.initialize(
      "b2ZMbVeLyOsB2MvfXnRAqRR6dUTPWlhJ9pRhz9Kr",
      "k6pakOdqPoIUPYJqxUdV7xF2UpdGRBr9hVW6bP9z"
      );
      Parse.serverURL = 'https://pg-app-ycsxxc0b1aklbx7bed8xdcredpqdde.scalabl.cloud/1/';

      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 100);
      }
    }

}
