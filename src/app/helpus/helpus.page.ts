
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';
import {Toast} from '@capacitor/Toast';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-helpus',
  templateUrl: './helpus.page.html',
  styleUrls: ['./helpus.page.scss'],
  standalone:true,
  imports:[IonicModule],
})
export class HelpusPage implements OnInit{
  name: string;

  phone: string;

  latitude: number;
  longitude: number;
  latitude2:number;
  longitude2: number;
  map: any;
  mapElementRef: any;
  image: any;
  service: any;
  nearestHospitals: any;
nearestpolice:any;
nearestpolicecount:any;
  display: any;
  nearestCount: number;
  filterHospitals3starCount:number;
  filterHospitals4starCount:number;
  filteredhospitals3star:any;
  filteredhospitals4star:any;
 markers:any;
 markers2:any;
 nearestAmbulance:any;
 nearestTowService:any;

  constructor(private toastController: ToastController, private router: Router) {
    this.nearestTowService=[];
  this.nearestAmbulance=[];
    this.latitude = 0;
    this.longitude = 0;
    this.nearestHospitals = [];
    this.nearestCount = 0;
    this.filterHospitals3starCount=0;
    this.nearestpolicecount=0;
    this.filterHospitals4starCount=0;
    this.nearestpolice=[];
    this.filteredhospitals3star=[];
    this.filteredhospitals4star=[];
    this.markers=[];
    this.markers2=[];
    this.longitude2=0;
    this.latitude2 = 0;
    this.name = "Alex";
    this.phone = "0528265904";
  }
  navigatetohome(){
    this.router.navigate(['/home']);
  }
  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  async loadMap() {
    await this.getPosition();
    let mapOptions = {
      center: {lat:this.latitude, lng:this.longitude},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP 
    }
    this.mapElementRef = document.getElementById("map");
    this.map = new google.maps.Map(this.mapElementRef, mapOptions);
    this.addMarker(this.latitude, this.longitude, "My Location", "");
    this.service = new google.maps.places.PlacesService(this.map);
    // let currentLocation = new google.maps.LatLng(this.latitude, this.longitude);
    this.GooglePlacesNearbySearch(this.latitude, this.longitude);
    this.display = new google.maps.DirectionsRenderer();
    
  }

  displayToast() {

    const toast = document.createElement('ion-toast');

    toast.message = 'Assistance Required for User , Contact : 01234435443';

    toast.duration = 5000;

    document.body.appendChild(toast);

    return toast.present();

  }

  addMarker(latitude: number, longitude: number, placeName: string, image: any) {
const icon=({ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifkEe7X6gnSJIvStEFB6gOmn3EpNmvPe2oQ&usqp=CAU", 
scaledSize: new google.maps.Size(50,50),
 origin: new google.maps.Point(0,0), 
 anchor: new google.maps.Point(0, 0)}); 
 

const marker = new google.maps.Marker({
    position: {lat:latitude, lng:longitude},
    map: this.map,
    icon: icon});
    
  
    let myInfoWIndow = new google.maps.InfoWindow({
      content: "<div style='color: #000; background: #FFF;'>"+placeName+"</div>"
    });

    google.maps.event.addListener(marker, 'click', ()=>{
      myInfoWIndow.open(this.map, marker);

    })
    this.markers.push(marker);
    return marker;}



    addMarker2(latitude: number, longitude: number, placeName: string, image: any) {
      const icon=({ url: "https://static-00.iconduck.com/assets.00/police-1-icon-2048x2048-qhqcj98u.png", 
      scaledSize: new google.maps.Size(50,50),
       origin: new google.maps.Point(0,0), 
       anchor: new google.maps.Point(0, 0)}); 
       
      
      const marker2 = new google.maps.Marker({
          position: {lat:latitude, lng:longitude},
          map: this.map,
          icon: icon});
          
        
          let myInfoWIndow = new google.maps.InfoWindow({
            content: "<div style='color: #000; background: #FFF;'>"+placeName+"</div>"
          });
      
          google.maps.event.addListener(marker2, 'click', ()=>{
            myInfoWIndow.open(this.map, marker2);
          })
          this.markers2.push(marker2);
          return marker2;}

          addMarker3(latitude: number, longitude: number, placeName: string, image: any) {
            const icon=({ url: "https://st3.depositphotos.com/4060975/17781/v/600/depositphotos_177817064-stock-illustration-ambulance-colored-vector-icon.jpg", 
            scaledSize: new google.maps.Size(50,50),
             origin: new google.maps.Point(0,0), 
             anchor: new google.maps.Point(0, 0)}); 
             
            
            const marker2 = new google.maps.Marker({
                position: {lat:latitude, lng:longitude},
                map: this.map,
                icon: icon});
                
              
                let myInfoWIndow = new google.maps.InfoWindow({
                  content: "<div style='color: #000; background: #FFF;'>"+placeName+"</div>"
                });
            
                google.maps.event.addListener(marker2, 'click', ()=>{
                  myInfoWIndow.open(this.map, marker2);
                })
                this.markers2.push(marker2);
                return marker2;}



