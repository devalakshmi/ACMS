import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  location: string;
  view: number;
  sales: number;
  conversion: string;
  total: string;
}

declare var google:any

const ELEMENT_DATA: PeriodicElement[] = [
  {
    location: 'google.com',
    view: 3746,
    sales: 752,
    conversion: '43%',
    total: '$19,291',
  },
  {
    location: 'facebook.com',
    view: 8126,
    sales: 728,
    conversion: '32%',
    total: '$17,638',
  },
  {
    location: 'twitter.com',
    view: 9836,
    sales: 694,
    conversion: '28%',
    total: '$16,218',
  },
  {
    location: 'Direct, email, IM',
    view: 1173,
    sales: 645,
    conversion: '24%',
    total: '$14,421',
  },
  {
    location: 'linkedin.com',
    view: 2739,
    sales: 539,
    conversion: '20%',
    total: '$12,370',
  },
  {
    location: 'instagram.com',
    view: 2739,
    sales: 1539,
    conversion: '20%',
    total: '$12,370',
  },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'location',
    'view',
    'sales',
    'conversion',
    'total',
  ];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  addRow() {
    let newValue = {
      location: 'yagoo.com',
      view: 3287,
      sales: 648,
      conversion: '46%',
      total: '$16,218',
    };
    this.dataSource.push(newValue)
  }

  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['France 4260 Sales',     7],
      ['Italy 3970 Sales',      4],
      ['Japan 4260 Sales',  6],
      ['Canada 3970 Sales', 10]
    ]);

    var options = {
      title: 'My Daily Activities',
      pieHole: 0.8,
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
  }
}
