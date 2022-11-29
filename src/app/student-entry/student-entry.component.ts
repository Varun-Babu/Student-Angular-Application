import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
name=""
roll=""
admission=""
mobile=""
college=""
parent=""
parentno=""
username=""
password=""

readValue = () =>
{
  let data:any = {"name":this.name,"id":this.roll,"admission":this.admission,"mobile":this.mobile,"college":this.college,"parent":this.parent,"parentno":this.parentno,"username":this.username,"password":this.password}
  console.log(data)
}

}