                addMarker4(latitude: number, longitude: number, placeName: string, phoneNumber:string, image: any) {
                  const icon=({ url: "https://cdn-icons-png.flaticon.com/512/8958/8958764.png", 
                  scaledSize: new google.maps.Size(50,50),
                   origin: new google.maps.Point(0,0), 
                   anchor: new google.maps.Point(0, 0)}); 
                   
                  
                  const marker2 = new google.maps.Marker({
                      position: {lat:latitude, lng:longitude},
                      map: this.map,
                      icon: icon});
                      
                    
                      let myInfoWIndow = new google.maps.InfoWindow({
                        content: "<div style='color: #000; background: #FFF;'>" +
                        "<strong>" + placeName + "</strong><br>" +
                        "Phone: " + phoneNumber +
                        "</div>",
                      });
                  
                      google.maps.event.addListener(marker2, 'click', ()=>{
                        myInfoWIndow.open(this.map, marker2);
                      })
                      this.markers2.push(marker2);
                      return marker2;}

    setMapOnAll(map:any){

      for (var i = 0; i < this.markers.length; i++) {
        this.markers[i].setMap(map);
      }
    }

    setMapOnAll2(map:any){

      for (var i = 0; i < this.markers2.length; i++) {
        this.markers2[i].setMap(map);
      }
    }
  
    clearMarkers() {
      this.setMapOnAll(null);
    }
  
    deleteMarkers() {
      this.clearMarkers();
      this.markers = [];
    }
  
      
    GooglePlacesNearbySearch(latitude: number, longitude: number) {
      const mechanicRequest = {
        location: { lat: latitude, lng: longitude },
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 10000,
        keyword: 'mechanic, car repair'
      };
    
      const policeRequest = {
        location: { lat: latitude, lng: longitude },
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'police station'
      };
    
      const ambulanceRequest = {
        location: { lat: latitude, lng: longitude },
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 10000,
        keyword: 'ambulance service'
      };
    
      const towServiceRequest = {
        location: { lat: latitude, lng: longitude },
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 10000,
        keyword: 'tow truck'
      };
    
      this.service.nearbySearch(mechanicRequest, (mechanicResults: any, mechanicStatus: any) => {
        console.log(mechanicResults);
        console.log(mechanicStatus);
        if (mechanicStatus == "OK") {
          for (let i = 0; i < mechanicResults.length; i++) {
            let place = mechanicResults[i];
            if (!place.geometry || !place.geometry.location) return;
            this.nearestHospitals.push(place);
            this.addMarker(place.geometry.location.lat(), place.geometry.location.lng(), place.name, "");
          }
        }
      });
    
      this.service.nearbySearch(policeRequest, (policeResults: any, policeStatus: any) => {
        console.log(policeResults);
        console.log(policeStatus);
        if (policeStatus == "OK") {
          for (let i = 0; i < policeResults.length; i++) {
            let place = policeResults[i];
            if (!place.geometry || !place.geometry.location) return;
            this.nearestpolice.push(place);
            this.addMarker2(place.geometry.location.lat(), place.geometry.location.lng(), place.name, "");
            if (i === 4) {
              break;
            }
          }
        }
      });
    
      this.service.nearbySearch(ambulanceRequest, (ambulanceResults: any, ambulanceStatus: any) => {
        console.log(ambulanceResults);
        console.log(ambulanceStatus);
        if (ambulanceStatus == "OK") {
          for (let i = 0; i < ambulanceResults.length; i++) {
            let place = ambulanceResults[i];
            if (!place.geometry || !place.geometry.location) return;
            this.nearestAmbulance.push(place);
            this.addMarker3(place.geometry.location.lat(), place.geometry.location.lng(), place.name, "");
            if (i === 4) {
              break;
            }
          }
        }
      });
    
      this.service.nearbySearch(towServiceRequest, (towServiceResults: any, towServiceStatus: any) => {
        console.log(towServiceResults);
        console.log(towServiceStatus);
        if (towServiceStatus == "OK") {
          for (let i = 0; i < towServiceResults.length; i++) {
            let place = towServiceResults[i];
            if (!place.geometry || !place.geometry.location) return;
            this.nearestTowService.push(place);
            this.addMarker4(place.geometry.location.lat(), place.geometry.location.lng(), place.name,place.phoneNumber,"");
            if (i === 4) {
              break;}
          
          }
        }
      });
    }
    


    
      


mechanics4star() {
    const filteredHospitals = this.nearestHospitals.filter((place: { rating: number; }) => (place.rating && place.rating > 4));
  // Add markers for filtered hospitals
  this.clearMarkers();
    for (let i = 0; i < filteredHospitals.length; i++) {
      let place = filteredHospitals[i];
      if (!place.geometry || !place.geometry.location) continue;
      this.addMarker(place.geometry.location.lat(), place.geometry.location.lng(), place.name, 'https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg');
     // Check if there are filtered hospitals
  if (filteredHospitals.length > 0) {
    // Get the index of the next hospital
    const index = this.filterHospitals4starCount % filteredHospitals.length;
    const hospital = filteredHospitals[index];
    const hospitalLat = hospital.geometry.location.lat();
    const hospitalLng = hospital.geometry.location.lng();

    // Clear previous route
    this.display.setMap(null);

    // Draw route to the next 4-star hospital
    this.drawRoute(this.latitude, this.longitude, hospitalLat, hospitalLng);

    // Increment the count for the next click
    this.filterHospitals4starCount++;}}}

