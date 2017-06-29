import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { EventService } from './../../services/event.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
   selector: 'app-events-list',
   templateUrl: './events-list.component.html',
   styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
   events: Array<Event>;

   constructor(
      private eventService: EventService,
      private toastr: ToastsManager,
      private vcr: ViewContainerRef) {
         this.toastr.setRootViewContainerRef(vcr);
   }

   ngOnInit() {
      this.events = this.eventService.getEvents();
   }

   handleThumbnailClick(message: string, title?: string) {
      this.toastr.success('Cost: $' + message, 'Event: ' + title);
   }
}
