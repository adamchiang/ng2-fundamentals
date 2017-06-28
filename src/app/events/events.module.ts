import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { EventsListComponent } from './events-list/events-list.component';

@NgModule({
   declarations: [
      EventsListComponent
   ],
   exports: [EventsListComponent],
   imports: [
      SharedModule
   ]
})
export class EventsModule { }
