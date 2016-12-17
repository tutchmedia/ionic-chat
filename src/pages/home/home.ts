import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man',
      'Super Mario World',
      'Street Fighter II',
      'Half Life',
      'Final Fantasy VII',
      'Star Fox',
      'Tetris',
      'Donkey Kong III',
      'GoldenEye 007',
      'Doom',
      'Fallout',
      'GTA',
      'Halo'
    ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.showAlert(item);
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }


  showAlert(item) {
    let alert = this.alertCtrl.create({
      title: 'Woohoo!',
      subTitle: 'You selected the title: '+item,
      buttons: ['OK']
    });
    alert.present();
  }

}
