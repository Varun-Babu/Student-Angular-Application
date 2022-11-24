import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchStudentComponent } from './search-student/search-student.component';

const myRoute: Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewStudentsComponent
  },
  {
    path:"search",
    component:AddStudentComponent 
  },
  {
    path:"delete",
    component:SearchStudentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewStudentsComponent,
    AddStudentComponent,
    NavbarComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
