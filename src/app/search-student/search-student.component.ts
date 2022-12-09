import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {

name=""
rollNo=""
admsnNo=""
college=""

searchData:any =[]

constructor(private api:ApiService){}

  readValue = () =>
  {
    let data:any = {"studId":this.rollNo}
    console.log(data)
    this.api.searchStudents(data).subscribe(
      (response:any) => {
        console.log(response)
        if (response.length==0) {
          alert("Invalid")
        } else {
          this.searchData=(response)
      }
      }
    )
    
  }

  deleteBtnClick= (rollNo:any)=>{
    let data:any = {"studId":rollNo}
    this.api.deleteStudents(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" deleted Successfully")
        } else {
          alert("Invalid")
        }

      }
    )

  }

 }
