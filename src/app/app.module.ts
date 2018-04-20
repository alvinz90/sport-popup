import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {        
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule, 
  MatGridListModule, 
  MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopupSportsComponent } from './popup-sports/popup-sports.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupSportsComponent
  ],
  entryComponents: [
    PopupSportsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, 
    MatDialogModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
