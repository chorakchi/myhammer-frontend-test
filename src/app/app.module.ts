import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from "./../material-module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogOverviewDialog } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    DialogOverviewDialog
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
