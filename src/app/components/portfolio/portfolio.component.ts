import { Component, OnInit } from '@angular/core';

interface Work {
  img: string;
  title: string;
  url: string,
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public works: Work[] = [
    {
      img: "assets/img/portfolio/pf-1.png",
      title: "Crypto profits",
      url: "https://cryptoprofitsgroup.com/"
    },
    {
      img: "assets/img/portfolio/pf-2.png",
      title: "Global Ocean Marine",
      url: "http://www.globaloceanmarine.com/en/"
    },
    {
      img: "assets/img/portfolio/pf-3.png",
      title: "Ipuc Mutis",
      url: "http://ipucmutis.com/"
    },
    {
      img: "assets/img/portfolio/pf-4.png",
      title: "Alisado Permanente",
      url: "https://www.alisadopermanenteadomicilioenbucaramanga.online/#"
    },
    {
      img: "assets/img/portfolio/pf-5.png",
      title: "Desarrollo de paginas web",
      url: "https://desarrolladordepaginasweb.online/"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
