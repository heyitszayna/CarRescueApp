import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prob5',
  templateUrl: './prob5.page.html',
  styleUrls: ['./prob5.page.scss'],
})
export class Prob5Page implements OnInit {

  constructor(private router: Router) { }

  navigatetohome(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
