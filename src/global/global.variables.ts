import {Page, PageContent, member} from "../interfaces/page.interface";


export let globalPages: Page[] = [
  {icon: "home", name: "HomePage", label: "Home"},
  {icon: "ios-leaf", name: "AboutUsPage", label: "About Us"},
  {icon: "md-walk", name: "ServicesPage", label: "Services"},
  {icon: "images", name: "GalleryPage", label: "Gallery"},
  {icon: "help-circle", name: "FaqPage", label: "FAQ"},
  {icon: "megaphone", name: "ContactUsPage", label: "Contact Us"}
]

export let ourTeam: member[] = [
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Faiz.png", name: "Faiz Anwar", desig: "Co Founder & Secretary"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Rashid1-1.jpg", name: "Md Rashid Jamil", desig: "Co Founder & Treasurer"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Shahid.png", name: "Md Shahid", desig: "President"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Shahbaz.png", name: "Shahbaz Alam", desig: "Vice President"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Nadim.png", name: "Rashid Akhtar", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Aman.png", name: "Dr Shaharyar Salim", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Fahad.png", name: "Shaker Ali", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Shaker.png", name: "Fahad Anwar", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Rashid.png", name: "Md Nadim", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Shaharyaar.png", name: "Aman Haider", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/Hamza.png", name: "Hamza Faiz Anwar", desig: "Our Hero"},
  {image: "http://livinghumanity.in/wp-content/uploads/2017/05/blank.png", name: "Md Tausif Jamil", desig: "Our Hero"}
]


// export let globalVariables: Object = {
// //BASE_URL: 'http://localhost/ypuk/api/',
// //URL:'http://localhost/ypuk/',
//   pages: '',
//   everything: ''
// };
