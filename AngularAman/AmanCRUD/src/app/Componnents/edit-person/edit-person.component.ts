import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/Services/person-service.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  constructor(public Service: PersonServiceService, private route:ActivatedRoute) { }
  id:any
  person: any = { name: "", age: 0, addressId: 0 };
  AllAddress: any;
  ngOnInit(): void {
    this.Service.getAllAddresess().subscribe(
      (data1) => {
        console.log(data1)
        this.AllAddress = data1})

      // this.route.snapshot.paramMap.get('id')) to get the id from the route
      this.id = this.route.snapshot.paramMap.get('id');
    this.Service.getPersonById(this.id).subscribe(
      (data) => { this.person = data }
    )

  }



  EditPerson(obj: any) {
    console.log(obj);
    console.log(this.person);
    this.Service.UpdatePerson(this.id,obj).subscribe(() =>
      window.location.reload()
    )
  }
}
