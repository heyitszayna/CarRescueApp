import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob2',
  templateUrl: './prob2.page.html',
  styleUrls: ['./prob2.page.scss'],
})
export class Prob2Page implements OnInit {

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
