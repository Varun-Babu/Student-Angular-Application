import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
name=""
rollNo=""
admsnNo=""
college=""

username=""
password=""

constructor(private api:ApiService){}

readValue = () =>
{
  let data:any = {"name":this.name,"rollNo":this.rollNo,"admsnNo":this.admsnNo,"college":this.college,"username":this.username,"password":this.password}
  console.log(data)
  this.api.addStudents(data).subscribe(
    (response)=>{
      console.log(response)
    }
  )
}

}
