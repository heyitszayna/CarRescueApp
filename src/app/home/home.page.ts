
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Geolocation} from '@capacitor/geolocation';
import { Router } from '@angular/router';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})



export class HomePage  {
  isModalOpen = false;
latitude:number;
longitude:number;
map: any;
mapElementRef: any;

setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}

  constructor(private router: Router) {
    this.latitude=0;
    this.longitude=0;
  }


  navigatetologin(){
    this.router.navigate(['/login']);
  }

  navigatetocarissues(){
    this.router.navigate(['/issues']);
  }

  navigatetohelp(){
    this.router.navigate(['/helpus']);
  }
  async getPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude= coordinates.coords.latitude!;
    this.longitude=coordinates.coords.longitude!;
  }

  async loadMap(){
    await this.getPosition();
    let mapOptions= {
      center: {lat:this.latitude!, lng:this.longitude!}, zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP}
      this.mapElementRef= document.getElementById('map');
      this.map= new google.maps.Map(this.mapElementRef, mapOptions);
    let marker=this.addMarker(this.latitude!, this.longitude!);
    let marker1=this.addMarker(24.375499, 54.552019);}
   
    addMarker(latitude: number, longitude:number) {const marker= new google.maps.Marker({position: {lat:latitude, lng:longitude},map: this.map});
    return marker;
    }
    

    ngOnInit(){
      
      this.loadMap();}



    }
