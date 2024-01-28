import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
})
export class IssuesPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigate1() {

    this.router.navigate(['/prob1']);

  }

  navigatetohome(){
    this.router.navigate(['/home']);
  }



  openVideo1() {

    window.open('https://www.youtube.com/watch?v=Bq5To-ZH160', '_blank');

  }




  navigate2() {

    this.router.navigate(['/prob2']);

  }




  openVideo2() {

    window.open('https://youtu.be/VdnkRQF5Cps', '_blank');

  }




  navigate3() {

    this.router.navigate(['/prob3']);

  }




  openVideo3() {

    window.open('https://youtu.be/evpaTW2WJ5Y', '_blank');

  }




  navigate4() {

    this.router.navigate(['/prob4']);

  }




  openVideo4() {

    window.open('https://youtu.be/yn2CTZ1MA_Q', '_blank');

  }




  navigate5() {

    this.router.navigate(['/prob5']);

  }




  openVideo5() {

    window.open('https://youtu.be/yqZo6K468to', '_blank');

  }




  navigate6() {

    this.router.navigate(['/prob6']);

  }




  openVideo6() {

    window.open('https://youtu.be/y6HxORx0g-g', '_blank');

  }


}
