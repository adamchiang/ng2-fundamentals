import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsModule } from './events/events.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      EventsModule,
      HttpModule,
      SharedModule,
      ToastModule.forRoot(),
      RouterModule.forRoot([
         { path: '', redirectTo: 'events', pathMatch: 'full' },
         { path: '**', redirectTo: 'events', pathMatch: 'full' }
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
