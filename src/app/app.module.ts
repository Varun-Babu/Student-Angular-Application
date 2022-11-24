import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { ViewStudentsComponent } from './view-students/view-students.component';

const myRoute: Routes=[
  {
    path:"",
    component:StudentEntryComponent
  },
  {
    path:"view",
    component:ViewStudentsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    ViewStudentsComponent
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
