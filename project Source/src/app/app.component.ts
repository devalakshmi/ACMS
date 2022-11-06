import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ACMS';
  events: string[] = [];
  searchText: any;
  opened:boolean=true;
  showDashboard:boolean=false;
  selected = 'allaccount';
  dropdownoption:boolean =false;
  states: string[] = [
    'My Accounts',
    'New Last Week',
    'New This Week'
  ];
  constructor(private router: Router){}
  ngOnInit() {
  }
  toggleMenu(){
    this.opened = !this.opened;
  }
  routeToDashboard(){
    this.showDashboard=true;
    // this.router.navigate(['dashboard']);
  }

  profilepopup(){
    debugger
    this.dropdownoption =true;
  }
}
