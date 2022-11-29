import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  roll =""

  readValue = () =>
  {
    let data:any = {"Id":this.roll}
  }
}
