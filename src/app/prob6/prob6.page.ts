import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob6',
  templateUrl: './prob6.page.html',
  styleUrls: ['./prob6.page.scss'],
})
export class Prob6Page implements OnInit {

  constructor(private router: Router) { }

  main() {
    this.router.navigate(['/issue']);
  }

  navigatetohome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
