import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  dob: string;
  showLogin = true;

  constructor(private router: Router) { 
    this.dob = '';
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }
  //watch for constructor here
  ngOnInit() {
  }

  onSave() {
    const currentYear = new Date().getFullYear();
    const dobYear = new Date(this.dob).getFullYear();
    const age = currentYear - dobYear;

    if (age >= 65) {
      this.router.navigate(['/eligible']);
    } else {
      this.router.navigate(['/ineligible']);
    }
  }
  
}
