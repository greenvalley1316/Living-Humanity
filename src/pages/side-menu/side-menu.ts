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
  // private aboutusPage;
  // private servicesPage;
  // private galleryPage;
  // private faqPage;
  // private contactusPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = navParams.data;
    // this.aboutusPage = 'AboutUsPage';
    // this.servicesPage = 'ServicesPage';
    // this.galleryPage = 'DealListingPage';
    // this.faqPage = 'FaqPage';
    // this.contactusPage = 'ContactUsPage';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
    this.pages = globalPages;
  }
  openPage(p) {
    this.rootPage = p;
  }

}
