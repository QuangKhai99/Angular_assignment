import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http:HttpClient) { }

  getHttpSubjects(){
    return this.http.get(`../assets/Subjects.js`);
 }
}
