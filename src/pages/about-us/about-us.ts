import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PageContent, member} from "../../interfaces/page.interface";
import {ourTeam} from "../../global/global.variables";


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  ourTeam: member[];
  showIndex: number;
  AboutUsContent: PageContent[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ourTeam = ourTeam;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

  ionViewWillEnter() {
    this.AboutUsContent = [
      {
        index: 0,
        header: "Introduction",
        content: "Living Humanity is an irrevocable, public, informative, educational,"
        + " cultural, welfare charitable trust for the benefit of and for the needy persons,"
        + " irrespective of caste, creed or religion without any intention of earning profit."
        + " We understand that needy persons are those who are in difficult circumstances "
        + "and include poor, deprived, disadvantaged, underprivileged, poverty-stricken,"
        + " impoverished, destitute, those who are unable to make ends meet, and so on."
      },
      {
        index: 1,
        header: "Our Vision",
        content: "In this world where hatred is free and love is hard to find, "
        + "<br>Where you can easily see tears in eyes, to which many are blind,"
        + "<br>Where war is made and peace is broken and selfishness is in people’s mind,"
        + "<br>Where sacrifice seems as a burden on one’s soul, only few are so kind,"
        + "<br>In that world only we try to put our effort all combined,"
        + "<br>Yes, we’re trying to help humanity live, the *deprived, from* mankind."
      },
      {
        index: 2,
        header: "Our Objective",
        content: "Our objective with regard to the needy is to:"
        + "<br>• Provide the necessities of life viz, food, clothes and shelter, along with medical and educational assistance"
        + "<br>• Help them get jobs,"
        + "<br>• Help them register themselves with the various Government agencies and departments,"
        + "<br>• Introduce and link them to the various Government welfare schemes."
        + "<br>• Function as a non-communal trust or/and as a secular organization."
        + "<br>• Provide and promote relief service for treatment of all illnesses, preventive illness, establishing, running, maintaining or assisting clinics, other medical institutions"
        + "<br>• Organise conferences, seminars, workshops or other such other gatherings to promote the awareness of health issues."
        + "<br>• Organise seminars on social issues related to health, justice, education and economic upliftment."
        + "<br>• Take up effective but reasonable and lawful steps for the eradication of social evils such as wastage of money in the various functions and use of intoxicants, etc."
        + "<br>• Start various programs against child labour and take up effective but reasonable and lawful steps on the connection for the welfare of children."
        + "<br>• Make adequate arrangements and start rehabilitation centres for destitute, widows, old men and women, poor, handicapped, "
        + "blinds, deaf, dumb, mentally retarded and for other needy people through the various kinds of training programs and "
        + "providing them required facilities to make them independent."
        + "<br>• Provide monetary and or other help and assistance for the relief of persons affected by natural and other calamities"
        + "<br>• Assist and co-operate persons doing relief work on such occasion."
        + "<br>• Help poor and indigent persons in marriages of their sons and daughters by way of cash donations or otherwise."
        + "<br>• Provide poor and orphaned children with financial support or as may be considered appropriate"
        + "<br>• Assist and co-operate other associates trusts and NGOs having similar objects."
      },
      {
        index: 3,
        header: "Our Story",
        content: "Helping fellow humans was always in our mind. It was the breezy monsoon evening of September 2016 when a thought came in our mind to do something for the less fortunate of the society starting with free meal once a day. A month later, we started our journey on 14th October 2016 with daily free dinner distribution to the needy people under the name of Roti Bank – Park Circus. It is our first program which is running even today without a single day’s break."
        + "<br>Our second program is ‘Kapda Bank’ where we collect used clothes in good condition and distribute to the needy after cleaning them, on a montly basis. The program was very helpful during the winters, when woollen clothes and blankets were distributed."
        + "<br>Our third program which is also running successfully is the distribution of monthly ration packs to the underprivileged families, under the name Ration Bank."
        + "<br>There are several other activities which are being carrying out, like arranging school-books, school-fees, medicines, marriage aid, etc."
      },
      {
        index: 4,
        header: "Meet the Team",
        content: `<ion-slides loop pager="true" paginationType="fraction" zoom="true" autoplay="1000" class="team-slide white-bg">
                    <ion-slide *ngFor="let member of ourTeam">
                      <img [src]="member.image" alt="no-image">
                      <div class="text-lg strong">{{member.name}}</div>
                      <div class="text-md">{{member.desig}}</div>
                    </ion-slide>
                  </ion-slides>`
      }
    ]
  }

  showAccordion(index) {
    if (this.showIndex == index) {
      index = -1;
    }
    this.showIndex = index;
    console.log("showIntroduction");
  }


}
