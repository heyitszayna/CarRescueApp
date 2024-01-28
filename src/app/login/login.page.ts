import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string;
  password: string;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  login() {
    // Simulating login functionality with hardcoded credentials
    const validEmail = 'user@example.com';
    const validPassword = 'password';

    if (this.email === validEmail && this.password === validPassword) {
      // Redirect to the home page or any other authenticated page
      this.router.navigate(['/home']);
    } else {
      // Show an error message for invalid credentials
      console.log('Invalid credentials. Please try again.');
    }
  }
}
