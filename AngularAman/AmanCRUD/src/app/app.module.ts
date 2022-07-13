import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonComponent } from './Componnents/list-person/list-person.component';
import { AddressComponent } from './Componnents/address/address.component';

import { AddPersonComponent } from './Componnents/add-person/add-person.component';
import { EditPersonComponent } from './Componnents/edit-person/edit-person.component';
import { PersondetailsComponent } from './Componnents/persondetails/persondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    AddressComponent,
    
    AddPersonComponent,
         EditPersonComponent,
         PersondetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
