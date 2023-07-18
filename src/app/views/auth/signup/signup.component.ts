import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public submitted = false;
  public userName: any;
  public userEmail: any;
  public pin: any;
  public confirmpin: any;
  public pinsNotMatched: boolean = false;
  constructor(private route: Router, private formBuilder: FormBuilder) {}
  ngOnInit() {
    localStorage.clear();
  }
  SignUpForm = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    number: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  get f() {
    return this.SignUpForm.controls;
  }

  Submit() {
    this.pin = this.SignUpForm.controls.password.value;
    this.confirmpin = this.SignUpForm.controls.confirmPassword.value;
    this.submitted = true;
    if (this.SignUpForm.invalid) {
      return;
    } else if (this.pin === this.confirmpin) {
      console.log('Hello');
      console.log(this.SignUpForm.controls.email.value);
      this.userName = this.SignUpForm.controls.name.value;
      this.userEmail = this.SignUpForm.controls.email.value;
      localStorage.setItem('name', this.userName);
      localStorage.setItem('email', this.userEmail);
      this.route.navigate(['/dashboard']);
    } else {
      this.pinsNotMatched = true;
    }
  }
}
