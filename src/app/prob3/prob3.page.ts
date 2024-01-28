import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob3',
  templateUrl: './prob3.page.html',
  styleUrls: ['./prob3.page.scss'],
})
export class Prob3Page implements OnInit {

  constructor(private router: Router) { }

  navigatetohome(){
    this.router.navigate(['/home']);
  }

  main() {
    this.router.navigate(['/issues']);
  }

  ngOnInit() {
  }

}
