import { Component, Input, OnInit } from '@angular/core';
const SAMPLE_BARCHART_DATA:any[] = [
  // { data: [2016,2017,2019,2020,2021],label:'Q3 Sales'},
  { data: [1,1,4,4,5,2],label:'Başvuru Sayısı'},
  { data: [0.829943,0.829943,1.697608,1.697608,2.527551,1.235468],label:'Başvuru Alanı'}
];
const SAMPLE_BARCHART_LABELS : string[] = [ 'Kiralama İlanları','Kiralanan Araziler','Satış İlanları','Satılan Araziler','Net Gelir Hesabı','Kıymet Takdiri'];
@Component({
  selector: 'app-yonetim-paneli',
  templateUrl: './yonetim-paneli.component.html',
  styleUrls: ['./yonetim-paneli.component.css']
})
export class YonetimPaneliComponent implements OnInit {
  
  constructor() { }
  public barChartData : any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels:string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions:any = {
    scaleShowVerticalLines : false,
    resonsive : true
  };
  ngOnInit() {
    
  }
  kiralamailanlariadet=1;
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
  hepsiil="KARS";
  hepsiilce="ARPAÇAY";
  hepsimahalle="METEHAN";
  kira="Kiralama İlanları";
  satis="Satış İlanları";
  kiralanan="Kiralanan Araziler";
  satilan="Satılan Araziler";
  net="Net Gelir Hesabı";
  takdir="Kıymet Takdiri";

  geneladetgelen:number;
  genelhektargelen:number;
  genelbaslikgelen:string;
alert(geneladet:number,genelhektar:number,ad:string)
{
this.geneladetgelen=geneladet;
this.genelhektargelen=genelhektar;
this.genelbaslikgelen=ad;
}
  }





