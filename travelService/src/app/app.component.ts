import { Component } from '@angular/core';
import { NavigationLinks } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelService';
  subHeading = 'Chennai';
  
  links: NavigationLinks[] =[
  {text:'Home', link: '/search'},
   {text: 'Catalog', link: '/show'}//,
  // {text: 'Payment', link: 'payment.html'},
  // {text: 'Contact', link: 'contact.html'}
];
}
