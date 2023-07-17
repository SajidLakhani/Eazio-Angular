import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav-bar',
  templateUrl: './dashboard-nav-bar.component.html',
  styleUrls: ['./dashboard-nav-bar.component.css'],
})
export class DashboardNavBarComponent {
  activeElement: number = 2;
  setActiveElement(element: number) {
    this.activeElement = element;
  }
}
