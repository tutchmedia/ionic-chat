import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController} from 'ionic-angular';
import { GamesService } from '../services/GamesService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GamesService]
})

export class HomePage {

  games: [{}];
  myarr = [];

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private gamesService: GamesService) {

    // Init loader
    this.presentLoading();

    // Initial data load
    this.getGames();


  }

  getGames() {
    this.gamesService.listGames().subscribe(
        data => {
            this.games = data.results;
            //console.log(data.results);
        },
        err => {
            console.log(err);
        },
        () => console.log('Games Search Complete')
    );
  }

  presentLoading() {
   let loader = this.loadingCtrl.create({
     content: "Please wait...",
     duration: 2000,
     showBackdrop: true,
     spinner: "dots"
   });
   loader.present();
 }

 itemSelected(item: Object) {
   console.log("Selected Item", item);
   this.showAlert(item);
 }

 showAlert(item) {
   let alert = this.alertCtrl.create({
     title: 'Woohoo!',
     subTitle: 'You selected the title: '+item.game_title,
     buttons: ['OK']
   });
   alert.present();
 }

 doRefresh(refresher) {
   //console.log('Begin async operation', refresher);
   this.getGames();
   setTimeout(() => {
     this.presentToast("Finished Updating Games.");
     refresher.complete();
   }, 2000);
 }

 presentToast(successMessage) {
  let toast = this.toastCtrl.create({
    message: successMessage,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


  // End of the actual lookup
  /*
  items = [{
    "title":"Pokémon Yellow",
    "image":"card-saopaolo.png",
    "release":"14/01/2017"
  },{
    "title":"Gravity Rush 2",
    "image":"card-sf.png",
    "release":"22/01/2017"
  }];




  */

}
