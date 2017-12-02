import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  pageTransition() {
    this.navCtrl.setRoot('AboutUsPage', {
      animate: true,
      direction: 'forward',
      animation: 'md-transition',
      duration: '1000'
    })
  }

  readMore() {
    let alert = this.alertCtrl.create({
      message: "We at Living Humanity believe that all people are blessed with things that make life good for them." +
      " These blessings are in the form of relationships, faith, material comfort, and a lot more. We also believe that" +
      " some people have been blessed with a little more than others. And it is the duty of such people to share with" +
      " those who have less. We at Living Humanity try to enable this through our activities. It is *compassion* for " +
      "fellow beings that makes you join us in our journey. Because it is *hope* that you want to bring to those who" +
      " are in dire need of it. And it is *happiness* that you want to see on the faces of everyone for whom you have " +
      "done even a little bit. Thank you for trying to find out who we are and what we stand for. Living Humanity. Compassion | Hope | Happiness" +
      "<br><br>It is said that \“Character is how you treat people who can do nothing for you.\”." +
      "<br><br>We find many people around us who are ready to help us in favour of return, but there are few who help someone without expecting anything from them." +
      "<br><br>One of the greatest humanitarian help one can do is serving the less fortunate of the society. Most of us are very fortunate to" +
      " have everything we need at any point of time. The Almighty God has given us wealth which is not meant for us only but for the needy as well." +
      " It is our duty to look after the poor, disabled and ailing people according to our capacity, without any fail." +
      "<br><br>If someone thinks that he is supposed to be content living his own life and not bound to help other in need without any favour in return," +
      " then he is wrong. If waking up, eating, working, having fun and sleeping is life then please remember that animals also do the same. " +
      "If God has made us humans we have to be different from them." +
      "<br><br>It is to be born with human intelligence that gives us the understanding of humanity. It calls for understanding the conditions in which humans " +
      "live. If we see someone in distress, it is only human that we lend them a hand. If we see someone trying to cross the road, it is only human that " +
      "we help them. If we see someone hungry, it is only human that we offer them food." +
      "<br><br>To be humane one does not have to have a large bank balance. Listening to someone when he is worried is being human, paying the right dues to one’s " +
      "domestic help is being human, carrying a heavy bag of an old person is being human." +
      "<br><br>Humanitarian activities should not be performed for fame.",
      cssClass: "read-more-alert"
    }).present();
  }

}
