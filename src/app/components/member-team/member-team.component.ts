import { Component, OnInit } from '@angular/core';

interface SocialMedia {
  fb: string;
  lk: string;
  ig: string;
}

interface Member {
  name: string;
  position: string;
  img: string;
  socialMedia: SocialMedia;
}

@Component({
  selector: 'app-member-team',
  templateUrl: './member-team.component.html',
  styleUrls: ['./member-team.component.css']
})
export class MemberTeamComponent implements OnInit {

  public members: Member[] = [
    {
      name: "Rances Rodriguez",
      position: "Gerente (CEO)",
      img: "assets/img/team/team-1.png",
      socialMedia: {
        fb: "",
        lk: "",
        ig: ""
      }
    },
    {
      name: "Steven Duarte",
      position: "Desarrollador Full Stack",
      img: "assets/img/team/team-3.jpg",
      socialMedia: {
        fb: "",
        lk: "",
        ig: ""
      }
    },
    {
      name: "Edson Gamez",
      position: "Diseñador Gráfico",
      img: "assets/img/team/team-2.png",
      socialMedia: {
        fb: "",
        lk: "",
        ig: ""
      }
    },
    {
      name: "Cristian Fuente",
      position: "Profesional Marketing Digital",
      img: "assets/img/team/team-4.jpg",
      socialMedia: {
        fb: "",
        lk: "",
        ig: ""
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
