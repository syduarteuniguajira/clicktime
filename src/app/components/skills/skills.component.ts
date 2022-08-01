import { Component, OnInit } from '@angular/core';

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
      name: "Kotlin",
      img: "assets/img/skills/kt.png",
      percent: "75"
    },
    {
      name: "Typescript",
      img: "assets/img/skills/ts.png",
      percent: "80"
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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
