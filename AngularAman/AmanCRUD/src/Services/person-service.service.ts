import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor(private http:HttpClient) { }

    //Link to access Api lin can br access person or address 
  
    baseUrl:string="http://localhost:33793/api";


    ////////////////////////////////////////CRUD_For_Person/////////////////////////////////


getAllPersons()
{
    return this.http.get(`${this.baseUrl}/Person`);

}

getPersonById(id:any)
{
  return this.http.get(`${this.baseUrl}/Person/${id}`)

}

AddPerson(Person:any){
  
  return this.http.post(`${this.baseUrl}/Person`,Person)

}

UpdatePerson(id:any,Person:any){
   
  return this.http.put(`${this.baseUrl}/Person/${id}`,Person)

}

DeletePerson(id:any){
   console.log(`${this.baseUrl}/Person/${id}`)
  return this.http.delete(`${this.baseUrl}/Person/${id}`)

}


////////////////////////////////////////CRUD_For_Address/////////////////////////////////



getAllAddresess()
{
    return this.http.get(`${this.baseUrl}/Address`);

}

getAddressById(id:any)
{
  return this.http.get(`${this.baseUrl}/Address/${id}`)

}

AddAddress(Address:any){
  
  return this.http.post(`${this.baseUrl}/Address}`,Address)

}

UpdateAddress(id:any,Address:any){
   
  return this.http.put(`${this.baseUrl}/Address/${id}`,Address)

}

DeleteAddress(id:any){
   
  return this.http.delete(`${this.baseUrl}/Address/${id}`)

}


}
