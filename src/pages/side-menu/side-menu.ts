import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Page} from "../../interfaces/page.interface";
import {globalPages} from "../../global/global.variables";

@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  pages: Page[];
  private rootPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = navParams.data;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
    this.pages = globalPages;
  }
  openPage(p) {
    this.rootPage = p;
  }

}
