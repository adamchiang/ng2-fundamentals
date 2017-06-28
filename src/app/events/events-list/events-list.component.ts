import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-events-list',
   templateUrl: './events-list.component.html',
   styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
   event = {
      id: 1,
      name: 'Angular Connect',
      date: '09/26/2017',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/app/assets/images/angularconnect-shield.png',
      location: {
         address: '1057 DT',
         city: 'London',
         country: 'England'
      }
   };

   constructor() { }

   ngOnInit() {
   }

}
