import { Component, OnInit } from '@angular/core';
import  {  OwlOptions  }  from 'ngx-owl-carousel-o' ; 
interface Skill {
  name: string;
  img: string;
  percent: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  customOptions: any = {
    autoplay:true,
    autoplayTimeout:1500,
    margin:50,
    autoplayHoverPause:false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false  
  }


  public skills: Skill[] = [
    {
      name: "Django",
      img: "assets/img/skills/dj.png",
      percent: "70"
    },
    {
      name: "Javascript",
      img: "assets/img/skills/js.png",
      percent: "85"
    },
    {
      name: "Html",
      img: "assets/img/skills/html.png",
      percent: "55"
    },
    {
      name: "css",
      img: "assets/img/skills/css.png",
      percent: "60"
    },
    {
      name: "Angular",
      img: "assets/img/skills/ang.png",
      percent: "70"
    },
    {
      name: "Typescript",
      img: "assets/img/skills/ts.png",
      percent: "80"
    },
    {
      name: "Kotlin",
      img: "assets/img/skills/kt.png",
      percent: "75"
    },
    
    {
      name: "NodeJs",
      img: "assets/img/skills/ndjs.png",
      percent: "65"
    },
    {
      name: "Spring Boot",
      img: "assets/img/skills/sbb.png",
      percent: "70"
    },
    {
      name: "Google Ads",
      img: "assets/img/skills/ads.png",
      percent: "90"
    },
    {
      name: "BOOTSTRAP",
      img: "assets/img/skills/bootstrap.png",
      percent: "90"
    },
    {
      name: "MYSQL",
      img: "assets/img/skills/msql.jpg",
      percent: "90"
    }

 
    






  ];

  constructor() { }

  ngOnInit(): void {
  }

}
