import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../students';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) {
  }
  sosanh;
  students=[];
  getHttpStudents() {
    return this.http.get<Student[]>(`../../assets/Students.js`);
  }
  addAllStudents(item) {
    // console.log(this.students);
    // if (this.students != []) {
    //   this.sosanh = this.students.filter(p => {
    //     if (item.id === p.id) {
    //       return p;
    //     }
    //   })
    // }   
    
    // if (this.students == []) {
    //   this.students.push(item);
    // } else if (this.sosanh) {
    //   return;
    // } else {
    //   this.students.push(item);
    // }
    
      this.students.push(item);
  }
  // addF(item){
  //   if(this.students!=[]){
  //     this.students.push(item)
  //   }
  // }
  getAllStudent() {
    return this.students
  }
}
