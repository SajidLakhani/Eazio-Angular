import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav-bar',
  templateUrl: './dashboard-nav-bar.component.html',
  styleUrls: ['./dashboard-nav-bar.component.css'],
})
export class DashboardNavBarComponent {
  public name = localStorage.getItem('name');
  public email = localStorage.getItem('email');

  activeElement: number = 2;
  setActiveElement(element: number) {
    this.activeElement = element;
  }
}
