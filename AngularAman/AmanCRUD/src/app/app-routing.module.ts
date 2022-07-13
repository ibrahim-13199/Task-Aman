import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './Componnents/list-person/list-person.component';
import {AddressComponent} from './Componnents/address/address.component'
import { AddPersonComponent } from './Componnents/add-person/add-person.component';
import { EditPersonComponent } from './Componnents/edit-person/edit-person.component';
import { PersondetailsComponent } from './Componnents/persondetails/persondetails.component';
const routes: Routes = [
  {path:"PersonList",component:ListPersonComponent},
  {path:"",component:ListPersonComponent},
  {path:"addperson",component:AddPersonComponent},
  {path:"edit/:id",component:EditPersonComponent},
  {path:"person/:id",component:PersondetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
