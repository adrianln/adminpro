import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

 @Input('chartLabels') public doughnutChartLabels: string[] = [];
 @Input('chartData') public doughnutChartData: number[] = [];
 @Input('chartType') public doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
