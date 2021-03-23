import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yonetim-paneli',
  templateUrl: './yonetim-paneli.component.html',
  styleUrls: ['./yonetim-paneli.component.css']
})
export class YonetimPaneliComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  kiralamailanlariadet=1
  kiralamailanlarihektar=0.829943;
  kiralananArazilerAdet=1;
  kiralananArazilerHektar=0.829943;
  satisIlanlariAdet=4;
  satisIlanlariHektar=1.697608;
  satilanArazilerAdet=4;
  satilanArazilerHektar=1.697608;
  netGelirHesabiAdet=5;
  netGelirHesabiHektar=2.527551;
  kiymetTakdiriAdet=2;
  kiymetTakdiriHektar=1.235468;
}
