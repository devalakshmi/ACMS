import { Component, OnInit } from '@angular/core';

declare var google:any;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', {packages:['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }


  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Month', 'Products sold', 'Total views'],
      ['Jan',  1030,      400],
      ['Feb',  1170,      460],
      ['Mar',  660,       1120],
      ['Apr',  1030,      540],
      ['May',  1030,      540],
      ['Jan',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

}
