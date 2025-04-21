import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidenavOpen = true;

  toggleSideNav(){
    this.isSidenavOpen = ! this.isSidenavOpen;
  }

}
