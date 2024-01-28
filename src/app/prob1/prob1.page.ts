import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob1',
  templateUrl: './prob1.page.html',
  styleUrls: ['./prob1.page.scss'],
})
export class Prob1Page implements OnInit {

  constructor(private router: Router) {}

  navigatetohome(){
    this.router.navigate(['/home']);
  }

  main() {
    this.router.navigate(['/issues']);
  }

  ngOnInit() {
  }


}