  mechanics3star() {
    const filteredHospitals = this.nearestHospitals.filter((place: { rating: number; }) => (place.rating && place.rating > 3));
  // Add markers for filtered hospitals
  this.clearMarkers();
    for (let i = 0; i < filteredHospitals.length; i++) {
      let place= filteredHospitals[i];
      if (!place.geometry || !place.geometry.location) continue;
      this.addMarker(place.geometry.location.lat(), place.geometry.location.lng(), place.name, 'https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg');
      if (filteredHospitals.length > 0) {
        // Get the index of the next hospital
        const index = this.filterHospitals3starCount % filteredHospitals.length;
        const hospital = filteredHospitals[index];
        const hospitalLat = hospital.geometry.location.lat();
        const hospitalLng = hospital.geometry.location.lng();
    
        // Clear previous route
        this.display.setMap(null);
    
        // Draw route to the next 4-star hospital
        this.drawRoute(this.latitude, this.longitude, hospitalLat, hospitalLng);
    
        // Increment the count for the next click
        this.filterHospitals3starCount++;}}}



  RouteToNextNearest(){
    let index = this.nearestCount%this.nearestHospitals.length;
    let nearestHospitalLat = this.nearestHospitals[index].geometry.location.lat();
    let nearestHospitalLng = this.nearestHospitals[index].geometry.location.lng();
    this.drawRoute(this.latitude, this.longitude, nearestHospitalLat, nearestHospitalLng);
    this.nearestCount++
  }
  drawRoute(startLat: number, startLng: number, endLat: number, endLng: number){
    this.service = new google.maps.DirectionsService();
    this.display.setMap(this.map);
    let request = {
      origin: {lat: startLat, lng: startLng},
      destination: {lat: endLat, lng: endLng},
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.service.route(request, (result: any, status: any) => {
      if (status == "OK"){
        this.display.setDirections(result);
      }
    })
  }
  
  async showtoast(){
    await Toast.show({
      text:'Assistance Required-SMS sent to user!',
      duration: 'long',
    }
)}


 findingnearestusers(){
// Define your location
const myLatitude =24.3653; // Replace with your latitude
const myLongitude =54.562367; // Replace with your longitude

// Array of user locations
const userLocations = [
  { latitude: 24.376820, longitude: 54.594285 }, // Replace with user coordinates
  { latitude: 24.286976, longitude: 54.524180}, // Replace with user coordinates
  { latitude: 24.390317, longitude: 54.554958 }, // Replace with user coordinates
  { latitude: 24.308794, longitude: 54.703716},
  { latitude: 28.203432, longitude: 76.843213}, // india
  { latitude: 28.193719, longitude: 76.837458}, //india
  {latitude: 28.193314, longitude: 76.843549}, //india
  {latitude: 28.196605, longitude: 76.833397}, // india

  // Add more user coordinates as needed
];

// Calculate distance using Haversine formula
function calculateDistance(lat1:number, lon1:number, lat2:number, lon2:number) {
  const earthRadius = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
}

// Convert degrees to radians
function toRadians(degrees:any) {
  return degrees * (Math.PI / 180);
}

// Calculate distances and sort user locations by nearest
const sortedUserLocations = userLocations.map(user => {
  const distance = calculateDistance(myLatitude, myLongitude, user.latitude, user.longitude);
  return { latitude: user.latitude, longitude: user.longitude, distance };
}).sort((a, b) => a.distance - b.distance);

// Show user locations on the map
sortedUserLocations.forEach(user => {
  const icon = {
    url: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  const marker = new google.maps.Marker({
    position: { lat: user.latitude, lng: user.longitude },
    map: this.map,
    icon: icon,



  })


  let myInfoWindow = new google.maps.InfoWindow({
    content: "<div style='color: #000; background: #FFF;'>SMS Sent- Assistance Required!</div>"
  });
  google.maps.event.addListener(marker, 'click', ()=>{
    myInfoWindow.open(this.map, marker);
    this.displayToast();
  })
  
  return marker; 

  
  ;})}


ngOnInit() {
  this.loadMap();
  }
}