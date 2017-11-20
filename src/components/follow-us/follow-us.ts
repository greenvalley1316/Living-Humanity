import {Component} from '@angular/core';

import {InAppBrowser} from '@ionic-native/in-app-browser';

@Component({
  selector: 'follow-us',
  templateUrl: 'follow-us.html'
})
export class FollowUsComponent {

  constructor(private iab: InAppBrowser) {
    console.log('Hello FollowUsComponent Component');

  }

  openPage(param) {
    if (param == 'fb') {
      this.iab.create('https://www.facebook.com/RotiBankPC', "_blank", "location=yes");
      // this.iab.create('https://www.facebook.com', "_system", "location=yes");
    } else {
      // this.iab.create('https://www.youtube.com/user/Roti%20Bank%20Park%20Circus', "_system", "location=yes");
      this.iab.create('https://www.youtube.com/watch?v=ePO5M5DE01I', "_blank", "location=yes");
    }
  }

}
