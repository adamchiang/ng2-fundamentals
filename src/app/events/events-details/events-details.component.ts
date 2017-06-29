import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from './../../models/event';
import { EventService } from './../../services/event.service';

@Component({
   selector: 'app-events-details',
   templateUrl: './events-details.component.html',
   styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {
   event: Event;

   constructor(
      private eventService: EventService,
      private route: ActivatedRoute) {

   }

   ngOnInit() {
      this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
   }

}
