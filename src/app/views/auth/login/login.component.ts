import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public name: any;
  constructor(private formBuilder: FormBuilder, private route: Router) {}
  ngOnInit() {
    localStorage.clear();
  }
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  get f() {
    return this.loginForm.controls;
  }
  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      console.log(this.loginForm.controls.email.value);
      this.name = this.loginForm.controls.email.value;
      localStorage.setItem('name', this.name);
      this.route.navigate(['/dashboard']);
    }
  }
}
