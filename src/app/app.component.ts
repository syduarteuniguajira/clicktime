import { Component, OnInit} from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webmark';

   ngOnInit() {
   
    console.log('AOS');
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  
  }

}
