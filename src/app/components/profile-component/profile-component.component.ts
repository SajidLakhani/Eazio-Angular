import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css'],
})
export class ProfileComponentComponent {
  public name = localStorage.getItem('name');
  public email = localStorage.getItem('email');

  activeElement: number = 2;
  setActiveElement(element: number) {
    this.activeElement = element;
  }
}
