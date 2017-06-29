import { Component, OnInit, Input } from '@angular/core';
import { Event } from './../../models/event';

@Component({
   selector: 'app-event-thumbnail',
   templateUrl: './event-thumbnail.component.html',
   styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
   @Input() event: Event;

   constructor() { }

   ngOnInit() {
   }

   private getStartTimeClass(): any {
      const isEarlyStart = this.event && this.event.time === '8:00 am';
      const isLateStart = this.event && this.event.time === '10:00 am';
      return { green: isEarlyStart, red: isLateStart, bold: true };
   }

   private getStartTimeStyle(): any {
      if (this.event) {
         switch (this.event.time) {
            case '8:00 am':
               return { color: '#005000', 'font-weight': 'bold' };
            case '10:00 am':
               return { color: '#A00000', 'font-weight': 'bold' };
            default:
               break;
         }
      }
      return {'font-weight': 'bold'};
   }
}
