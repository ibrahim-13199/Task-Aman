import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/Services/person-service.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor(public Service:PersonServiceService){}
   person:any={name:"",age:0,addressId:0};
   AllAddress:any;
  ngOnInit(): void
  {this.Service.getAllAddresess().subscribe(
    (data1)=>{console.log(data1)
      this.AllAddress=data1})}
  AddNewPerson(obj:any)
  {
    this.Service.AddPerson(obj).subscribe(()=>
    window.location.reload()
    )
  }

}
