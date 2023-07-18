import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('500ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);
@Component({
  selector: 'app-auth-left-side',
  templateUrl: './auth-left-side.component.html',
  animations: [slideInLeftAnimation],
  styleUrls: ['./auth-left-side.component.css'],
})
export class AuthLeftSideComponent {
  constructor(private route: Router) {}
  @Input() signUp: any;
  toSignUp() {
    this.route.navigate(['/signup']);
  }
  toLogin() {
    this.route.navigate(['/']);
  }
}
