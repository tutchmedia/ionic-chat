import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

declare var Parse: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  items = [{
    "title":"Pokémon Yellow",
    "image":"card-saopaolo.png",
    "release":"14/01/2017"
  },{
    "title":"Gravity Rush 2",
    "image":"card-sf.png",
    "release":"22/01/2017"
  }];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.showAlert(item);
  }

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  getAllGames() {

  var games = new Parse.Object("Games");

  var query = new Parse.Query(games);
  query.find({
      success: function(results) {
        // results is an array of Parse.Object.
        console.log(results);
      },

      error: function(error) {
        // error is an instance of Parse.Error.
      }
  });

  }

  showAlert(item) {
    let alert = this.alertCtrl.create({
      title: 'Woohoo!',
      subTitle: 'You selected the title: '+item.title,
      buttons: ['OK']
    });
    alert.present();
  }

}
