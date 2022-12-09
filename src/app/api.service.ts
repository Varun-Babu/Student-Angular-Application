import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchStudents = () =>{
    return this.http.get("http://localhost:8008/view")
  }
  addStudents = (data:any) =>{
    return this.http.post("http://localhost:8008/add", data)
  }
  searchStudents = (data:any) =>{
    return this.http.post("http://localhost:8008/search", data)
  }
  deleteStudents = (data:any) =>{
    return this.http.post("http://localhost:8008/delete", data)
  }
}
