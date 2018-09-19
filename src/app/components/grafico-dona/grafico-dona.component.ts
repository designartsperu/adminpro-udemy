import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // Doughnut
  // tslint:disable-next-line:no-input-rename
  @Input('chartLabels') doughnutChartLabels: String[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('chartData') doughnutChartData: Number[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('chartType') doughnutChartType: String = '';

  constructor() { }

  ngOnInit() {
  }

}
