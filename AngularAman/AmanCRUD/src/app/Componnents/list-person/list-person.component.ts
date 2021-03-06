import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from 'src/Services/person-service.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor(public Service:PersonServiceService) { }

  AllAddress:any;
  Persons:any;
  ngOnInit(): void {
    {this.Service.getAllAddresess().subscribe(
      (data1)=>{console.log(data1)
        this.AllAddress=data1})
    this.Service.getAllPersons().subscribe(
      
      (data:any)=>{this.Persons=data},
      
      (error:any)=>{alert(error)}
      )
    }
  }
      delete (id:any) {
      console.log(id);
      this.Service.DeletePerson(id);
    }  
    
}
