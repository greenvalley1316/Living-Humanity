import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {Page} from "../../interfaces/page.interface";
import {globalPages} from "../../global/global.variables";
// import {SideMenuPage} from "../side-menu/side-menu";

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  pages: Page[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
    this.pages = globalPages;
    console.log(this.pages);
  }

  navToPage(page){
    this.navCtrl.setRoot('SideMenuPage',page);
  }

}
