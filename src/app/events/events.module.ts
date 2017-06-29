import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

import { EventService } from './../services/event.service';

@NgModule({
   declarations: [
      EventsListComponent,
      EventThumbnailComponent,
      EventsDetailsComponent
   ],
   imports: [
      SharedModule,
      RouterModule.forChild([
         { path: 'events', component: EventsListComponent },
         { path: 'events/:id', component: EventsDetailsComponent }
      ])
   ],
   providers: [EventService]
})
export class EventsModule { }
