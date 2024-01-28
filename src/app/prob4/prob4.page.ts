import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob4',
  templateUrl: './prob4.page.html',
  styleUrls: ['./prob4.page.scss'],
})
export class Prob4Page implements OnInit {

  constructor(private router: Router) { }

  navigatetohome(){
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
