import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      EventsModule,
      SharedModule,
      HttpModule
      // RouterModule.forRoot([])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
