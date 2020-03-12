import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { LINE_CHART_COLORS } from 'src/app/shared/chart.colors';


const LINE_CHART_SAMPLE_DATA: any[] = [
  {data: [32,14,46,23,38, 56], label:'Sentiment Analysis'},
  {data: [12,41,64,14,20, 96], label:'Image Recognition'},
  {data: [52,22,49,23,40, 75], label:'Forecasting'}
];

const LINE_CHART_LABELS : string[] = ['Jan','Feb','Mar','Apr','May','Jun'];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;



  ngOnInit(): void {
  }

}
