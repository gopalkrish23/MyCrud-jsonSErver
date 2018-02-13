import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
import{RoutingClass} from './app-routing-module'
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import {getdataService} from './getdataServie'

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingClass,
    FormsModule
  ],
  providers: [getdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
