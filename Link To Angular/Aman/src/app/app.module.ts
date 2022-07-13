import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { AddressesComponent } from './Componnents/addresses/addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonComponent,
    AddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
